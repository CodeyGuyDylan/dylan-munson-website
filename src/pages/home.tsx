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
   { id: 6, name: 'Allignment', value: 'Lawful Good' },
]

const Home: FC = () => {
   const [blip, setBlip] = useState<number>(0)
   const [lines, setLines] = useState<{ x: number; y: number }[]>([])

   const getRandomLines = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const rand = Math.floor(Math.random() * 40) + 5
      const lines: { x: number; y: number }[] = []

      for (let i = 0; i < rand; i++) {
         const y = Math.floor(Math.random() * (height - 35))
         const x = Math.floor(Math.random() * (width - 5))

         lines.push({ x, y })
      }

      setLines(lines)
   }

   useEffect(() => {
      const randomizeBlip = setInterval(() => {
         const rand = Math.floor(Math.random() * attrs.length)

         setBlip(rand)
      }, 2500)

      getRandomLines()

      const randomizeLines = setInterval(() => {
         getRandomLines()
      }, 5000)

      return () => {
         clearInterval(randomizeBlip)
         clearInterval(randomizeLines)
      }
   }, [])

   return (
      <HomeWrapper>
         <Lines>
            {lines.length > 0 &&
               lines.map(line => {
                  const { x, y } = line

                  return <MatrixLine top={y} left={x} />
               })}
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
`

const MatrixLine = styled.span<{ top: number; left: number }>`
   animation: fall 5s linear 0s infinite;
   background-color: var(--matrix-green);
   height: 10px;
   left: ${props => props.left}px;
   position: absolute;
   top: ${props => props.top}px;
   width: 2px;
   z-index: -1;

   ::before,
   ::after {
      background-color: var(--matrix-green);
      content: '';
      height: 10px;
      position: absolute;
      width: 2px;
   }

   ::before {
      opacity: 0.33;
      top: -20px;
   }

   ::after {
      opacity: 0.66;
      top: -10px;
   }

   @keyframes fall {
      0% {
         transform: translateY(-100vh);
      }
      50% {
         transform: translateY(0);
      }
      100% {
         transform: translateY(100vh);
      }
   }
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
   align-self: center;
   animation: blinker 1.5s step-start infinite;
   background-color: transparent;
   border: 5px solid var(--matrix-green);
   cursor: pointer;
   margin-bottom: 10px;
   max-width: 100%;
   padding: 0.5em;
   width: 10em;

   :focus,
   :hover {
      animation: none;
      border: 5px solid var(--dark-green);
      color: var(--dark-green);
      outline: none;
   }

   ${mediaQueries.laptop`
      margin: 2rem 0;
   `}
`
