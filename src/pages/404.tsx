// Libraries
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Components
import SEO from '../components/Seo'

const FourOhFour: FC = () => {
   return (
      <>
         <SEO title='Oops!' description='Looks like this page doesnt exist' />
         <Wrapper>            
            <TextWrapper>
            <h1>Looks like this page doesnt exist!</h1>
            <p>
               Right now, there is only a <Link to='/'>Home</Link> page and a{' '}
               <Link to='/file'>File</Link> page.
            </p>
            <p>
               If you want this page to exist, feel free to contact me at{' '}
               <a href='mailto:dylan@novysolutions.com'>
                  dylan@novysolutions.com
               </a>{' '}
               and yell at me until I succumb to your demands
            </p>
            </TextWrapper>
         </Wrapper>
      </>
   )
}

export default FourOhFour

const Wrapper = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;

   p {
      font-size: 1rem;
   }

   h1 {
      font-size: 2rem;
   }
`

const TextWrapper = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 700px;
   padding: 2rem;
   text-align: center;
`