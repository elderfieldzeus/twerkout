import React from 'react'
import { Day } from '../../pages/NewSplit'
import HorizontalBar from '../HorizontalBar';
import DropdownButton from '../DropdownButton';
import DayButton from './DayButton';

interface DayInputProps {
    day: Day;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleAdd: React.MouseEventHandler<HTMLButtonElement>;
    index: number;
    handleDelete: (() => void);
    show: boolean;
    toggleShow: () => void;
    deleteShow: () => void;
}

const DayInput: React.FC<DayInputProps> = ({ day, handleChange, handleAdd, index, handleDelete, show,  toggleShow, deleteShow }) => {
    const handleDeleteAndHide: React.MouseEventHandler<HTMLButtonElement> = () => {
        deleteShow();
        handleDelete();
    }

  return (
    <div>
        <HorizontalBar />
        <div>
            <div className='flex justify-between items-center'>
                <input
                    id={`day` + index}
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
                    <>
                        <ul className='text-sm font-medium list-disc px-6 w-full grid grid-cols-[repeat(auto-fill,_minmax(6rem,_1fr))] gap-6'>
                            {day.workoutIds.map((workout, index) => {
                                return (
                                <li key = {index}>
                                    <input id={`workout` + index} type="text" className='w-full' placeholder={workout} />  
                                </li>
                                );
                            })}
                        </ul>
                        <div className='flex gap-2 my-2'>
                            <DayButton
                                type='Add'
                                handleClick={handleAdd}
                            />

                            <DayButton
                                type='Delete'
                                handleClick={handleDeleteAndHide}
                            />
                        </div>
                    </>
                    
            }
        </div>
    </div>
  )
}

export default DayInput