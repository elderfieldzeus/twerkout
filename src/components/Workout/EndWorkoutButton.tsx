import React from 'react'

interface EndWorkoutProps {
    handleEndWorkout: React.MouseEventHandler<HTMLButtonElement>
}

const EndWorkoutButton: React.FC<EndWorkoutProps> = ({handleEndWorkout}) => {
  return (
      <button 
      className='px-7 py-2 font-coffee border-2 border-black bg-green-400 active:bg-green-500 text-sm transition-colors rounded-xl'
      onClick={handleEndWorkout}
      >Done!</button>
  )
}

export default EndWorkoutButton