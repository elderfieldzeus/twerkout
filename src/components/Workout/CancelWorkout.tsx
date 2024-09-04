import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'

interface CancelWorkoutProps {
    handleCancelWorkout: React.MouseEventHandler<HTMLButtonElement>
}

const CancelWorkout: React.FC<CancelWorkoutProps> = ({ handleCancelWorkout }) => {
  return (
    <button 
        onClick={handleCancelWorkout}
        className='py-1 px-1 border-2 border-black bg-red-400 active:bg-red-500 transition-all rounded-xl'
    >
        <MdOutlineDelete className='size-8' />
    </button>
  )
}

export default CancelWorkout