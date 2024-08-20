import React from 'react'
import { Day } from '../../pages/NewSplit'
import HorizontalBar from '../HorizontalBar';

interface DayInputProps {
    day: Day;
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const DayInput: React.FC<DayInputProps> = ({ day, handleChange }) => {
  return (
    <>
        <HorizontalBar />
        <div>
            <input 
                className='font-coffee focus:outline-none'
                placeholder='DAY'
                value={day.name}
                onChange={handleChange}
            />
            <ul className='text-sm font-medium list-disc px-6 w-full grid grid-cols-[repeat(auto-fill,_minmax(6rem,_1fr))] gap-6'>
                {day.workoutIds.map(workout => {
                    return <li>{workout}</li>
                })}
            </ul>
        </div>
    </>
  )
}

export default DayInput