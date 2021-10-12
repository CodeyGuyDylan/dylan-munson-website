// Libraries
import styled from 'styled-components'

export const Input = styled.input`
  color: ${props => props.theme.inputColor};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.border};
  padding: 0.5em 1em;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1em;

  :hover {
    color: ${props => props.theme.hoverInputColor};
    background: ${props => props.theme.hoverInputBackground};
  }

  :focus,
  :hover {
    border: ${props => props.theme.hoverBorder};
    outline: ${props => props.theme.focusOutline};
  }
`
