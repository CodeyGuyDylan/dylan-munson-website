// Libraries
import { FC } from 'react'
import { FieldHookConfig } from 'formik'

interface ITextInput {
  label: string
  hint?: string
}

export type TextInputType = FC<ITextInput & FieldHookConfig<string>>
