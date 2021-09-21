// Libraries
import { createGlobalStyle } from 'styled-components'

// Helper
import mediaQueries from '../helper/mediaQueries'

const GlobalStyle = createGlobalStyle`
  // General
  
  :root {
    --black: #000;
    --matrix-green: #39ff14;
    --dark-green: #003b00;
    --heading-one: 2rem;
    --heading-two: 1.8rem;
    --heading-three: 1.6rem;
    --regular-text: 1rem;
    --mobile-text-shrink: 0.6;
  }

  html {
    background-color: var(--black);
    font-size: 18px;
    overflow-x: hidden;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
    z-index: -1;
  }

  html,
  button,
  textarea,
  input,
  select {
    font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    color: var(--matrix-green);
    box-sizing: border-box;
  }

  // Text Sizes

  h1 {
    font-size: calc(var(--heading-one) * var(--mobile-text-shrink));
  }

  h2,
  button {
    font-size: calc(var(--heading-two) * var(--mobile-text-shrink));
  }

  h3 {
    font-size: calc(var(--heading-three) * var(--mobile-text-shrink));
  }

  p {
    font-size: calc(var(--regular-text) * var(--mobile-text-shrink));
  }

  ${mediaQueries.laptop`
    h1 {
      font-size: var(--heading-one);
    }

    h2,
    button {
      font-size: var(--heading-two);
    }

    h3 {
      font-size: var(--heading-three);
    }

    p {
      font-size: var(--regular-text);
    }
  `}

  // Classes

  // Animations

  @keyframes blinker {
      50% {
         opacity: 0;
      }
   }
`

export default GlobalStyle
