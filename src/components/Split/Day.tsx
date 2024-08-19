import React from 'react'

interface DayProps {
    title: string;
    workouts: string[];
}

const Day: React.FC<DayProps> = ({title, workouts}) => {
  return (
    <div className='w-full'>
        <p className='font-coffee'>{title}</p>
        <ul className='text-sm font-medium list-disc px-6 w-full grid grid-cols-[repeat(auto-fill,_minmax(6rem,_1fr))] gap-6'>
            {workouts.map(workout => {
                return <li>{workout}</li>
            })}
        </ul>
    </div>
  )
}

export default Day