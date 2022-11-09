/*
  run the following command during netlify dev to test
  netlify functions:invoke submit-contact-form-background --payload "./functions/tests/contact-form-test-data.json" --identity
*/

import sendMail from './api/sendMail'
import removeHtml from './utils/removeHtml'
import { Handler } from '@netlify/functions'

const handler: Handler = async event => {
   const body = JSON.parse(event.body)

   let { firstName = null, email = null } = body

   firstName = removeHtml(firstName)
   email = removeHtml(email)

   const emailBody = `
    <div style="font-size: 20px">
      <p><b>Hello ${firstName}!</b></p>
      <p>I have recieved your contact request and will get back to you as soon as I can!</p>
      <br />
      <p>Thank you for reaching out :)</p>
    </div>
  `

   if (firstName && email) {
      const status = await sendMail(
         email,
         emailBody,
         `Dylan Munson Website Contact Submission`
      )

      if (status === 'success') {
         return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Contact form sent' }),
         }
      } else {
         console.error(`Email not sent, ${status}`)

         return {
            statusCode: 502,
            body: JSON.stringify({ message: 'Email not sent' }),
         }
      }
   } else {
      console.error('Missing fields')

      return {
         statusCode: 400,
         headers: { 'Content-Type': 'text/html' },
         body: 'Missing fields',
      }
   }
}

export { handler }
