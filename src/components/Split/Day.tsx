import React from 'react'

interface DayProps {
    title: string;
    workouts: string[];
}

const Day: React.FC<DayProps> = ({title, workouts}) => {
  return (
    <div className='w-full'>
        <p className='font-coffee'>{title}</p>
        <ul className='text-sm font-medium list-disc px-6 w-full grid grid-cols-2 gap-x-10'>
            {workouts.map((workout, index) => {
                return (
                      <li 
                        key = {index}
                        className='my-2'
                      >
                          {workout}
                      </li>)
            })}
        </ul>
    </div>
  )
}

export default Day