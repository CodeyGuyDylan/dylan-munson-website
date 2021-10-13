// Libraries
import axios, { AxiosResponse } from 'axios'

export const sendFormData: (
   url: string,
   values: { [key: string]: unknown }
) => Promise<AxiosResponse> = (url, values) => {
   return axios.post(url, JSON.stringify(values), {
      headers: { 'Content-Type': 'application/json' },
   })
}
