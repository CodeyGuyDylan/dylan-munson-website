import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/code.webp'

const Circuit: FC = () => {
   const [isResizing, setIsResizing] = useState(false)

   // Resets circuit animations on window resize, with 150ms buffer
   useEffect(() => {
      let resetCircuit: ReturnType<typeof setTimeout>
      window.onresize = () => {
         setIsResizing(true)

         clearTimeout(resetCircuit)

         resetCircuit = setTimeout(() => {
            setIsResizing(false)
         }, 150)
      }

      return () => {
         clearTimeout(resetCircuit)
      }
   }, [])

   return (
      <>
         {!isResizing && (
            <Lines image={background}>
               {/* In id names, m = middle, t = top, r = right, l = left, b = bottom, -n = has a node */}
               <Line id='mlh' top='40vh' left='0px' width='20vw' angle='0' />
               <Line
                  id='mlv'
                  top='40vh'
                  left='20vw'
                  width='15vh'
                  angle='90deg'
               />
               <Line id='mmv' top='55vh' left='20vw' width='40vw' angle='0' />
               <Line
                  id='mbv'
                  top='55vh'
                  left='20vw'
                  width='45vh'
                  angle='90deg'
               />
               <Line
                  id='mrv'
                  top='55vh'
                  left='60vw'
                  width='20vh'
                  angle='270deg'
               />
               <Line id='mrh' top='35vh' left='60vw' width='40vw' angle='0' />
               <Line
                  id='mtv'
                  top='55vh'
                  left='50vw'
                  width='55vh'
                  angle='270deg'
               />
               <Line
                  id='mrv-n'
                  top='35vh'
                  left='80vw'
                  width='10vh'
                  angle='90deg'
               />
               <Line
                  id='mbv'
                  top='55vh'
                  left='50vw'
                  width='30vh'
                  angle='90deg'
               />
               <Line id='brh-n' top='85vh' left='50vw' width='40vw' angle='0' />
               <Line
                  id='blh-n'
                  top='80vh'
                  left='20vw'
                  width='5vw'
                  angle='180deg'
               />

               {/* In id names, m = middle, t = top, r = right, l = left, b = bottom, n = node */}
               <Circle id='mrn' top='44vh' left='calc(80vw - 5px)' />
               <Circle id='bln' top='calc(80vh - 5px)' left='15vw' />
               <Circle id='brn' top='calc(85vh - 5px)' left='90vw' />

               <LeftNodeOne />
               <LeftNodeTwo />

               <TopNodeOne />
               <TopNodeTwo />
               <RightNodeOne />
               <RightNodeTwo />

               <BottomNodeOne />
            </Lines>
         )}
      </>
   )
}

export default Circuit

