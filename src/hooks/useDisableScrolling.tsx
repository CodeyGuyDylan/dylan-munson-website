import { useEffect } from 'react'

const useDisableScrolling: (condition: boolean) => void = (
   condition = true
) => {
   useEffect(() => {
      if (condition && window.innerWidth < 848) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'unset'
      }

      return () => {
         document.body.style.overflow = 'unset'
      }
   }, [condition])
}

export default useDisableScrolling
