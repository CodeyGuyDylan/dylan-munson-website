// Libraries
import axios, { AxiosResponse } from 'axios'

// Encodes form values for netlify
const encode = (data: { [key: string]: string }) => {
   return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

export const submitToNtl: (
   values: { [key: string]: unknown },
   name: string,
   emailSubject: string
) => Promise<AxiosResponse> = (values, name, emailSubject) => {
   return axios.post(
      '/',
      encode({
         'form-name': name,
         /* prettier-ignore */
         'subject': emailSubject,
         'bot-field': '',
         ...values,
      }),
      {
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
   )
}
