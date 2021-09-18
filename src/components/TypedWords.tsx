import { FC } from 'react'
import styled from 'styled-components'

interface ITypedWords {
   text: string
   delay: number
}

const TypedWords: FC<ITypedWords> = ({ text, delay }) => {
   return (
      <Wrapper>
         {text}
         <Cover delay={delay} letters={text.length} />
      </Wrapper>
   )
}

export default TypedWords

const Wrapper = styled.div`
   position: relative;
   display: inline-block;
`

const Cover = styled.span<{ letters: number; delay: number }>`
   position: absolute;
   right: 0;
   top: 0;
   background: var(--black);
   width: 100%;
   height: 100%;
   animation: uncoverHeader 500ms steps(${props => props.letters}, jump-start)
      ${props => props.delay}s forwards;

   ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 25px;
      opacity: 0;
      background-color: var(--matrix-green);
      animation: blink 500ms step-start ${props => props.delay}s forwards;
   }

   @keyframes uncoverHeader {
      0% {
         width: 100%;
      }
      100% {
         width: 0%;
      }
   }

   @keyframes blink {
      50% {
         opacity: 1;
      }
   }
`
