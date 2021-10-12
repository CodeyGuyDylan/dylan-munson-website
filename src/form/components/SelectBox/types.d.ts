// Libraries
import { FC } from 'react'
import { FieldHookConfig } from 'formik'

interface ISelectBox {
  label: string
  hint?: string
  options: string[]
  changeHandler?: (value: string) => void
}

export type SelectBoxType = FC<ISelectBox & FieldHookConfig<string>>
