import React from 'react'
import { Day } from '../../pages/NewSplit'
import HorizontalBar from '../HorizontalBar';
import DropdownButton from '../DropdownButton';
import DayButton from './DayButton';
import WorkoutInput from './WorkoutInput';

interface DayInputProps {
    day: Day;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleAdd: React.MouseEventHandler<HTMLButtonElement>;
    index: number;
    handleDelete: (() => void);
    show: boolean;
    toggleShow: () => void;
    deleteShow: () => void;
    handleChangeWorkout: (workoutIndex: number) => React.ChangeEventHandler<HTMLInputElement>;
    handleDeleteWorkout: React.MouseEventHandler<HTMLButtonElement>;
}

const DayInput: React.FC<DayInputProps> = ({ day, handleChange, handleAdd, index, handleDelete, show,  toggleShow, deleteShow, handleChangeWorkout, handleDeleteWorkout }) => {
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
                        <ul className='text-sm font-medium list-disc text-gray-400 px-6 w-full grid grid-cols-2 gap-x-10'>
                            {day.workouts.map((workout, index) => {
                                return (
                                <li key = {index}>
                                    <WorkoutInput
                                        index={index}
                                        workout = {workout}
                                        handleChangeWorkout={handleChangeWorkout(index)}
                                    />
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

                            <DayButton
                                type='Subtract'
                                handleClick={handleDeleteWorkout}
                            />
                        </div>
                    </>
                    
            }
        </div>
    </div>
  )
}

export default DayInput