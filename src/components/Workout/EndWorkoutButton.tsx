import React from 'react'

interface EndWorkoutProps {
    handleEndWorkout: React.MouseEventHandler<HTMLButtonElement>
}

const EndWorkoutButton: React.FC<EndWorkoutProps> = ({handleEndWorkout}) => {
  return (
    <div className='w-full flex items-center justify-center my-4'>
        <button 
        className='px-4 py-2 font-coffee border-2 border-black bg-red-400 active:bg-red-500 text-sm transition-colors rounded-xl'
        onClick={handleEndWorkout}
        >End workout</button>
    </div>
  )
}

export default EndWorkoutButton