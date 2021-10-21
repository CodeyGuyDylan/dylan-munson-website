// Libraries
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

// Assets
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

   // Lights nodes up when animation iteration is over
   const onNodeAnimationIteration = (id: string) => {
      const node = document.getElementById(id) as HTMLDivElement

      node.style.backgroundColor = 'var(--matrix-green)'

      setTimeout(() => {
         node.style.backgroundColor = 'var(--dark-green)'
      }, 500)
   }

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
                  width='90vh'
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
               <Circle id='mrn' top='44.5vh' left='calc(80vw - 5px)' />
               <Circle id='bln' top='calc(80vh - 4px)' left='15vw' />
               <Circle id='brn' top='calc(85vh - 4px)' left='90vw' />

               {/* On iteration tells node to light up */}
               <LeftNodeOne id='lno' />
               <LeftNodeTwo
                  id='lnt'
                  onAnimationIteration={() => onNodeAnimationIteration('brn')}
               />
               <TopNodeOne id='tno' />
               <TopNodeTwo
                  id='tnt'
                  onAnimationIteration={() => onNodeAnimationIteration('mrn')}
               />
               <RightNodeOne
                  id='rno'
                  onAnimationIteration={() => onNodeAnimationIteration('bln')}
               />
               <RightNodeTwo
                  id='rnt'
                  onAnimationIteration={() => onNodeAnimationIteration('brn')}
               />
               <BottomNodeOne id='bno' />
            </Lines>
         )}
      </>
   )
}

export default Circuit

const Lines = styled.div<{ image: string }>`
   // position adjusters for animations
   --radius-adjuster: 3px;
   --line-adjuster: 1.5px;

   height: 100vh;
   left: 0;
   overflow: hidden;
   position: fixed;
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
         top: calc(40vh - var(--line-adjuster));
      }
      70% {
         left: calc(20vw - var(--radius-adjuster));
         top: calc(40vh - var(--line-adjuster));
      }
      100% {
         left: calc(20vw - var(--radius-adjuster));
         top: calc(100vh + var(--radius-adjuster));
      }
   }

   @keyframes moveLeftNodeTwo {
      62% {
         left: -18px;
         top: calc(40vh - var(--line-adjuster));
      }
      67% {
         left: calc(20vw - var(--radius-adjuster));
         top: calc(40vh - var(--line-adjuster));
      }
      70% {
         left: calc(20vw - var(--radius-adjuster));
         top: calc(55vh - var(--line-adjuster));
      }
      82% {
         left: calc(50vw - var(--radius-adjuster));
         top: calc(55vh - var(--line-adjuster));
      }
      90% {
         left: calc(50vw - var(--radius-adjuster));
         top: calc(85vh - var(--line-adjuster));
      }
      100% {
         left: calc(90vw - var(--radius-adjuster));
         top: calc(85vh - var(--line-adjuster));
      }
   }

   @keyframes moveTopNodeOne {
      25% {
         top: -18px;
         left: calc(50vw - var(--radius-adjuster));
      }
      50% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(50vw - var(--radius-adjuster));
      }
      75% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(20vw - var(--radius-adjuster));
      }
      82% {
         top: calc(40vh - var(--line-adjuster));
         left: calc(20vw - var(--radius-adjuster));
      }
      100% {
         left: -18px;
         top: calc(40vh - var(--line-adjuster));
      }
   }

   @keyframes moveTopNodeTwo {
      25% {
         top: -18px;
         left: calc(50vw - var(--radius-adjuster));
      }
      50% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(50vw - var(--radius-adjuster));
      }
      63% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(60vw - var(--radius-adjuster));
      }
      75% {
         top: calc(35vh - var(--line-adjuster) - 0.5px);
         left: calc(60vw - var(--radius-adjuster));
      }
      93% {
         top: calc(35vh - var(--line-adjuster) - 0.5px);
         left: calc(80vw - var(--radius-adjuster));
      }
      100% {
         top: calc(44vh - var(--radius-adjuster));
         left: calc(80vw - var(--radius-adjuster));
      }
   }

   @keyframes moveRightNodeOne {
      10% {
         top: calc(35vh - var(--line-adjuster) - 0.5px);
         left: calc(100vw + 2px);
      }
      38% {
         top: calc(35vh - var(--line-adjuster) - 0.5px);
         left: calc(60vw - var(--radius-adjuster));
      }
      48% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(60vw - var(--radius-adjuster));
      }
      80% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(20vw - var(--radius-adjuster));
      }
      93% {
         top: calc(80vh - var(--line-adjuster));
         left: calc(20vw - var(--radius-adjuster));
      }
      100% {
         top: calc(80vh - var(--line-adjuster));
         left: 15vw;
      }
   }

   @keyframes moveRightNodeTwo {
      10% {
         top: calc(35vh - var(--line-adjuster) - 0.5px);
         left: calc(100vw + 2px);
      }
      38% {
         top: calc(35vh - var(--line-adjuster) - 0.5px);
         left: calc(60vw - var(--radius-adjuster));
      }
      48% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(60vw - var(--radius-adjuster));
      }
      60% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(50vw - var(--radius-adjuster));
      }
      75% {
         top: calc(85vh - var(--line-adjuster));
         left: calc(50vw - var(--radius-adjuster));
      }
      100% {
         top: calc(85vh - var(--line-adjuster));
         left: calc(90vw - var(--radius-adjuster));
      }
   }

   @keyframes moveBottomNodeOne {
      0% {
         top: calc(100vh + 3px);
         left: calc(20vw - var(--radius-adjuster));
      }
      30% {
         top: calc(55vh - var(--radius-adjuster));
         left: calc(20vw - var(--radius-adjuster));
      }
      65% {
         top: calc(55vh - var(--line-adjuster));
         left: calc(50vw - var(--radius-adjuster));
      }
      100% {
         top: -18px;
         left: calc(50vw - var(--radius-adjuster));
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
      animation: flicker ${Math.random() * 1.5 + 1}s ease 500ms forwards;
   `};
