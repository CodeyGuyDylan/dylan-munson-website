// Libraries
import {
   useState,
   Dispatch,
   FC,
   SetStateAction,
   PointerEvent,
   useEffect,
   KeyboardEvent,
} from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

// Helper
import mediaQueries from '../helper/mediaQueries'

interface IDocument {
   index: number
   name: string
   Icon: IconType
   setActiveFile: Dispatch<SetStateAction<string>>
   setFileOpened: Dispatch<SetStateAction<string[]>>
   setHasClicked: Dispatch<SetStateAction<boolean>>
}

type PositionType = { top: number | null; left: number | null }

const DocumentIcon: FC<IDocument> = ({
   index,
   name,
   Icon,
   setActiveFile,
   setFileOpened,
   setHasClicked,
}) => {
   const [isDragging, setIsDragging] = useState<boolean>(false)

   // Default position to be at the top and in the position of the row calculated by the index
   const [position, setPosition] = useState<PositionType>({
      top: 35,
      left: index * 185,
   })
   // Keeps track of position before drag and drop
   const [staticPosition, setStaticPosition] = useState<PositionType>({
      top: 35,
      left: index * 185,
   })

   // Adds file to array if not already added
   const addFileToArray = (arr: string[]) => {
      const fileName = name.split('.')[0]

      setActiveFile(fileName)

      if (arr.indexOf(fileName) === -1) {
         return [...arr, fileName]
      } else {
         return arr
      }
   }

   // Opens file on click
   const openFile = () => {
      window.scrollTo(0, 0)
      setFileOpened(addFileToArray)
      setHasClicked(true)
   }

   // Opens file on enter
   const keyboardOpenFile = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
         setFileOpened(addFileToArray)
         setHasClicked(true)
      }
   }

   // Sets coordinates based on where the user dragged the box to
   const onDragMove = (e: PointerEvent) => {
      const widthAdjuster = 87.5
      const heightAdjuster = 80
      const dragBoxRadius = 60

      const newLeft =
         e.clientX <= 0
            ? 0
            : e.clientX >= window.innerWidth
            ? window.innerWidth
            : e.clientX

      const newTop =
         e.clientY <= 0
            ? 0
            : e.clientY >= window.innerWidth
            ? window.innerHeight
            : e.clientY

      // Subtract half the height and width of the file to drag by the center
      if (
         Math.abs(newLeft - widthAdjuster - staticPosition.left!) >
            dragBoxRadius ||
         Math.abs(newTop - heightAdjuster - staticPosition.top!) > dragBoxRadius
      ) {
         setPosition({
            left: newLeft - widthAdjuster,
            top: newTop - heightAdjuster,
         })
      }
   }

   const handlePointerDown = () => {
      setIsDragging(true)
   }

   const handlePointerUp = () => {
      setIsDragging(false)

      setStaticPosition(position)
   }

   const handlePointerMove = (e: any) => {
      if (isDragging) {
         onDragMove(e)
      }
   }

   const getWindowWidth = () => {
      if (typeof window !== 'undefined') {
         return window.innerWidth
      }

      return 0
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
         role='button'
         tabIndex={0}
         id={name.split('.')[0]}
         onPointerDown={handlePointerDown}
         onDoubleClick={openFile}
         onTouchEnd={openFile}
         onKeyDown={keyboardOpenFile}
         style={{
            top: getWindowWidth() > 848 ? position.top || '0' : 35,
            left: getWindowWidth() > 848 ? position.left || '0' : index * 185,
         }}
      >
         <Icon aria-labelledby={name} />

         <p id={name}>{name}</p>
      </Wrapper>
   )
}

export default DocumentIcon

const Wrapper = styled.li`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 160px;
   padding-top: 5px;
   user-select: none;
   width: 175px;

   ::before {
      width: 0;
      height: 0;
   }

   ${mediaQueries.laptop`
      position: absolute;
   `}

   svg {
      height: 100px;
      width: 100px;
   }

   p {
      font-size: 1em;
   }

   :hover {
      cursor: pointer;
   }

   :hover,
   :focus {
      opacity: 0.6;
   }
`
