import {
   useState,
   useEffect,
   useRef,
   Dispatch,
   FC,
   ReactNode,
   SetStateAction,
   KeyboardEvent,
} from 'react'
import styled from 'styled-components'
import mediaQueries from '../helper/mediaQueries'

interface IDocument {
   children: ReactNode
   file: string
   setFilesOpened: Dispatch<SetStateAction<string[]>>
}

const Document: FC<IDocument> = ({ children, file, setFilesOpened }) => {
   const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
   const [isDragging, setIsDragging] = useState<boolean>(false)
   const [position, setPosition] = useState<{
      top: number | null | string
      left: number | null | string
   }>({ top: null, left: null })

   const wrapperElem = useRef<HTMLDivElement | null>(null)

   // Removes current file from array
   const removeFromArray = (arr: string[]) => {
      const index = arr.indexOf(file)

      return [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)]
   }

   // Close document on click
   const closeDocument = () => {
      setFilesOpened(removeFromArray)
   }

   // Close document on enter
   const keyboardCloseDocument = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
         setFilesOpened(removeFromArray)
      }
   }

   // Toggle fullscreen on click
   const toggleFullScreen = () => {
      setIsFullScreen(prev => !prev)
   }

   // Toggle fullscreen on enter
   const keyboardToggleFullScreen = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
         setIsFullScreen(prev => !prev)
      }
   }

   const onDragMove = (e: PointerEvent) => {
      const newLeft = (position.left as number) + e.movementX
      const newTop = (position.top as number) + e.movementY

      const wrapper = wrapperElem.current!
      const { clientWidth, clientHeight } = wrapper

      const { innerWidth } = window

      const getComputedStyle = (style: string) => {
         return Number(
            window
               .getComputedStyle(wrapper, null)
               .getPropertyValue(style)
               .split('p')[0]
         )
      }
      // Calculate original left value to smooth conversion from % to px
      const computedLeft = getComputedStyle('left')
      const originalLeft = computedLeft - clientWidth / 2

      // Calculate original top value to smooth conversion from % to px
      const computedTop = getComputedStyle('top')
      const originalTop = computedTop - clientHeight / 2

      // Determins if the window should be able to be dragged
      const shouldMove =
         !isFullScreen &&
         newLeft > 0 &&
         newTop > 0 &&
         newLeft < innerWidth - clientWidth

      if (position.left && position.top) {
         if (shouldMove) {
            setPosition({
               left: newLeft,
               top: newTop,
            })
         }
      } else {
         setPosition({
            left: originalLeft,
            top: originalTop,
         })
      }
   }

   const handlePointerDown = () => {
      setIsDragging(true)
   }

   const handlePointerUp = () => {
      setIsDragging(false)
   }

   const handlePointerMove = (e: any) => {
      if (isDragging && window.innerWidth > 848) {
         onDragMove(e)
      }
   }

   useEffect(() => {
      window.addEventListener('pointerup', handlePointerUp)
      window.addEventListener('pointermove', handlePointerMove)

      return () => {
         window.removeEventListener('pointerup', handlePointerUp)
         window.removeEventListener('pointermove', handlePointerMove)
      }
   })

   return (
      <Wrapper
         role='dialog'
         ref={wrapperElem}
         style={{
            top: isFullScreen ? '0' : position.top || '50%',
            left: isFullScreen ? '0' : position.left || '50%',
            transform:
               (!position.top && !isFullScreen) || position.top === '50%'
                  ? 'translate(-50%, -50%)'
                  : '',
            width: isFullScreen ? '100vw' : '800px',
            height: isFullScreen ? '100vh' : '90vh',
            maxWidth: isFullScreen ? '100vw' : '90vw',
         }}
      >
         <Actions onPointerDown={handlePointerDown}>
            {isFullScreen ? (
               <Windowed
                  tabIndex={0}
                  onKeyDown={keyboardToggleFullScreen}
                  onClick={toggleFullScreen}
                  role='button'
                  aria-label='Switch to windowed mode'
               />
            ) : (
               <FullScreen
                  tabIndex={0}
                  onKeyDown={keyboardToggleFullScreen}
                  onClick={toggleFullScreen}
                  role='button'
                  aria-label='Switch to fullscreen mode'
               />
            )}

            <Exit
               tabIndex={0}
               onKeyDown={keyboardCloseDocument}
               onClick={closeDocument}
               role='button'
               aria-label='Exit file'
            />
         </Actions>

         <Heading>{file.split('-').join(' ').toUpperCase()}</Heading>

         <article>{children}</article>
      </Wrapper>
   )
}

export default Document

const Wrapper = styled.div`
   -ms-overflow-style: none;
   background-color: #000;
   border: 5px solid var(--matrix-green);
   height: 90vh;
   max-width: 90vw;
   overflow-y: scroll;
   position: absolute;
   scrollbar-width: none;
   width: 800px;

   ::-webkit-scrollbar {
      display: none;
   }

   article {
      padding: 0 15px 15px 15px;
   }

   h1 {
      font-size: 1.7em;
   }

   h2 {
      font-size: 1.5em;
   }

   p {
      font-size: 1em;
   }

   ${mediaQueries.laptop`
      article {
         padding: 0 2rem 2rem 2rem;
      }
   `}

   // Force element to middle of screen on mobile
   @media (max-width: 848px) {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
   }
`

const Heading = styled.h1`
   text-align: center;
   margin: 1rem 0;
`

const Exit = styled.span`
   position: relative;

   ::before,
   ::after {
      background-color: var(--matrix-green);
      content: '';
      height: 20px;
      right: 16px;
      position: absolute;
      top: 7.5px;
      width: 3px;
   }

   ::before {
      transform: rotate(45deg);
   }

   ::after {
      transform: rotate(-45deg);
   }
`

const FullScreen = styled.span`
   ::before {
      border: 2px solid var(--matrix-green);
      box-sizing: border-box;
      content: '';
      height: 15px;
      left: 8px;
      position: absolute;
      top: 10px;
      width: 15px;
   }
`

const Windowed = styled.span`
   ::before,
   ::after {
      background-color: #000;
      border: 2px solid var(--matrix-green);
      box-sizing: border-box;
      content: '';
      height: 15px;
      position: absolute;
      width: 15px;
   }

   :hover,
   :focus {
      ::before,
      ::after {
         opacity: 1 !important;
         border: 2px solid var(--dark-green) !important;
      }
   }

   ::before {
      bottom: 13px;
      left: 11px;
   }

   ::after {
      bottom: 8px;
      left: 6px;
   }
`

const Actions = styled.div`
   background-color: #000;
   border-bottom: 2px solid var(--matrix-green);
   cursor: pointer;
   display: flex;
   justify-content: flex-end;
   position: sticky;
   right: 0;
   top: 0;
   width: 100%;

   ${FullScreen},
   ${Exit},
   ${Windowed} {
      cursor: pointer;
      display: inline-block;
      height: 35px;
      width: 35px;

      :hover,
      :focus {
         ::before,
         ::after {
            opacity: 0.6;
         }
      }
   }

   ${FullScreen},
   ${Windowed} {
      border-left: 2px solid var(--matrix-green);
      border-right: 2px solid var(--matrix-green);
      position: relative;
   }
`
