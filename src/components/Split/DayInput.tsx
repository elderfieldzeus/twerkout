import React, { useState } from 'react'
import { Day } from '../../pages/NewSplit'
import HorizontalBar from '../HorizontalBar';
import DropdownButton from '../DropdownButton';

interface DayInputProps {
    day: Day;
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const DayInput: React.FC<DayInputProps> = ({ day, handleChange }) => {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow: React.MouseEventHandler<HTMLButtonElement> = () => {
        setShow(prev => !prev);
    }

  return (
    <>
        <HorizontalBar />
        <div>
            <div className='flex justify-between items-center'>
                <input
                    className='font-coffee focus:outline-none w-full'
                    placeholder='DAY'
                    value={day.name}
                    onChange={handleChange}
                />

                <DropdownButton 
                    show={show} 
                    handleClick={toggleShow} 
                />
            </div>
            {
                    show 
                    &&
                    <ul className='text-sm font-medium list-disc px-6 w-full grid grid-cols-[repeat(auto-fill,_minmax(6rem,_1fr))] gap-6'>
                        {day.workoutIds.map(workout => {
                            return <li>{workout}</li>
                        })}
                    </ul>
            }
        </div>
    </>
  )
}

export default DayInput