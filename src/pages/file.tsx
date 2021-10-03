// Libraries
import { FC, useState } from 'react'
import styled from 'styled-components'
import {
   FaBook,
   FaLaptopCode,
   FaSchool,
   FaToolbox,
   FaFolder,
   FaPhoneAlt,
} from 'react-icons/fa'

// Components
import Document from '../components/Document'

const documents = [
   { name: 'about.txt', icon: FaBook },
   { name: 'work-history.txt', icon: FaLaptopCode },
   { name: 'education.txt', icon: FaSchool },
   { name: 'skills.txt', icon: FaToolbox },
   { name: 'portfolio.txt', icon: FaFolder },
   { name: 'contact.html', icon: FaPhoneAlt },
]

const File: FC = () => {
   const [fileOpened, setFileOpened] = useState('')

   console.log(fileOpened)

   return (
      <Documents>
         {documents.map((document, index) => {
            const { name, icon } = document
            return (
               <Document
                  index={index}
                  key={name}
                  name={name}
                  Icon={icon}
                  setFileOpened={setFileOpened}
               />
            )
         })}
      </Documents>
   )
}

export default File

const Documents = styled.main`

`

// Douments
// contact.dm
// about.dm
// work-history.dm
// eduction.dm
// skills.dm
