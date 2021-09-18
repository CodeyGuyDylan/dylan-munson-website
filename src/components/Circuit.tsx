import { FC } from 'react'
import styled from 'styled-components'
import background from '../assets/code.webp'

const Circuit: FC = () => {
   return (
      <Lines image={background}>
         {/* In id names, m = middle, t = top, r = right, l = left, b = bottom, -n = has a node */}
         <Line id='mlh' top='40vh' left='0px' width='20vw' angle='0' />
         <Line id='mlv' top='40vh' left='20vw' width='15vh' angle='90deg' />
         <Line id='mmv' top='55vh' left='20vw' width='40vw' angle='0' />
         <Line id='mbv' top='55vh' left='20vw' width='45vh' angle='90deg' />
         <Line id='mrv' top='55vh' left='60vw' width='20vh' angle='270deg' />
         <Line id='mrh' top='35vh' left='60vw' width='40vw' angle='0' />
         <Line id='mtv' top='55vh' left='50vw' width='55vh' angle='270deg' />
         <Line id='mrv-n' top='35vh' left='80vw' width='10vh' angle='90deg' />
         <Line id='mbv' top='55vh' left='50vw' width='30vh' angle='90deg' />
         <Line id='brh-n' top='85vh' left='50vw' width='40vw' angle='0' />
         <Line id='blh-n' top='80vh' left='20vw' width='5vw' angle='180deg' />

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

   ::before {
      background-image: url(${props => props.image});
      content: '';
      position: absolute;
      background-size: cover;
      top: 0px;
      right: 0px;
      left: 0px;
      bottom: 0px;
      opacity: 0.03;
      filter: brightness(500%);
      box-shadow: 0 0 500px 200px black inset;
   }

   span {
      position: absolute;
      height: 5px;
      width: 15px;
      background-color: var(--matrix-green);
      border-radius: 30%;
      filter: blur(1.5px);
   }

   @keyframes moveLeftNodeOne {
      50% {
         transform: rotate(0);
         left: -27px;
         top: calc(40vh - 1.5px);
      }
      70% {
         transform: rotate(0);
         left: calc(20vw - 7.5px);
         top: calc(40vh - 1.5px);
      }
      71% {
         transform: rotate(90deg);
         left: calc(20vw - 7.5px);
         top: calc(40vh - 1.5px);
      }
      100% {
         transform: rotate(90deg);
         left: calc(20vw - 7.5px);
         top: calc(100vh + 25px);
      }
   }

   @keyframes moveLeftNodeTwo {
      62% {
         transform: rotate(0);
         left: -27px;
         top: calc(40vh - 1.5px);
      }
      67% {
         transform: rotate(0);
         left: calc(20vw - 7.5px);
         top: calc(40vh - 1.5px);
      }
      68% {
         transform: rotate(90deg);
         left: calc(20vw - 7.5px);
         top: calc(40vh - 1.5px);
      }
      70% {
         transform: rotate(90deg);
         left: calc(20vw - 7.5px);
         top: calc(55vh - 1.5px);
      }
      71% {
         transform: rotate(0);
         left: calc(20vw - 7.5px);
         top: calc(55vh - 1.5px);
      }
      82% {
         transform: rotate(0);
         left: 50vw;
         top: calc(55vh - 1.5px);
      }
      83% {
         transform: rotate(90deg);
         left: calc(50vw - 7.5px);
         top: calc(55vh - 1.5px);
      }
      90% {
         transform: rotate(90deg);
         left: calc(50vw - 7.5px);
         top: calc(85vh - 1.5px);
      }
      91% {
         transform: rotate(0);
         left: calc(50vw - 7.5px);
         top: calc(85vh - 1.5px);
      }
      100% {
         transform: rotate(0);
         left: calc(90vw - 25px);
         top: calc(85vh - 1.5px);
      }
   }

   @keyframes moveTopNodeOne {
      25% {
         top: -27px;
         left: calc(50vw - 7.5px);
         transform: rotate(90deg);
      }
      50% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(90deg);
      }
      51% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(180deg);
      }
      75% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(180deg);
      }
      76% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(270deg);
      }
      82% {
         top: calc(40vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(270deg);
      }
      83% {
         top: calc(40vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(180deg);
      }
      100% {
         transform: rotate(180deg);
         left: -27px;
         top: calc(40vh - 1.5px);
      }
   }

   @keyframes moveTopNodeTwo {
      25% {
         top: -27px;
         left: calc(50vw - 7.5px);
         transform: rotate(90deg);
      }
      50% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(90deg);
      }
      51% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(0);
      }
      63% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(0);
      }
      64% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(-90deg);
      }
      75% {
         top: calc(35vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(-90deg);
      }
      76% {
         top: calc(35vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(0);
      }
      93% {
         top: calc(35vh - 1.5px);
         left: calc(80vw - 7.5px);
         transform: rotate(0);
      }
      94% {
         top: calc(35vh - 1.5px);
         left: calc(80vw - 7.5px);
         transform: rotate(90deg);
      }
      100% {
         top: calc(45vh - 7.5px);
         left: calc(80vw - 7.5px);
         transform: rotate(90deg);
      }
   }

   @keyframes moveRightNodeOne {
      10% {
         top: calc(35vh - 1.5px);
         left: calc(100vw + 2px);
         transform: rotate(0);
      }
      38% {
         top: calc(35vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(0);
      }
      39% {
         top: calc(35vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(-90deg);
      }
      48% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(-90deg);
      }
      49% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(0deg);
      }
      80% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(0deg);
      }
      81% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(-90deg);
      }
      93% {
         top: calc(80vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(-90deg);
      }
      94% {
         top: calc(80vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(0);
      }
      100% {
         top: calc(80vh - 1.5px);
         left: 15vw;
         transform: rotate(0);
      }
   }

   @keyframes moveRightNodeTwo {
      10% {
         top: calc(35vh - 1.5px);
         left: calc(100vw + 2px);
         transform: rotate(0);
      }
      38% {
         top: calc(35vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(0);
      }
      39% {
         top: calc(35vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(-90deg);
      }
      48% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(-90deg);
      }
      49% {
         top: calc(55vh - 1.5px);
         left: calc(60vw - 7.5px);
         transform: rotate(0deg);
      }
      60% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(0deg);
      }
      61% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(-90deg);
      }
      75% {
         top: calc(85vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(-90deg);
      }
      76% {
         top: calc(85vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(-180deg);
      }
      100% {
         top: calc(85vh - 1.5px);
         left: calc(90vw - 7.5px);
         transform: rotate(-180deg);
      }
   }

   @keyframes moveBottomNodeOne {
      0% {
         top: calc(100vh + 7.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(90deg);
      }
      30% {
         top: calc(55vh - 7.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(90deg);
      }
      31% {
         top: calc(55vh - 1.5px);
         left: calc(20vw - 7.5px);
         transform: rotate(180deg);
      }
      65% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(180deg);
      }
      66% {
         top: calc(55vh - 1.5px);
         left: calc(50vw - 7.5px);
         transform: rotate(90deg);
      }
      100% {
         top: -27px;
         left: calc(50vw - 7.5px);
         transform: rotate(90deg);
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
`

const LeftNodeOne = styled.span`
   left: -27px;
   top: calc(40vh - 1.5px);

   animation: moveLeftNodeOne 10s linear 0s infinite;
`

const LeftNodeTwo = styled.span`
   left: -27px;
   top: calc(40vh - 1.5px);

   animation: moveLeftNodeTwo 26s linear 0s infinite;
`

const TopNodeOne = styled.span`
   top: -27px;
   left: calc(50vw - 7.5px);
   transform: rotate(90deg);

   animation: moveTopNodeOne 10s linear 0s infinite;
`

const TopNodeTwo = styled.span`
   top: -27px;
   left: calc(50vw - 7.5px);
   transform: rotate(90deg);

   animation: moveTopNodeTwo 10s linear 5s infinite;
`

const RightNodeOne = styled.span`
   top: calc(35vh - 1.5px);
   left: calc(100vw + 2px);

   animation: moveRightNodeOne 13s linear 3s infinite;
`

const RightNodeTwo = styled.span`
   top: calc(35vh - 1.5px);
   left: calc(100vw + 2px);

   animation: moveRightNodeTwo 15s linear 6s infinite;
`

const BottomNodeOne = styled.span`
   top: calc(100vh + 7.5px);
   left: calc(20vw - 7.5px);
   transform: rotate(90deg);

   animation: moveBottomNodeOne 10s linear 3s infinite;
`