`

const Circle = styled.div<{ top: string; left: string }>`
   position: absolute;
   top: ${props => props.top};
   left: ${props => props.left};
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: var(--dark-green);
   box-shadow: 0px 0px 15px var(--matrix-green);
   transition: background-color 500ms ease;

   ${props =>
      props.theme.isOpening &&
      `
      animation: flicker ${Math.random() * 1.5 + 1}s ease 500ms forwards;
   `};
`

const LeftNodeOne = styled.span`
   left: -18px;
   top: calc(40vh - var(--line-adjuster));

   animation: moveLeftNodeOne 10s linear 0s infinite;
`

const LeftNodeTwo = styled.span`
   left: -18px;
   top: calc(40vh - var(--line-adjuster));

   animation: moveLeftNodeTwo 26s linear 0s infinite;
`

const TopNodeOne = styled.span`
   top: -18px;
   left: calc(50vw - var(--radius-adjuster));
   transform: rotate(90deg);

   animation: moveTopNodeOne 10s linear 0s infinite;
`

const TopNodeTwo = styled.span`
   top: -18px;
   left: calc(50vw - var(--radius-adjuster));
   transform: rotate(90deg);

   animation: moveTopNodeTwo 10s linear 5s infinite;
`

const RightNodeOne = styled.span`
   top: calc(35vh - var(--line-adjuster) - 0.5px);
   left: calc(100vw + 2px);

   animation: moveRightNodeOne 13s linear 3s infinite;
`

const RightNodeTwo = styled.span`
   top: calc(35vh - var(--line-adjuster) - 0.5px);
   left: calc(100vw + 2px);

   animation: moveRightNodeTwo 15s linear 6s infinite;
`

const BottomNodeOne = styled.span`
   top: calc(100vh + 3px);
   left: calc(20vw - var(--radius-adjuster));
   transform: rotate(90deg);

   animation: moveBottomNodeOne 10s linear 3s infinite;
`
