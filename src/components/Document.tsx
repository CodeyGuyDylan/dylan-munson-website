import {
   useState,
   Dispatch,
   FC,
   SetStateAction,
   PointerEvent,
   useEffect,
} from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

interface IDocument {
   index: number
   name: string
   Icon: IconType
   setFileOpened: Dispatch<SetStateAction<string>>
}

type PositionType = { top: number | null; left: number | null }

const Document: FC<IDocument> = ({ index, name, Icon, setFileOpened }) => {
   const [isDragging, setIsDragging] = useState<boolean>(false)

   // Default position to be at the top and in the position of the row calculated by the index
   const [position, setPosition] = useState<PositionType>({
      top: 35,
      left: index * 185,
   })

   const openFile = () => {
      const fileName = name.split('.')[0]

      setFileOpened(fileName)
   }

   // Sets coordinates based on where the user dragged the box to
   const onDragMove = (e: PointerEvent) => {
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
      setPosition({
         left: newLeft - 87.5,
         top: newTop - 80,
      })
   }

   const handlePointerDown = () => {
      setIsDragging(true)
   }

   const handlePointerUp = () => {
      setIsDragging(false)
   }

   const handlePointerMove = (e: any) => {
      if (isDragging) onDragMove(e)
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
         id={name.split('.')[0]}
         onPointerDown={handlePointerDown}
         onDoubleClick={openFile}
         style={{
            position:
               position.top || position.top === 0 ? 'absolute' : 'initial',
            top: position.top || '0',
            left: position.left || '0',
            opacity: isDragging ? '0.3' : '1',
         }}
      >
         <Icon />
         <p>{name}</p>
      </Wrapper>
   )
}

export default Document

const Wrapper = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 160px;
   position: absolute;
   user-select: none;
   width: 175px;

   svg {
      height: 100px;
      width: 100px;
   }

   :hover {
      cursor: pointer;
   }
`
