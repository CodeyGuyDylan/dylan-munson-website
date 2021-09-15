// Libraries
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

// Assets
import Profile from '../assets/placeholder-headshot.webp'

// Helper
import mediaQueries from '../helper/mediaQueries'

const attrs = [
   { id: 1, name: 'Profession', value: 'Front-End Web Developer' },
   { id: 2, name: 'Age', value: '25' },
   { id: 3, name: 'Height', value: 'Tall' },
   { id: 4, name: 'Hair', value: 'Brown' },
   { id: 5, name: 'Eyes', value: 'Yes' },
   { id: 6, name: 'Alignment', value: 'Lawful Good' },
]

const Home: FC = () => {
   const [blip, setBlip] = useState<number>(0)

   useEffect(() => {
      const randomizeBlip = setInterval(() => {
         const rand = Math.floor(Math.random() * attrs.length)

         setBlip(rand)
      }, 2500)

      return () => {
         clearInterval(randomizeBlip)
      }
   }, [])

   return (
      <HomeWrapper>
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
         <IntroBox>
            <h1>File: Dylan Munson</h1>

            <Details>
               <ProfileImg src={Profile} alt='dylan munson headshot' />

               <Attributes>
                  {attrs.map((attr, i) => {
                     const { id, name, value } = attr

                     return (
                        <h2 key={id} className={blip === i ? 'blip' : ''}>
                           {name}: {id === 1 ? <br /> : ''} {value}
                        </h2>
                     )
                  })}
               </Attributes>
            </Details>

            <OpenFile>Open File</OpenFile>
         </IntroBox>
      </HomeWrapper>
   )
}

export default Home

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

const HomeWrapper = styled.main`
   display: flex;
   margin: 0 auto;
   max-width: 100%;
   padding: 25px 0;
   width: 370px;

   ${mediaQueries.laptop`
      align-items: center;
      width: 1000px;
      height: 100vh;
      max-height: 100%;
   `}
`

const IntroBox = styled.section`
   align-items: center;
   background-color: var(--black);
   border: 5px solid var(--matrix-green);
   display: flex;
   flex-direction: column;
   margin: auto;
   max-width: 90%;
   padding: 10px;
   width: 100%;
`

const ProfileImg = styled.img`
   align-self: center;
   height: 300px;
   margin: 10px 0;
   max-width: 100%;
   object-fit: cover;
   width: 100%;

   ${mediaQueries.laptop`
      margin: 1rem 0 0 0;
      width: 300px;
      align-self: flex-start;
   `}
`

const Details = styled.div`
   ${mediaQueries.laptop`
      display: flex;
   `}
`

const Attributes = styled.div`
   max-width: 100%;
   width: 100%;

   h2 {
      margin: 1rem 0;
      text-align: left;
   }

   ${mediaQueries.laptop`
      margin-left: 2rem;
   `}
`

const OpenFile = styled.button`
   animation: blinker 1.5s step-start infinite;
   align-self: center;
   background-color: transparent;
   border: 5px solid var(--matrix-green);
   cursor: pointer;
   margin-bottom: 10px;
   max-width: 100%;
   padding: 0.5em;
   width: 10em;

   :hover {
      animation-play-state: paused;
      border: 5px solid var(--dark-green);
      color: var(--dark-green);
      outline: none;
      opacity: 1 !important;
   }

   ${mediaQueries.laptop`
      margin: 2rem 0;
   `}
`
