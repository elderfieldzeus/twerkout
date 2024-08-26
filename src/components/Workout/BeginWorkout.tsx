import React from 'react'

interface BeginWorkoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const BeginWorkout: React.FC<BeginWorkoutProps> = ({handleClick}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <button onClick={handleClick} className="h-80 w-[calc(100%-5rem)] relative flex flex-col justify-center items-center bg-yellow-400 active:bg-yellow-500 border-2 border-black rounded-[4rem]">
          <img src="/images/cute_chicken.png" alt="Cute Chicken" className="size-32 z-10 translate-x-2"/>
          <img src="/images/egg.png" alt="Egg" className="size-64 -mt-16 rounded-full"/>
          <p className="font-coffee text-xl text-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2">Begin<br />Workout</p>
        </button>
    </div>
  )
}

export default BeginWorkout