// Libraries
import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'

// Forms
import ContactForm from '../../form/forms/Contact'

// Types
import { AlertType } from '../../../global'

interface IContact {
   setAlert: Dispatch<SetStateAction<AlertType>>
}

const Contact: FC<IContact> = ({ setAlert }) => {
   return (
      <>
         <ContactForm setAlert={setAlert} />

         <Other>
            <h2>Other ways to contact me</h2>

            <ul>
               <li>
                  Twitter:{' '}
                  <a href='https://twitter.com/dylanmunson8'>@dylanmunson8</a>
               </li>

               <li>
                  LinkedIn:{' '}
                  <a href='https://www.linkedin.com/in/dylan-munson-56597015b/'>
                     Dylan Munson
                  </a>
               </li>

               <li>
                  Email:{' '}
                  <a href='mailto:dylan@novysolutions.com'>
                     munsondy@gmail.com
                  </a>
               </li>

               <li>
                  Github:{' '}
                  <a href='https://github.com/CodeyGuyDylan'>CodeyGuyDylan</a>
               </li>
            </ul>
         </Other>
      </>
   )
}

export default Contact

const Other = styled.section`
   max-width: 500px;
   margin: 5rem auto 0 auto;
`
