// Libraries
import { useField } from 'formik'

// Styles
import { Input } from './styles'
import { Label, Hint, Wrapper, Error } from '../../helper/styles'

// Types
import { TextInputType } from './types'

const TextInput: TextInputType = props => {
  const [field, meta] = useField(props)

  const { error, touched } = meta
  const { id, name, hint, type, label, required, autoFocus, autoComplete } = props

  return (
    <Wrapper>
      <Label htmlFor={id || name}>
        {label}
        {required ? null : ' (Optional)'}
      </Label>

      {hint && <Hint>{hint}</Hint>}

      <Input {...field} id={id || name} type={type} autoFocus={autoFocus} autoComplete={autoComplete} />

      {touched && error ? <Error>{error}</Error> : null}
    </Wrapper>
  )
}

export default TextInput
