import { api, Document } from '@/api'
import { Book, ChainId, CreateBookResponse } from '@/types'
import {
  useMarketplace,
  useContractRegistry,
  TokenParams,
} from '@/composables/contracts'
import { useNetworksStore, useWeb3ProvidersStore } from '@/store'
import { computed } from 'vue'
import { BN } from '@/utils/math.util'
import { ethers } from 'ethers'
import { IMarketplace } from '@/types/contracts/MarketPlace'
import { switchNetwork } from '@/helpers'

// Info about book gathering partly from backend and partly from contract
export type FullBookInfo = Book &
  Omit<IMarketplace.DetailedTokenParamsStruct, 'tokenParams'> &
  IMarketplace.TokenParamsStruct
export type BaseBookInfo = Book & IMarketplace.BaseTokenParamsStruct

type CreateBookOpts = {
  tokenName: string
  tokenSymbol: string
  description: string
  price: string
  voucherToken: string
  voucherTokenAmount: string
  banner: Document
  bookFile: Document
  chainIds: Array<number>
  floorPrice: string
  isNftBuyable: boolean
  fundsRecipient: string
}

export function useBooks(contractRegistryAddress?: string) {
  const networkStore = useNetworksStore()
  const web3Store = useWeb3ProvidersStore()
  const provider = computed(() => web3Store.provider)

  const { getMarketPlaceAddress, init: initRegistry } = useContractRegistry(
    contractRegistryAddress,
  )

  const {
    deployTokenContract,
    init: initMarketPlace,
    getTokenParams,
    getBooksBatch,
    updateAllParams,
  } = useMarketplace()

  const _initMarketPlace = async (address?: string) => {
    const marketPlaceAddress = address || (await getMarketPlaceAddress())

    if (!marketPlaceAddress) return

    initMarketPlace(marketPlaceAddress)
  }

  const _initContractRegistry = async (chainId: number) => {
    if (!networkStore.list.length) {
      await networkStore.loadNetworks()
    }

    const appropriateRegistryAddress = networkStore.list.find(
      network => network.chain_id === chainId,
    )?.factory_address

    if (!appropriateRegistryAddress)
      throw new Error('failed to get registry address')

    initRegistry(appropriateRegistryAddress)
  }

  const _formatBaseParams = (
    backendData: Book,
    contractData: IMarketplace.BaseTokenParamsStructOutput,
  ): BaseBookInfo => {
    return {
      ...backendData,
      pricePerOneToken: new BN(contractData.pricePerOneToken._hex).toString(),
      tokenName: contractData.tokenName,
      tokenContract: contractData.tokenContract,
      isDisabled: contractData.isDisabled,
    }
  }

  const _formatDetailedParams = (
    backendData: Book,
    contractData: IMarketplace.DetailedTokenParamsStructOutput,
  ): FullBookInfo => {
    return {
      ...backendData,
      pricePerOneToken: new BN(
        contractData.tokenParams.pricePerOneToken._hex,
      ).toString(),
      minNFTFloorPrice: new BN(
        contractData.tokenParams.minNFTFloorPrice._hex,
      ).toString(),
      voucherTokenContract: contractData.tokenParams.voucherTokenContract,
      voucherTokensAmount: new BN(
        contractData.tokenParams.voucherTokensAmount._hex,
      ).toString(),
      fundsRecipient: contractData.tokenParams.fundsRecipient,
      isNFTBuyable: contractData.tokenParams.isNFTBuyable,
      isDisabled: contractData.tokenParams.isDisabled,
      tokenName: contractData.tokenName,
      tokenSymbol: contractData.tokenSymbol,
      tokenContract: contractData.tokenContract,
    }
  }

  const _gatherDetailedBookData = async (book: Book): Promise<FullBookInfo> => {
    const bookNetwork = book.networks.find(
      el => el.attributes.chain_id === Number(provider.value.chainId),
    )

    // console.log(bookNetwork, provider.value.chainId)

    if (!bookNetwork) throw new Error('failed to get appropriate info source')

    _initContractRegistry(bookNetwork.attributes.chain_id)
    await _initMarketPlace()
    const bookParams = await getTokenParams([
      bookNetwork.attributes.contract_address,
    ])

    if (!bookParams) throw new Error('Failed to get info from contract')

    return _formatDetailedParams(book, bookParams[0])
  }

  const _gatherBaseBookData = (
    backendInfoPart: Book[],
    contractInfoPart: IMarketplace.BaseTokenParamsStructOutput[],
  ): BaseBookInfo[] => {
    return contractInfoPart.map(book => {
      const matchingInfo = backendInfoPart.find(el =>
        el.networks.find(
          network => network.attributes.contract_address === book.tokenContract,
        ),
      )

      if (!matchingInfo) throw new Error('Info parts does not match')

      return _formatBaseParams(matchingInfo, book)
    })
  }

  const getBooksFromContract = async (
    limit: number,
    offset: number,
    chainId: ChainId,
  ) => {
    if (!limit) return []

    // console.log(limit, offset, chainId)

    if (!networkStore.list.length) {
      await networkStore.loadNetworks()
    }

    if (
      !networkStore.list.some(network => network.chain_id === Number(chainId))
    ) {
      return []
    }

    await switchNetwork(chainId)
    await _initContractRegistry(Number(chainId))
    await _initMarketPlace()

    const bookContractsList = await getBooksBatch(limit, offset)

    // console.log(bookContractsList)

    if (!bookContractsList?.length) return []

    const { data: booksFromBackend } = await api.get<Book[]>(
      '/integrations/books',
      {
        filter: {
          contract: bookContractsList.map(book => book.tokenContract).join(','),
        },
        page: {
          limit: limit,
          order: 'desc',
        },
      },
    )

    // console.log(booksFromBackend)

    const formattedBooks = _gatherBaseBookData(
      booksFromBackend,
      bookContractsList,
    )
    // console.log(formattedBooks)

    return formattedBooks
  }

  const getBookById = async (id: number | string): Promise<FullBookInfo> => {
    const { data } = await api.get<Book>(`/integrations/books/${id}`)

    const bookData = await _gatherDetailedBookData(data)

    // console.log(bookData)

    return bookData
  }

  const _uploadBookMedia = async (...bookMedia: Array<Document>) => {
    await Document.uploadDocuments(bookMedia)
  }

  const _createBook = (opts: {
    description: string
    banner: Document
    bookFile: Document
    networks: Array<{
      attributes: {
        chain_id: number
        contract_address: string
      }
    }>
  }) => {
    return api.post<CreateBookResponse>('/integrations/books', {
      data: {
        type: 'books',
        attributes: {
          description: opts.description,
          banner: {
            type: 'banners',
            attributes: opts.banner,
          },
          file: {
            type: 'files',
            attributes: opts.bookFile,
          },
          networks: opts.networks,
        },
      },
    })
  }

  /**
   * Deploys 1 book instance on all provided chains
   *
   * @param opts - all needed params for creating new book
   * TODO: handling vouchers
   *
   * @returns - array of deployed books addresses
   */
  const _deployBook = async (
    opts: Omit<CreateBookOpts, 'description' | 'banner' | 'bookFile'>,
  ): Promise<string[]> => {
    const deployedBookAddressList: string[] = []

    // deploying 1 book on all chains
    for (const chainId of opts.chainIds) {
      _initContractRegistry(chainId)
      await switchNetwork(chainId)
      await _initMarketPlace()

      const receipt = await deployTokenContract(
        opts.tokenName,
        opts.tokenSymbol,
        {
          pricePerOneToken: opts.price,
          minNFTFloorPrice: opts.floorPrice,
          voucherTokenContract:
            opts.voucherToken || ethers.constants.AddressZero,
          voucherTokensAmount: opts.voucherTokenAmount,
          isNFTBuyable: opts.isNftBuyable,
          fundsRecipient: opts.fundsRecipient || ethers.constants.AddressZero,
          isDisabled: false,
        },
      )

      if (!receipt) throw new Error('Failed to get tx receipt')

      const contractAddress = receipt.logs[0].address
      deployedBookAddressList.push(contractAddress)
    }

    return deployedBookAddressList
  }

  const createBook = async (opts: CreateBookOpts) => {
    // console.log(opts)

    const weiPrice = new BN(opts.price).toWei().toString()
    const weiFloorPrice = new BN(opts.floorPrice).toWei().toString()
    const weiTokenAmount = new BN(opts.voucherTokenAmount).toWei().toString()

    const deployedBookAddressList = await _deployBook({
      ...opts,
      price: weiPrice,
      floorPrice: weiFloorPrice,
      voucherTokenAmount: weiTokenAmount,
    })

    await _uploadBookMedia(opts.banner, opts.bookFile)

    await _createBook({
      description: opts.description,
      banner: opts.banner,
      bookFile: opts.bookFile,
      networks: opts.chainIds.map((el, idx) => ({
        attributes: {
          chain_id: el,
          contract_address: deployedBookAddressList[idx],
        },
      })),
    })

    // console.log(deployedBookAddressList)
  }

  /**
   * Update 1 book instance on all provided chains
   *
   * @param opts - all needed params for updating new book
   * TODO: handling vouchers
   */
  const updateBook = async (
    opts: {
      name: string
      symbol: string
      contractParams: TokenParams
      apiParams: Pick<Book, 'description' | 'id' | 'networks'> & {
        file: Document
        banner: Document
      }
    },
    updateOpts: {
      apiValuesUpdated: boolean
      filesUpdated: boolean
      contractValuesUpdate: boolean
    },
  ) => {
    const weiPrice = new BN(opts.contractParams.pricePerOneToken)
      .toWei()
      .toString()
    const weiFloorPrice = new BN(opts.contractParams.minNFTFloorPrice)
      .toWei()
      .toString()
    const weiTokenAmount = new BN(opts.contractParams.voucherTokensAmount)
      .toWei()
      .toString()

    if (updateOpts.contractValuesUpdate) {
      // console.log('contract values updated', opts.apiParams.networks)

      for (const {
        attributes: { chain_id, contract_address },
      } of opts.apiParams.networks) {
        _initContractRegistry(chain_id)
        await switchNetwork(chain_id)
        await _initMarketPlace()

        await updateAllParams(contract_address, opts.name, opts.symbol, {
          ...opts.contractParams,
          fundsRecipient:
            opts.contractParams.fundsRecipient || ethers.constants.AddressZero,
          pricePerOneToken: weiPrice,
          minNFTFloorPrice: weiFloorPrice,
          voucherTokensAmount: weiTokenAmount,
          voucherTokenContract:
            opts.contractParams.voucherTokenContract ||
            ethers.constants.AddressZero,
        })
      }
    }

    if (updateOpts.filesUpdated) {
      // console.log('files updated')
      await _uploadBookMedia(opts.apiParams.banner, opts.apiParams.file)
    }

    if (updateOpts.apiValuesUpdated) {
      // console.log('api values updated')

      await api.patch(`/integrations/books/${opts.apiParams.id}`, {
        data: {
          type: 'books',
          attributes: {
            ...(opts.apiParams.description
              ? { description: opts.apiParams.description }
              : {}),
            ...(opts.apiParams.banner
              ? {
                  banner: {
                    type: 'banners',
                    attributes: opts.apiParams.banner,
                  },
                }
              : {}),
            ...(opts.apiParams.file
              ? {
                  file: {
                    type: 'files',
                    attributes: opts.apiParams.file,
                  },
                }
              : {}),
          },
        },
      })
    }
  }

  const addNetworks = async (
    opts: Omit<CreateBookOpts, 'description' | 'banner' | 'bookFile'> & {
      id: string
    },
  ) => {
    const weiPrice = new BN(opts.price).toWei().toString()
    const weiFloorPrice = new BN(opts.floorPrice).toWei().toString()
    const weiTokenAmount = new BN(opts.voucherTokenAmount).toWei().toString()

    const deployedBookAddressList = await _deployBook({
      ...opts,
      price: weiPrice,
      floorPrice: weiFloorPrice,
      voucherTokenAmount: weiTokenAmount,
    })

    await api.post(`/integrations/books/${opts.id}/network`, {
      data: opts.chainIds.map((el, idx) => ({
        attributes: {
          chain_id: el,
          contract_address: deployedBookAddressList[idx],
        },
      })),
    })
  }

  return {
    getBookById,
    createBook,
    updateBook,
    getBooksFromContract,
    addNetworks,
  }
}
