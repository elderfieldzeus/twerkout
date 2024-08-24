import React from 'react'

interface WorkoutInputProps {
    index: number;
    workout: string;
    handleChangeWorkout: React.ChangeEventHandler<HTMLInputElement>;
}

const WorkoutInput: React.FC<WorkoutInputProps> = ({index, workout, handleChangeWorkout}) => {
  return (
    <input 
        id={`workout` + index} 
        className='w-full outline-none my-2 border-b-2 focus:border-black transition-all text-black'
        value={workout}
        placeholder={`Workout #${index + 1}`}
        onChange={handleChangeWorkout}
    />
  )
}

export default WorkoutInput