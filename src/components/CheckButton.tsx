import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface CheckButtonProps {
    handleCheck: React.MouseEventHandler<HTMLButtonElement>
} 

const CheckButton: React.FC<CheckButtonProps> = ({handleCheck}) => {
  return (
    <button onClick={handleCheck} className='bg-green-400 p-1 rounded-full border-2 border-black'>
        <FaCheck className='size-7 text-black' />
    </button>
  )
}

export default CheckButton