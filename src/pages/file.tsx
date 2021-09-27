// Libraries
import { FC } from 'react'

// Components
import Document from '../components/Document'

const documents = [
   'contact.dm',
   'about.dm',
   'work-history.dm',
   'education.dm',
   'skills.dm',
]

const File: FC = () => {
   return (
      <>
         {documents.map(document => (
            <Document name={document} />
         ))}
      </>
   )
}

export default File

// Douments
// contact.dm
// about.dm
// work-history.dm
// eduction.dm
// skills.dm
