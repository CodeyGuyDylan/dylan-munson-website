import { FC } from 'react'
import styled from 'styled-components'

const Circuit: FC = () => {
  return (
     <Lines>
        <Line top='40vh' left='0px' width='20vw' angle='0deg' />
        <Line top='40vh' left='20vw' width='15vh' angle='90deg' />
        <Line top='55vh' left='20vw' width='40vw' angle='0deg' />
        <Line top='55vh' left='20vw' width='45vh' angle='90deg' />
        <Line top='55vh' left='60vw' width='20vh' angle='270deg' />
        <Line top='35vh' left='60vw' width='40vw' angle='0deg' />
        <Line top='55vh' left='50vw' width='55vh' angle='270deg' />
        <Line top='35vh' left='80vw' width='10vh' angle='90deg' />
        <Line top='55vh' left='50vw' width='30vh' angle='90deg' />
        <Line top='85vh' left='50vw' width='40vw' angle='0deg' />
        <Line top='80vh' left='20vw' width='5vw' angle='180deg' />

        <Circle top='44vh' left='calc(80vw - 5px)' />
        <Circle top='calc(80vh - 5px)' left='15vw' />
        <Circle top='calc(85vh - 5px)' left='90vw' />

        <NodeOne />
        <NodeTwo />
        <NodeThree />
     </Lines>
  )
}

export default Circuit

const Lines = styled.div`
   height: 100vh;
   left: 0;
   overflow: hidden;
   position: absolute;
   top: 0;
   width: 100vw;
   z-index: -1;

   span {
      position: absolute;
      height: 5px;
      width: 25px;
      background-color: var(--matrix-green);
      border-radius: 30%;
      filter: blur(1.5px);
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

const NodeOne = styled.span`
   left: -27px;
   top: calc(40vh - 1.5px);

   animation: moveNodeOne 10s linear 0s infinite;

   @keyframes moveNodeOne {
      50% {
         transform: rotate(0);
         left: -27px;
         top: calc(40vh - 1.5px);
      }
      70% {
         transform: rotate(0);
         left: calc(20vw - 12.5px);
         top: calc(40vh - 1.5px);
      }
      71% {
         transform: rotate(90deg);
         left: calc(20vw - 12.5px);
         top: calc(40vh - 1.5px);
      }
      100% {
         transform: rotate(90deg);
         left: calc(20vw - 12.5px);
         top: calc(100vh + 25px);
      }
   }
`

const NodeTwo = styled.span`
   left: -27px;
   top: calc(40vh - 1.5px);

   animation: moveNodeTwo 16s linear 0s infinite;

   @keyframes moveNodeTwo {
      69% {
         transform: rotate(0);
         left: -27px;
         top: calc(40vh - 1.5px);
      }
      80% {
         transform: rotate(0);
         left: calc(20vw - 12.5px);
         top: calc(40vh - 1.5px);
      }
      81% {
         transform: rotate(90deg);
         left: calc(20vw - 12.5px);
         top: calc(40vh - 1.5px);
      }
      94% {
         transform: rotate(90deg);
         left: calc(20vw - 12.5px);
         top: calc(80vh - 1.5px);
      }
      95% {
         transform: rotate(180deg);
         left: calc(20vw - 12.5px);
         top: calc(80vh - 1.5px);
      }
      100% {
         transform: rotate(180deg);
         left: 15vw;
         top: calc(80vh - 1.5px);
      }
   }
`

const NodeThree = styled.span`
   left: -27px;
   top: calc(40vh - 1.5px);

   animation: moveNodeThree 26s linear 0s infinite;

   @keyframes moveNodeThree {
      62% {
         transform: rotate(0);
         left: -27px;
         top: calc(40vh - 1.5px);
      }
      67% {
         transform: rotate(0);
         left: calc(20vw - 12.5px);
         top: calc(40vh - 1.5px);
      }
      68% {
         transform: rotate(90deg);
         left: calc(20vw - 12.5px);
         top: calc(40vh - 1.5px);
      }
      70% {
         transform: rotate(90deg);
         left: calc(20vw - 12.5px);
         top: calc(55vh - 1.5px);
      }
      71% {
         transform: rotate(0);
         left: calc(20vw - 12.5px);
         top: calc(55vh - 1.5px);
      }
      82% {
         transform: rotate(0);
         left: 50vw;
         top: calc(55vh - 1.5px);
      }
      83% {
         transform: rotate(90deg);
         left: calc(50vw - 13px);
         top: calc(55vh - 1.5px);
      }
      90% {
         transform: rotate(90deg);
         left: calc(50vw - 13px);
         top: calc(85vh - 1.5px);
      }
      91% {
         transform: rotate(0deg);
         left: calc(50vw - 13px);
         top: calc(85vh - 1.5px);
      }
      100% {
         transform: rotate(0deg);
         left: calc(90vw - 25px);
         top: calc(85vh - 1.5px);
      }
   }
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