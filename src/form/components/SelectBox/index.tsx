// Libraries
import { useField } from 'formik'

// Styles
import { SelectWrapper, Select } from './styles'
import { Wrapper, Label, Hint, Error } from '../../helper/styles'

// Types
import { SelectBoxType } from './types'

const SelectBox: SelectBoxType = props => {
   const [field, meta, helpers] = useField(props)

   const { error, touched } = meta
   const { id, name, hint, label, options, required, changeHandler } = props
   const { setValue } = helpers

   return (
      <Wrapper>
         <Label htmlFor={id || name}>
            {label}
            {required ? null : ' (Optional)'}
         </Label>

         {hint && <Hint>{hint}</Hint>}

         <SelectWrapper>
            <Select
               {...field}
               id={id || name}
               onChange={e => {
                  const val = e.target.value || ''

                  setValue(val)
                  if (changeHandler) {
                     changeHandler(val)
                  }
               }}
            >
               {options.map((option, index) => (
                  <option key={`${option}${index}`} value={option}>
                     {option}
                  </option>
               ))}
            </Select>
         </SelectWrapper>

         {touched && error ? <Error>{error}</Error> : null}
      </Wrapper>
   )
}

export default SelectBox
