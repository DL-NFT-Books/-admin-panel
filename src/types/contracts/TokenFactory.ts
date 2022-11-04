/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace ITokenFactory {
  export type BaseTokenContractInfoStruct = {
    tokenContractAddr: PromiseOrValue<string>;
    pricePerOneToken: PromiseOrValue<BigNumberish>;
  };

  export type BaseTokenContractInfoStructOutput = [string, BigNumber] & {
    tokenContractAddr: string;
    pricePerOneToken: BigNumber;
  };

  export type UserNFTsInfoStruct = {
    tokenContractAddr: PromiseOrValue<string>;
    tokenIDs: PromiseOrValue<BigNumberish>[];
  };

  export type UserNFTsInfoStructOutput = [string, BigNumber[]] & {
    tokenContractAddr: string;
    tokenIDs: BigNumber[];
  };
}

export interface TokenFactoryInterface extends utils.Interface {
  functions: {
    "__TokenFactory_init(address[],string,uint8)": FunctionFragment;
    "baseTokenContractsURI()": FunctionFragment;
    "deployTokenContract(string,string,uint256)": FunctionFragment;
    "getAdmins()": FunctionFragment;
    "getBaseTokenContractsInfo(address[])": FunctionFragment;
    "getTokenContractsCount()": FunctionFragment;
    "getTokenContractsImpl()": FunctionFragment;
    "getTokenContractsPart(uint256,uint256)": FunctionFragment;
    "getUserNFTsInfo(address)": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "poolsBeacon()": FunctionFragment;
    "priceDecimals()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBaseTokenContractsURI(string)": FunctionFragment;
    "setNewImplementation(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAdmins(address[],bool)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "__TokenFactory_init"
      | "baseTokenContractsURI"
      | "deployTokenContract"
      | "getAdmins"
      | "getBaseTokenContractsInfo"
      | "getTokenContractsCount"
      | "getTokenContractsImpl"
      | "getTokenContractsPart"
      | "getUserNFTsInfo"
      | "isAdmin"
      | "owner"
      | "poolsBeacon"
      | "priceDecimals"
      | "proxiableUUID"
      | "renounceOwnership"
      | "setBaseTokenContractsURI"
      | "setNewImplementation"
      | "transferOwnership"
      | "updateAdmins"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "__TokenFactory_init",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "baseTokenContractsURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployTokenContract",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "getAdmins", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBaseTokenContractsInfo",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenContractsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenContractsImpl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenContractsPart",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserNFTsInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolsBeacon",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseTokenContractsURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setNewImplementation",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAdmins",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "__TokenFactory_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "baseTokenContractsURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployTokenContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAdmins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBaseTokenContractsInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenContractsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenContractsImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenContractsPart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserNFTsInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolsBeacon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseTokenContractsURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAdmins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "AdminsUpdated(address[],bool)": EventFragment;
    "BaseTokenContractsURIUpdated(string)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenContractDeployed(address,uint256,string,string)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminsUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BaseTokenContractsURIUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenContractDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface AdminsUpdatedEventObject {
  adminsToUpdate: string[];
  isAdding: boolean;
}
export type AdminsUpdatedEvent = TypedEvent<
  [string[], boolean],
  AdminsUpdatedEventObject
>;

export type AdminsUpdatedEventFilter = TypedEventFilter<AdminsUpdatedEvent>;

export interface BaseTokenContractsURIUpdatedEventObject {
  newBaseTokenContractsURI: string;
}
export type BaseTokenContractsURIUpdatedEvent = TypedEvent<
  [string],
  BaseTokenContractsURIUpdatedEventObject
>;

export type BaseTokenContractsURIUpdatedEventFilter =
  TypedEventFilter<BaseTokenContractsURIUpdatedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenContractDeployedEventObject {
  newTokenContractAddr: string;
  pricePerOneToken: BigNumber;
  tokenName: string;
  tokenSymbol: string;
}
export type TokenContractDeployedEvent = TypedEvent<
  [string, BigNumber, string, string],
  TokenContractDeployedEventObject
>;

export type TokenContractDeployedEventFilter =
  TypedEventFilter<TokenContractDeployedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface TokenFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    __TokenFactory_init(
      adminsArr_: PromiseOrValue<string>[],
      baseTokenContractsURI_: PromiseOrValue<string>,
      priceDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    baseTokenContractsURI(overrides?: CallOverrides): Promise<[string]>;

    deployTokenContract(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      pricePerOneToken_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAdmins(overrides?: CallOverrides): Promise<[string[]]>;

    getBaseTokenContractsInfo(
      tokenContractsArr_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<
      [ITokenFactory.BaseTokenContractInfoStructOutput[]] & {
        tokenContractsInfoArr_: ITokenFactory.BaseTokenContractInfoStructOutput[];
      }
    >;

    getTokenContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenContractsImpl(overrides?: CallOverrides): Promise<[string]>;

    getTokenContractsPart(
      offset_: PromiseOrValue<BigNumberish>,
      limit_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getUserNFTsInfo(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [ITokenFactory.UserNFTsInfoStructOutput[]] & {
        userNFTsInfoArr_: ITokenFactory.UserNFTsInfoStructOutput[];
      }
    >;

    isAdmin(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolsBeacon(overrides?: CallOverrides): Promise<[string]>;

    priceDecimals(overrides?: CallOverrides): Promise<[number]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBaseTokenContractsURI(
      baseTokenContractsURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNewImplementation(
      newImplementation_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAdmins(
      adminsToUpdate_: PromiseOrValue<string>[],
      isAdding_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  __TokenFactory_init(
    adminsArr_: PromiseOrValue<string>[],
    baseTokenContractsURI_: PromiseOrValue<string>,
    priceDecimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  baseTokenContractsURI(overrides?: CallOverrides): Promise<string>;

  deployTokenContract(
    tokenName_: PromiseOrValue<string>,
    tokenSymbol_: PromiseOrValue<string>,
    pricePerOneToken_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAdmins(overrides?: CallOverrides): Promise<string[]>;

  getBaseTokenContractsInfo(
    tokenContractsArr_: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<ITokenFactory.BaseTokenContractInfoStructOutput[]>;

  getTokenContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenContractsImpl(overrides?: CallOverrides): Promise<string>;

  getTokenContractsPart(
    offset_: PromiseOrValue<BigNumberish>,
    limit_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getUserNFTsInfo(
    userAddr_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<ITokenFactory.UserNFTsInfoStructOutput[]>;

  isAdmin(
    userAddr_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolsBeacon(overrides?: CallOverrides): Promise<string>;

  priceDecimals(overrides?: CallOverrides): Promise<number>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBaseTokenContractsURI(
    baseTokenContractsURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNewImplementation(
    newImplementation_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAdmins(
    adminsToUpdate_: PromiseOrValue<string>[],
    isAdding_: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    __TokenFactory_init(
      adminsArr_: PromiseOrValue<string>[],
      baseTokenContractsURI_: PromiseOrValue<string>,
      priceDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    baseTokenContractsURI(overrides?: CallOverrides): Promise<string>;

    deployTokenContract(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      pricePerOneToken_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAdmins(overrides?: CallOverrides): Promise<string[]>;

    getBaseTokenContractsInfo(
      tokenContractsArr_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<ITokenFactory.BaseTokenContractInfoStructOutput[]>;

    getTokenContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenContractsImpl(overrides?: CallOverrides): Promise<string>;

    getTokenContractsPart(
      offset_: PromiseOrValue<BigNumberish>,
      limit_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getUserNFTsInfo(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<ITokenFactory.UserNFTsInfoStructOutput[]>;

    isAdmin(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolsBeacon(overrides?: CallOverrides): Promise<string>;

    priceDecimals(overrides?: CallOverrides): Promise<number>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBaseTokenContractsURI(
      baseTokenContractsURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setNewImplementation(
      newImplementation_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAdmins(
      adminsToUpdate_: PromiseOrValue<string>[],
      isAdding_: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "AdminsUpdated(address[],bool)"(
      adminsToUpdate?: null,
      isAdding?: null
    ): AdminsUpdatedEventFilter;
    AdminsUpdated(
      adminsToUpdate?: null,
      isAdding?: null
    ): AdminsUpdatedEventFilter;

    "BaseTokenContractsURIUpdated(string)"(
      newBaseTokenContractsURI?: null
    ): BaseTokenContractsURIUpdatedEventFilter;
    BaseTokenContractsURIUpdated(
      newBaseTokenContractsURI?: null
    ): BaseTokenContractsURIUpdatedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenContractDeployed(address,uint256,string,string)"(
      newTokenContractAddr?: null,
      pricePerOneToken?: null,
      tokenName?: null,
      tokenSymbol?: null
    ): TokenContractDeployedEventFilter;
    TokenContractDeployed(
      newTokenContractAddr?: null,
      pricePerOneToken?: null,
      tokenName?: null,
      tokenSymbol?: null
    ): TokenContractDeployedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    __TokenFactory_init(
      adminsArr_: PromiseOrValue<string>[],
      baseTokenContractsURI_: PromiseOrValue<string>,
      priceDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    baseTokenContractsURI(overrides?: CallOverrides): Promise<BigNumber>;

    deployTokenContract(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      pricePerOneToken_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAdmins(overrides?: CallOverrides): Promise<BigNumber>;

    getBaseTokenContractsInfo(
      tokenContractsArr_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenContractsImpl(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenContractsPart(
      offset_: PromiseOrValue<BigNumberish>,
      limit_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserNFTsInfo(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAdmin(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolsBeacon(overrides?: CallOverrides): Promise<BigNumber>;

    priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBaseTokenContractsURI(
      baseTokenContractsURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNewImplementation(
      newImplementation_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAdmins(
      adminsToUpdate_: PromiseOrValue<string>[],
      isAdding_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __TokenFactory_init(
      adminsArr_: PromiseOrValue<string>[],
      baseTokenContractsURI_: PromiseOrValue<string>,
      priceDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    baseTokenContractsURI(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployTokenContract(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      pricePerOneToken_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAdmins(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBaseTokenContractsInfo(
      tokenContractsArr_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenContractsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenContractsImpl(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenContractsPart(
      offset_: PromiseOrValue<BigNumberish>,
      limit_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserNFTsInfo(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAdmin(
      userAddr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolsBeacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBaseTokenContractsURI(
      baseTokenContractsURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNewImplementation(
      newImplementation_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAdmins(
      adminsToUpdate_: PromiseOrValue<string>[],
      isAdding_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
