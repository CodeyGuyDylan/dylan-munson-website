// Libraries
import { useField } from 'formik'

// Styles
import { StyledTextArea } from './styles'
import { Label, Hint, Wrapper, Error } from '../../helper/styles'

// Types
import { TextAreaType } from './types'

const TextArea: TextAreaType = props => {
  const [field, meta] = useField(props)

  const { error, touched } = meta
  const { id, name, hint, label, rows, required } = props

  return (
    <Wrapper>
      <Label htmlFor={id || name}>
        {label}
        {required ? null : ' (Optional)'}
      </Label>

      {hint && <Hint>{hint}</Hint>}

      <StyledTextArea {...field} id={id || name} rows={rows} />

      {touched && error ? <Error>{error}</Error> : null}
    </Wrapper>
  )
}

export default TextArea
