// Libraries
import { FC, useState, useEffect } from 'react'
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
import DocumentIcon from '../components/DocumentIcon'
import Document from '../components/Document'
import About from '../components/files/About'

// Helper
import mediaQueries from '../helper/mediaQueries'

const documents = [
   { name: 'about.txt', icon: FaBook },
   { name: 'work-history.txt', icon: FaLaptopCode },
   { name: 'education.txt', icon: FaSchool },
   { name: 'skills.txt', icon: FaToolbox },
   { name: 'portfolio.txt', icon: FaFolder },
   { name: 'contact.html', icon: FaPhoneAlt },
]

const File: FC = () => {
   const [filesOpened, setFilesOpened] = useState<string[]>([])

   useEffect(() => {
      setInterval(() => {
         console.log(document.activeElement)
      }, 1000)
   })

   const getComponent = (file: string) => {
      switch (file) {
         case 'about':
            return <About />
         default:
            return <div></div>
      }
   }

   return (
      <>
         <Documents>
            {documents.map((document, index) => {
               const { name, icon } = document
               return (
                  <DocumentIcon
                     index={index}
                     key={name}
                     name={name}
                     Icon={icon}
                     filesOpened={filesOpened}
                     setFileOpened={setFilesOpened}
                  />
               )
            })}
         </Documents>

         {filesOpened.map(file => (
            <Document key={file} setFilesOpened={setFilesOpened} file={file}>
               {getComponent(file)}
            </Document>
         ))}
      </>
   )
}

export default File

const Documents = styled.main`
   display: grid;
   grid-template-columns: repeat(auto-fit, 175px);
   margin-top: 35px;
   gap: 2rem 1rem;

   ${mediaQueries.laptop`
      display: initial;
   `}
`

// Douments
// contact.dm
// about.dm
// work-history.dm
// eduction.dm
// skills.dm
