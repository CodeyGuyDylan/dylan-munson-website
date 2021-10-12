// Libraries
import styled from 'styled-components'

export const Button = styled.button`
  max-width: 300px;
  padding: 0.5em;
  cursor: pointer;
  font-size: 1.2em;
  color: ${props => props.theme.buttonColor};
  background: ${props => props.theme.buttonBackground};
  border: ${props => props.theme.buttonBorder};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  :hover,
  :focus {
    color: ${props => props.theme.hoverButtonColor};
    background: ${props => props.theme.hoverButtonBackground};
  }

  :focus {
    box-shadow: none;
  }
`

export const LoaderWrapper = styled.span`
  svg {
    animation: rotate 2s ease infinite;
  }
`
