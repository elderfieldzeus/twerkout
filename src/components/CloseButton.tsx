import React from 'react'
import { IoClose } from 'react-icons/io5'

interface CloseButtonProps {
    handleClose: React.MouseEventHandler<HTMLButtonElement>
} 

const CloseButton: React.FC<CloseButtonProps> = ({handleClose}) => {
  return (
    <button onClick={handleClose} className='bg-red-400 rounded-full border-2 border-black'>
        <IoClose className='size-5 text-black' />
    </button>
  )
}

export default CloseButton