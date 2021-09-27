import { FC } from 'react'
import styled from 'styled-components'
import { FaFileAlt } from 'react-icons/fa'

interface IDocument {
   name: string
}

const Document: FC<IDocument> = ({ name }) => {
   return (
      <Wrapper>
         <FaFileAlt />
         <p>{name}</p>
      </Wrapper>
   )
}

export default Document

const Wrapper = styled.div``