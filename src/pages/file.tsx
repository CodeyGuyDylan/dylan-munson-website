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
import About from '../components/files/About'
import Document from '../components/Document'
import DocumentIcon from '../components/DocumentIcon'
import Education from '../components/files/Education'
import Portfolio from '../components/files/Portfolio'
import Skills from '../components/files/Skills'
import WorkHistory from '../components/files/WorkHistory'

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

   const getComponent = (file: string) => {
      switch (file) {
         case 'about':
            return <About />
         case 'work-history':
            return <WorkHistory />
         case 'education':
            return <Education />
         case 'skills':
            return <Skills />
         case 'portfolio':
            return <Portfolio />
         default:
            return <></>
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
