// Libraries
import { FC, useEffect, useState } from 'react'
import styled, { CSSProperties } from 'styled-components'

interface ITypedWords {
   text: string
   delay: number
   className?: string
   style?: CSSProperties
}

const TypedWords: FC<ITypedWords> = ({ style, className, text, delay }) => {
   const [cancelAnimation, setCancelAnimation] = useState<boolean>(false)

   // Checks to see if user has already seen the typing animation, skips the animations if they
   useEffect(() => {
      const visited = localStorage.getItem('watched_typing_animation')

      if (visited === 'yes') {
         setCancelAnimation(true)
      }
   }, [])

   return (
      <Wrapper style={style}>
         {text}
         <Cover
            cancel={cancelAnimation}
            className={className}
            delay={delay}
            letters={text.length}
         />
      </Wrapper>
   )
}

export default TypedWords

const Wrapper = styled.div`
   position: relative;
   display: inline-block;
`

const Cover = styled.span<{ letters: number; delay: number; cancel: boolean }>`
   position: absolute;
   right: 0;
   top: 0;
   background: var(--black);
   // Sets width of cover to 0 if file is being opened or they've already seen the animation
   width: ${props => (props.cancel || props.theme.isOpening ? '0%' : '100%;')};
   height: 100%;
   // Sets animation to none if file is being opened or they've already seen the animation
   animation: ${props =>
         props.cancel || props.theme.isOpening ? '' : 'uncoverHeader'}
      500ms steps(${props => props.letters}, jump-start)
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
      // Sets animation to none if file is being opened or they've already seen the animation
      animation: ${props =>
            props.cancel || props.theme.isOpening ? '' : 'blink'}
         550ms step-start ${props => props.delay - 0.4}s 2;
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
