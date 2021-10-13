// Libraries
import * as Yup from 'yup'

// Api
import { submitToNtl } from '../../../api/submitToNetlify'
import { sendFormData } from '../../../api/serverless-functions'

// Components
import FormWrapper from '../../components/FormWrapper'
import TextInput from '../../components/TextInput'
import TextArea from '../../components/TextArea'

// Helper
import { invalidEmailMsg, phoneRegex } from '../../helper/validation'

// Types
import { ContactType } from './types'
import { ObjectShape } from 'yup/lib/object'

const Contact: ContactType = ({ setIsAlertVisible }) => {
   // Automatically fill out name and email fields if user is logged in
   const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
   }

   return (
      <FormWrapper
         name='contact-form'
         initialValues={(initialValues as unknown) as ObjectShape}
         validationSchema={{
            firstName: Yup.string()
               .max(100, 'Must be 100 characters or less')
               .required('First name is required'),
            lastName: Yup.string()
               .max(100, 'Must be 100 characters or less')
               .required('Last name is required'),
            email: Yup.string()
               .email(invalidEmailMsg)
               .required('Email address is required'),
            phone: Yup.string().matches(
               phoneRegex,
               'Must be a valid phone number'
            ),
            message: Yup.string()
               .max(1000, 'No more than 1000 charcaters are allowed')
               .required('A brief message about your inquiry is required'),
         }}
         onSubmit={(values, { resetForm, setSubmitting }) => {
            const { firstName, email } = values

            submitToNtl(
               values,
               'contact-form',
               'Personal Website Form Submission'
            )
               .then(() => {
                  sendFormData(
                     `/.netlify/functions/submit-contact-form-background`,
                     {
                        firstName,
                        email,
                     }
                  )
                     .then(() => {
                        resetForm()
                        setSubmitting(false)
                        setIsAlertVisible(true)
                     })
                     .catch(e => {
                        console.log(e)
                     })
               })
               .catch(e => {
                  console.log(e)
               })
         }}
         netlify
      >
         <fieldset>
            <legend>Contact me!</legend>
            <p>
               Whether you are a recruiter, someone looking for web work, or
               thought this website was so cool that you just have to be my
               friend, contact me and let me know what you need :)
            </p>
            <TextInput
               label='First name'
               id='firstName'
               name='firstName'
               type='text'
               required
               autoFocus={true}
            />
            <TextInput
               label='Last name'
               id='lastName'
               name='lastName'
               type='text'
               required
            />
            <TextInput
               label='Phone number'
               id='phone'
               name='phone'
               type='tel'
               hint='Ex: 555-555-5555'
            />
            <TextInput
               label='Email'
               id='email'
               name='email'
               type='email'
               required
            />
            <TextArea
               label='Message'
               id='message'
               name='message'
               hint='Let me know what you are contacting me about'
               rows={10}
               required
            />
         </fieldset>
      </FormWrapper>
   )
}

export default Contact
