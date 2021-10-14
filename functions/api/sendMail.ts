import nodemailer, { Transporter } from 'nodemailer'

const email = process.env.NODEMAILER_EMAIL
const client = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID
const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY

const sendMail: (
   mailto: string,
   body: string,
   subject: string
) => Promise<string | Error> = (mailto, body, subject) => {
   // Auth
   return new Promise(resolve => {
      const transporter: Transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
            type: 'OAuth2',
            user: email,
            serviceClient: client,
            // Replace function is because netlify doesn't parse the \n's correctly
            privateKey: key.replace(/\\n/g, '\n'),
         },
      })

      const mail = {
         from: `"Dylan Munson" <${email}>`,
         to: mailto,
         subject: subject,
         html: body,
      }

      // Send email to user
      transporter.sendMail(mail, err => {
         if (err) {
            resolve(err)
         } else {
            resolve('success')
         }
      })
   })
}

export default sendMail