const Lines = styled.div<{ image: string }>`
   height: 100vh;
   left: 0;
   overflow: hidden;
   position: absolute;
   top: 0;
   width: 100vw;
   z-index: -1;

   ${props =>
      props.theme.isOpening &&
      `animation: glitch 200ms step-start 0s forwards;`};

   ::before {
      background-image: url(${props => props.image});
      content: '';
      position: absolute;
      background-size: cover;
      top: 0px;
      right: 0px;
      left: 0px;
      bottom: 0px;
      opacity: 0.05;
      filter: brightness(500%);
      box-shadow: 0 0 500px 200px black inset;
      transition: opacity 500ms ease 200ms;

      ${props => props.theme.isOpening && `opacity: 0;`};
   }

   span {
      position: absolute;
      height: 6px;
      width: 6px;
      background-color: var(--matrix-green);
      filter: blur(1.5px);
      border-radius: 50%;

      ${props => props.theme.isOpening && `opacity: 0;`};
   }

   @keyframes glitch {
      0% {
         transform: skew(0);
      }
      50% {
         transform: skew(30deg);
      }
      70% {
         transform: skew(0);
      }
      85% {
         transform: skew(30deg);
      }
      100% {
         transform: skew(0);
      }
   }

   @keyframes moveLeftNodeOne {
      50% {
         left: -18px;
         top: calc(40vh - 1.5px);
      }
      70% {
         left: calc(20vw - 3px);
         top: calc(40vh - 1.5px);
      }
      100% {
         left: calc(20vw - 3px);
         top: calc(100vh + 16px);
      }
   }

   @keyframes moveLeftNodeTwo {
      62% {
         left: -18px;
         top: calc(40vh - 1.5px);
      }
      67% {
         left: calc(20vw - 3px);
         top: calc(40vh - 1.5px);
      }
      70% {
         left: calc(20vw - 3px);
         top: calc(55vh - 1.5px);
      }
      82% {
         left: 50vw;
         top: calc(55vh - 1.5px);
      }
      90% {
         left: calc(50vw - 3px);
         top: calc(85vh - 1.5px);
      }
      100% {
         left: calc(90vw - 16px);
         top: calc(85vh - 1.5px);
      }
   }

   @keyframes moveTopNodeOne {
      25% {
         top: -18px;
         left: calc(50vw - 3px);
      }
      50% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 3px);
      }
      75% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 3px);
      }
      82% {
         top: calc(40vh - 1.5px);
         left: calc(20vw - 3px);
      }
      100% {
         left: -18px;
         top: calc(40vh - 1.5px);
      }
   }

   @keyframes moveTopNodeTwo {
      25% {
         top: -18px;
         left: calc(50vw - 3px);
      }
      50% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 3px);
      }
      63% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 3px);
      }
      75% {
         top: calc(35vh - 2px);
         left: calc(60vw - 3px);
      }
      93% {
         top: calc(35vh - 2px);
         left: calc(80vw - 3px);
      }
      100% {
         top: calc(45vh - 3px);
         left: calc(80vw - 3px);
      }
   }

   @keyframes moveRightNodeOne {
      10% {
         top: calc(35vh - 2px);
         left: calc(100vw + 2px);
      }
      38% {
         top: calc(35vh - 2px);
         left: calc(60vw - 3px);
      }
      48% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 3px);
      }
      80% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 3px);
      }
      93% {
         top: calc(80vh - 1.5px);
         left: calc(20vw - 3px);
      }
      100% {
         top: calc(80vh - 1.5px);
         left: 15vw;
      }
   }

   @keyframes moveRightNodeTwo {
      10% {
         top: calc(35vh - 2px);
         left: calc(100vw + 2px);
      }
      38% {
         top: calc(35vh - 2px);
         left: calc(60vw - 3px);
      }
      48% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 3px);
      }
      60% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 3px);
      }
      75% {
         top: calc(85vh - 1.5px);
         left: calc(50vw - 3px);
      }
      100% {
         top: calc(85vh - 1.5px);
         left: calc(90vw - 3px);
      }
   }

   @keyframes moveBottomNodeOne {
      0% {
         top: calc(100vh + 3px);
         left: calc(20vw - 3px);
      }
      30% {
         top: calc(55vh - 3px);
         left: calc(20vw - 3px);
      }
      65% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 3px);
      }
      100% {
         top: -18px;
         left: calc(50vw - 3px);
      }
   }

   @keyframes flicker {
      0% {
         opacity: 1;
      }
      10% {
         opacity: 0;
      }
      12% {
         opacity: 1;
      }
      70% {
         opacity: 0;
      }
      75% {
         opacity: 1;
      }
      80% {
         opacity: 0;
      }
      85% {
         opacity: 1;
      }
      90% {
         opacity: 0;
      }
      93% {
         opacity: 1;
      }
      96% {
         opacity: 0;
      }
      98% {
         opacity: 1;
      }
      100% {
         opacity: 0;
      }
   }
`

const Line = styled.div<{
   width: string
   angle: string
   top: string
   left: string
}>`
   top: ${props => props.top};
   left: ${props => props.left};
   transform: rotate(${props => props.angle});
   width: ${props => props.width};

   position: absolute;
   background-color: var(--dark-green);
   height: 2px;
   transform-origin: 0 1px;

   ${props =>
      props.theme.isOpening &&
      `
      animation: flicker ${Math.floor(
         Math.random() * 1.5 + 1
      )}s ease 500ms forwards;
   `};
`

const Circle = styled.div<{ top: string; left: string }>`
   position: absolute;
   top: ${props => props.top};
   left: ${props => props.left};

   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: var(--matrix-green);
   box-shadow: 0px 0px 15px var(--matrix-green);

   ${props =>
      props.theme.isOpening &&
      `
      animation: flicker ${Math.floor(
         Math.random() * 1.5 + 1
      )}s ease 500ms forwards;
   `};
`

const LeftNodeOne = styled.span`
   left: -18px;
   top: calc(40vh - 1.5px);

   animation: moveLeftNodeOne 10s linear 0s infinite;
`

const LeftNodeTwo = styled.span`
   left: -18px;
   top: calc(40vh - 1.5px);

   animation: moveLeftNodeTwo 26s linear 0s infinite;
`

const TopNodeOne = styled.span`
   top: -18px;
   left: calc(50vw - 3px);
   transform: rotate(90deg);

   animation: moveTopNodeOne 10s linear 0s infinite;
`

const TopNodeTwo = styled.span`
   top: -18px;
   left: calc(50vw - 3px);
   transform: rotate(90deg);

   animation: moveTopNodeTwo 10s linear 5s infinite;
`

const RightNodeOne = styled.span`
   top: calc(35vh - 2px);
   left: calc(100vw + 2px);

   animation: moveRightNodeOne 13s linear 3s infinite;
`

const RightNodeTwo = styled.span`
   top: calc(35vh - 2px);
   left: calc(100vw + 2px);

   animation: moveRightNodeTwo 15s linear 6s infinite;
`

const BottomNodeOne = styled.span`
   top: calc(100vh + 3px);
   left: calc(20vw - 3px);
   transform: rotate(90deg);

   animation: moveBottomNodeOne 10s linear 3s infinite;
`
