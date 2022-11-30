import {
  required as _required,
  requiredIf as _requiredIf,
  email as _email,
  minLength as _minLength,
  maxLength as _maxLength,
  sameAs as _sameAs,
  minValue as _minValue,
} from '@vuelidate/validators'
import { ValidationRule } from '@vuelidate/core'
import { Ref } from 'vue'
import { createI18nMessage, MessageProps } from '@vuelidate/validators'
import { get } from 'lodash-es'
import { i18n } from '@/localization'

const { t } = i18n.global || i18n

const messagePath = ({ $validator }: MessageProps) =>
  `validations.field-error_${$validator}`

const withI18nMessage = createI18nMessage({ t, messagePath })

export const required = <ValidationRule>withI18nMessage(_required)
export const requiredIf = (
  rule: boolean | Ref<boolean> | string | (() => boolean | Promise<boolean>),
): ValidationRule => <ValidationRule>withI18nMessage(_requiredIf(rule))

export const email = <ValidationRule>withI18nMessage(_email)

export const minLength = (length: number): ValidationRule =>
  <ValidationRule>withI18nMessage(_minLength(length))

export const maxLength = (length: number): ValidationRule =>
  <ValidationRule>withI18nMessage(_maxLength(length))

export const sameAs = (field: Ref): ValidationRule => {
  return <ValidationRule>withI18nMessage(_sameAs(field, get(field, '_key')))
}

export const minValue = (
  minValue: number | Ref<number> | string | Ref<string>,
): ValidationRule => {
  return <ValidationRule>withI18nMessage(_minValue(minValue))
}
