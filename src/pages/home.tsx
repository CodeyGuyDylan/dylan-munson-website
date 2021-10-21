// Libraries
import { FC, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useHistory } from 'react-router-dom'

// Assets
import Profile from '../assets/dylan_matrix.webp'
import LowResProfile from '../assets/dylan_matrix_low.webp'

// Components
import Circuit from '../components/Circuit'
import TypedWords from '../components/TypedWords'
import SEO from '../components/Seo'

// Helper
import mediaQueries from '../helper/mediaQueries'

// Hooks
import useProgressiveImg from '../hooks/useProgressiveImage'

const attrs = [
   { id: 1, name: 'Profession:', value: 'Front-End Web Developer' },
   { id: 2, name: 'Age:', value: '25' },
   { id: 3, name: 'Height:', value: 'Tall' },
   { id: 4, name: 'Hair:', value: 'Brown' },
   { id: 5, name: 'Eyes:', value: 'Yes' },
   { id: 6, name: 'Alignment:', value: 'Lawful Good' },
]

const loadingMessages = [
   `Modulating the subnet`,
   `Subulating the modnet`,
   `Filling bar with green ooze`,
   `Neglecting my duties at home`,
   `Fixing the background circuit ...again`,
   `Realizing I'm sentient`,
   `Loading a file or something`,
   `Selling more paper than Dwight K. Schrute`,
   `Watching 30 Rock reruns`,
   `Calculating how long this will take`,
   `JERRY! WHERE THE @#$% IS THIS FILE?!`,
   `Jumping to conclusions`,
   `Reading books by their covers`,
   `Changing alignment to Chaotic Neutral`,
   `Watching the entire Doctor Who series`,
   `Typing Typescript... Javaing Javascript?`,
   `Overstaying my welcome`,
   `Faking data load to show you witty quips`,
]

const Home: FC = () => {
   const history = useHistory()
   const [isOpening, setIsOpening] = useState<boolean>(false)

   const [src, { blur }] = useProgressiveImg(LowResProfile, Profile)

   // Allows all styled components to know if the user has clicked the open file button
   const theme = {
      isOpening,
   }

   // Sets local storage to show user has watched animation and skips over the typing animation if button was clicked before it was finished
   const openFile = () => {
      skipAnimation()
      setIsOpening(true)

      // Sends user to file page after animations have run
      setTimeout(() => {
         history.push('/file')
      }, 4000)
   }

   const skipAnimation = () => {
      localStorage.setItem('watched_typing_animation', 'yes')
   }

   const getRandomMessage = () => {
      const randIndex = Math.floor(Math.random() * loadingMessages.length)

      return loadingMessages[randIndex]
   }

   // Sets local storage to show user has watched animation if they've stayed on the page for the full duration
   useEffect(() => {
      let visited: ReturnType<typeof setTimeout>
      const hasVisited = localStorage.getItem('watched_typing_animation')

      if (hasVisited !== 'yes') {
         visited = setTimeout(() => {
            skipAnimation()
         }, 7500)
      }

      return () => {
         clearTimeout(visited)
      }
   }, [])

   return (
      <ThemeProvider theme={theme}>
         <SEO title='Home' />

         <HomeWrapper>
            <Circuit />

            <IntroBox>
               <h1>
                  <TypedWords delay={1} text={'File: Dylan Munson'} />
               </h1>

               <Details>
                  <ProfileImg
                     src={Profile}
                     alt='dylan munson file image'
                     width='300px'
                     height='387px'
                     style={{
                        filter: blur ? 'blur(20px)' : 'none',
                        transition: blur ? 'none' : 'filter 0.3s ease-out',
                     }}
                  />

                  <Attributes>
                     {attrs.map((attr, i) => {
                        const { id, name, value } = attr

                        return (
                           <Attribute key={id}>
                              {i === 0 ? (
                                 <>
                                    <TypedWords delay={1.8} text={`${name}`} />
                                    <br />
                                    <TypedWords delay={2.6} text={value} />
                                 </>
                              ) : (
                                 <TypedWords
                                    delay={2.6 + i * 0.8}
                                    text={`${name} ${value}`}
                                 />
                              )}
                           </Attribute>
                        )
                     })}
                  </Attributes>
               </Details>

               {isOpening ? (
                  <Loader>
                     <LoadingMessage>{getRandomMessage()}</LoadingMessage>
                  </Loader>
               ) : (
                  <OpenFile onClick={openFile}>Open File</OpenFile>
               )}
            </IntroBox>
         </HomeWrapper>
      </ThemeProvider>
   )
}

export default Home

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

   ${mediaQueries.laptop`
      padding: 10px 30px;
   `}
`

const ProfileImg = styled.img`
   align-self: center;
   margin: 10px 0;
   max-width: 100%;
   object-fit: cover;
   width: 100%;

   ${mediaQueries.laptop`
      margin: 1rem 0 0 0;
      min-width: 300px;
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

   ${mediaQueries.laptop`
      margin-left: 2rem;
   `}
`

const Attribute = styled.h2`
   margin: 1rem 0;
   text-align: left;
`

const OpenFile = styled.button`
   animation: blinker 1.5s step-start infinite;
   align-self: center;
   background-color: transparent;
   border: 5px solid var(--matrix-green);
   cursor: pointer;
   margin-bottom: 42px;
   max-width: 100%;
   padding: 0.5em;
   width: 10em;

   :hover,
   :focus {
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

const Loader = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
   height: 15px;
   width: 100%;
   border: 2px solid var(--matrix-green);
   margin: 21px 0 60px 0;

   ::before {
      animation: load 4s linear 0s forwards;
      background-color: var(--matrix-green);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 0%;
   }

   ${mediaQueries.laptop`
      margin: calc(2rem + 35px) 0;
      width: 20em;
   `}

   @keyframes load {
      0% {
         width: 0%;
      }
      20% {
         width: 40%;
      }
      80% {
         width: 60%;
      }
      100% {
         width: 100%;
      }
   }
`

const LoadingMessage = styled.span`
   position: relative;
   text-align: center;
   top: 1.4em;
   max-width: 90%;
`
