import React from 'react'

interface DayProps {
    title: string;
    workouts: string[];
}

const Day: React.FC<DayProps> = ({title, workouts}) => {
  return (
    <div>
        <p className='font-coffee'>{title}</p>
        <ul className='text-sm font-medium list-disc px-6 grid grid-cols-2 gap-6'>
            {workouts.map(workout => {
                return <li>{workout}</li>
            })}
        </ul>
    </div>
  )
}

export default Day