// Libraries
import styled from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 100%;
    max-width: 500px;
  }

  fieldset {
    padding: 0;
    border: none;
    display: inline-block;
    min-width: 0;
    width: 500px;
    max-width: 100%;
  }

  legend {
    font-size: var(--heading-one);
    text-shadow: var(--text-shadow-primary) white;
    margin: 0.75em 0;
    text-align: center;
    width: 100%;
    line-height: 1em;
  }
`
