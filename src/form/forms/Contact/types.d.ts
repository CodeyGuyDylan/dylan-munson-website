// Libraries
import { Dispatch, FC, SetStateAction } from 'react'

interface IContact {
   setIsAlertVisible: Dispatch<SetStateAction<boolean>>
}

export type ContactType = FC<IContact>
