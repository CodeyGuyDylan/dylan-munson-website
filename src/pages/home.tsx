// Libraries
import { FC, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useHistory } from 'react-router-dom'

// Assets
import Profile from '../assets/placeholder-headshot.webp'

// Components
import Circuit from '../components/Circuit'
import TypedWords from '../components/TypedWords'

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
   const history = useHistory()
   const [isOpening, setIsOpening] = useState(false)

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
      }, 3000)
   }

   const skipAnimation = () => {
      localStorage.setItem('watched_typing_animation', 'yes')
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
         <HomeWrapper>
            <Circuit />

            <IntroBox>
               <h1>
                  <TypedWords delay={1} text='File: Dylan Munson' />
               </h1>

               <Details>
                  <ProfileImg src={Profile} alt='dylan munson headshot' />

                  <Attributes>
                     {attrs.map((attr, i) => {
                        const { id, name, value } = attr

                        return (
                           <h2 key={id}>
                              {i === 0 ? (
                                 <>
                                    <TypedWords delay={1.8} text={`${name}:`} />
                                    <br />
                                    <TypedWords delay={2.6} text={value} />
                                 </>
                              ) : (
                                 <TypedWords
                                    delay={2.6 + i * 0.8}
                                    text={`${name}: ${value}`}
                                 />
                              )}
                           </h2>
                        )
                     })}
                  </Attributes>
               </Details>

               <OpenFile onClick={openFile}>Open File</OpenFile>
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
   height: 300px;
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
