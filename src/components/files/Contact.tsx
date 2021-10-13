import { Dispatch, FC, SetStateAction } from 'react'

import ContactForm from '../../form/forms/Contact'

interface IContact {
   setIsAlertVisible: Dispatch<SetStateAction<boolean>>
}

const Contact: FC<IContact> = ({ setIsAlertVisible }) => {
   return (
      <>
         <ContactForm setIsAlertVisible={setIsAlertVisible} />
      </>
   )
}

export default Contact
