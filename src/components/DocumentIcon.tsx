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
import mediaQueries from '../helper/mediaQueries'

interface IDocument {
   index: number
   name: string
   Icon: IconType
   setFileOpened: Dispatch<SetStateAction<string[]>>
}

type PositionType = { top: number | null; left: number | null }

const DocumentIcon: FC<IDocument> = ({ index, name, Icon, setFileOpened }) => {
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

      if (arr.indexOf(fileName) === -1) {
         return [...arr, fileName]
      } else {
         return arr
      }
   }

   // Opens file on click
   const openFile = () => {
      setFileOpened(addFileToArray)
   }

   // Opens file on enter
   const keyboardOpenFile = (e: KeyboardEvent) => {
      setFileOpened(addFileToArray)
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
         tabIndex={0}
         id={name.split('.')[0]}
         onPointerDown={handlePointerDown}
         onDoubleClick={openFile}
         onKeyDown={keyboardOpenFile}
         style={{
            top: position.top || '0',
            left: position.left || '0',
         }}
      >
         <Icon />

         <p>{name}</p>
      </Wrapper>
   )
}

export default DocumentIcon

const Wrapper = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 160px;
   padding-top: 5px;
   user-select: none;
   width: 175px;

   ${mediaQueries.laptop`
      position: absolute;
   `}

   svg {
      height: 100px;
      width: 100px;
   }

   :hover {
      cursor: pointer;
   }

   :hover,
   :focus {
      opacity: 0.6;
   }
`
