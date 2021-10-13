import { Dispatch, FC, SetStateAction } from 'react'

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
      </>
   )
}

export default Contact
