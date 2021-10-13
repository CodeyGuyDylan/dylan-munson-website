// Libraries
import { useFormikContext } from 'formik'
import { FaCircleNotch } from 'react-icons/fa'

// Styles
import { Button, LoaderWrapper } from './styles'

// Types
import { SubmitButtonType } from './types'

const SubmitButton: SubmitButtonType = ({ children }) => {
  const { isSubmitting } = useFormikContext()
  
  return (
    <>
      {isSubmitting ? (
        <LoaderWrapper>
          <FaCircleNotch size={30} />
        </LoaderWrapper>
      ) : (
        <Button type='submit'>{children}</Button>
      )}
    </>
  )
}

export default SubmitButton
