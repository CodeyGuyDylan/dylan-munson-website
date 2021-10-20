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
import About from '../components/files/About'
import Contact from '../components/files/Contact'
import Document from '../components/Document'
import DocumentIcon from '../components/DocumentIcon'
import Education from '../components/files/Education'
import Portfolio from '../components/files/Portfolio'
import SEO from '../components/Seo'
import Skills from '../components/files/Skills'
import WorkHistory from '../components/files/WorkHistory'

// Helper
import mediaQueries from '../helper/mediaQueries'

// Hooks
import useDisableScrolling from '../hooks/useDisableScrolling'

// Types
import { AlertType } from '../../global'

const documents = [
   { name: 'about.txt', icon: FaBook },
   { name: 'work-history.txt', icon: FaLaptopCode },
   { name: 'education.txt', icon: FaSchool },
   { name: 'skills.txt', icon: FaToolbox },
   { name: 'portfolio.txt', icon: FaFolder },
   { name: 'contact.html', icon: FaPhoneAlt },
]

const alertInit: AlertType = {
   visible: false,
   message: '',
   type: 'error',
}

const File: FC = () => {
   const [filesOpened, setFilesOpened] = useState<string[]>([])
   const [activeFile, setActiveFile] = useState<string>('')
   const [alert, setAlert] = useState<AlertType>(alertInit)

   // Disabled background scrolling on mobile if file is opened
   useDisableScrolling(filesOpened.length > 0)

   const { visible, message, type } = alert

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
         case 'contact':
            return <Contact setAlert={setAlert} />
         default:
            return <></>
      }
   }

   useEffect(() => {
      let timer: ReturnType<typeof setTimeout>

      if (visible) {
         timer = setTimeout(() => {
            setAlert(alertInit)
         }, 3000)
      }

      return () => {
         clearTimeout(timer)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [alert])

   return (
      <>
         <SEO title='File' />

         {visible && (
            <Alert type={type} role='dialog'>
               <AlertMessage role='alert'>{message}</AlertMessage>
            </Alert>
         )}

         <Documents>
            {documents.map((document, index) => {
               const { name, icon } = document
               return (
                  <DocumentIcon
                     index={index}
                     key={name}
                     name={name}
                     Icon={icon}
                     setActiveFile={setActiveFile}
                     setFileOpened={setFilesOpened}
                  />
               )
            })}
         </Documents>

         {filesOpened.map(file => (
            <Document
               key={file}
               setFilesOpened={setFilesOpened}
               setActiveFile={setActiveFile}
               isActive={activeFile === file}
               file={file}
            >
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
   margin: 35px 15px 0 15px;
   gap: 2rem 1rem;

   ${mediaQueries.laptop`
      display: initial;
   `}
`

const Alert = styled.div<{ type: 'error' | 'success' }>`
   background-color: ${props =>
      props.type === 'success' ? 'var(--matrix-green)' : 'red'};
   top: 20px;
   padding: 10px;
   position: fixed;
   right: calc(50% - 150px);
   width: 300px;
   z-index: 1001;

   ${mediaQueries.laptop`
      right: 20px;
   `}
`

const AlertMessage = styled.p`
   color: #000;
   font-size: 1em;
   margin: 0;
   text-align: center;
`
