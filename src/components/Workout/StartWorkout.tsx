import React from 'react'

interface StartWorkoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const StartWorkout: React.FC<StartWorkoutProps> = ({handleClick}) => {
  return (
    <div className='h-full flex flex-col justify-between w-full'>
        <button 
            className='font-coffee w-full text-8xl text-center mt-6 transition-colors active:text-yellow-600'
            onClick={handleClick}
        >
            LET'S<br/>WORK!!
        </button>
        <img 
            src="/images/buffchicken.png" 
            alt="buff chicken"
            className='-mb-8 w-full'
        />
    </div>
  )
}

export default StartWorkout