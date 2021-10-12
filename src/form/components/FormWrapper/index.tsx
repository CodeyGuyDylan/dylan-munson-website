// Libraries
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ThemeProvider } from 'styled-components'

// Components
import SubmitButton from '../SubmitButton'

// Helper
import theme from '../../helper/theme'

// Styles
import { StyledForm } from './styles'

// Types
import { FormWrapperType } from './types'

const FormWrapper: FormWrapperType = ({
   name,
   emailSubject,
   initialValues,
   validationSchema,
   onSubmit,
   submitButtonText = 'Submit',
   netlify = false,
   children,
   className,
}) => {
   return (
      <ThemeProvider theme={theme}>
         <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={onSubmit}
         >
            {/* Adds netlify honeypot and data collection to form if is netlify form */}
            {netlify ? (
               <StyledForm
                  className={className}
                  name={name}
                  data-netlify={true}
                  netlify-honeypot='bot-field'
               >
                  <input type='hidden' name='subject' value={emailSubject} />
                  <input type='hidden' name='bot-field' />
                  <div>
                     {children}
                     <br />
                     <SubmitButton>{submitButtonText}</SubmitButton>
                  </div>
               </StyledForm>
            ) : (
               <StyledForm className={className} name={name}>
                  <div>
                     {children}
                     <SubmitButton>{submitButtonText}</SubmitButton>
                  </div>
               </StyledForm>
            )}
         </Formik>
      </ThemeProvider>
   )
}

export default FormWrapper
