// Libraries
import { FC } from 'react'
import { FieldHookConfig } from 'formik'

interface ITextArea {
  label: string
  hint?: string
  rows?: number
}

export type TextAreaType = FC<ITextArea & FieldHookConfig<string>>
