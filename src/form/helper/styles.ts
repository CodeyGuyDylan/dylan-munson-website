// Libraries
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  width: 100%;
  max-width: 90vw;
`

export const Label = styled.label`
  color: ${props => props.theme.labelColor};
  margin-bottom: 0.25rem;

  :hover {
    color: ${props => props.theme.hoverLabelColor};
  }
`

export const Hint = styled.small`
   margin-bottom: 0.25rem;
   color: ${props => props.theme.hintColor};
`

export const Error = styled.span`
   font-size: var(--regular-text);
   color: red;
   margin-top: 0.25rem;
`