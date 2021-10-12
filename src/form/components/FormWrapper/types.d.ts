// Libraries
import { FC, ReactNode } from 'react'
import { FormikHelpers } from 'formik'
import { ObjectShape } from 'yup/lib/object'

interface IFormWrapper {
  name: string
  emailSubject?: string
  initialValues: ObjectShape
  validationSchema: ObjectShape
  submitButtonText?: string
  onSubmit: ((
    values: {
      [key: string]: unknown
    },
    formikHelpers: FormikHelpers<ObjectShape>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => void | Promise<any>) &
    ((
      values: ObjectShape,
      actions: {
        setSubmitting: () => void
        resetForm: () => void
      }
    ) => void)
  netlify?: boolean
  children: ReactNode
  className?: string
}

export type FormWrapperType = FC<IFormWrapper>
