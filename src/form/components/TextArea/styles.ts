// Libraries
import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  color: ${props => props.theme.inputColor};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  resize: none;
  padding: 0.5em 1em;
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
