// Libraries
import { Dispatch, FC, SetStateAction } from 'react'

// Types
import { AlertType } from '../../global'

interface IContact {
   setAlert: Dispatch<SetStateAction<AlertType>>
}

export type ContactType = FC<IContact>
