// Libraries
import styled from 'styled-components'

export const Select = styled.select`
  color: ${props => props.theme.inputColor};
  background: ${props => props.theme.inputBackground};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  font-size: 1em;
  padding: 0.5em 2em 0.5em 1em;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

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

export const SelectWrapper = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: '';
    right: 1em;
    top: calc(50% - 5px);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid ${props => props.theme.selectArrowColor};
  }

  :hover::after {
    border-top: 10px solid ${props => props.theme.hoverSelectArrowColor};
  }
`
