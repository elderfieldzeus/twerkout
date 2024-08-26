import React, { useState } from 'react'
import { Split } from '../../pages/Split/NewSplit'
import TitleInput from './TitleInput';
import DayInput from './DayInput';
import AddDayButton from './AddDayButton';

interface SplitInputProps {
    split: Split;
    handleChangeName: React.ChangeEventHandler<HTMLInputElement>;
    MAX_TITLE: number;
    handleAddDay: React.MouseEventHandler<HTMLButtonElement>;
    handleChangeDayName: (index: number) => React.ChangeEventHandler<HTMLInputElement>;
    handleAddWorkout: (index: number) => React.MouseEventHandler<HTMLButtonElement>;
    handleDeleteDay: (index: number) => () => void;
    handleChangeWorkout: (dayIndex: number) => (workoutIndex: number) => React.ChangeEventHandler<HTMLInputElement>;
    handleDeleteWorkout: (index: number) => React.MouseEventHandler<HTMLButtonElement>;
}

const SplitInput: React.FC<SplitInputProps> = ({ split, handleChangeName, MAX_TITLE, handleAddDay, handleChangeDayName, handleAddWorkout, handleDeleteDay, handleChangeWorkout, handleDeleteWorkout }) => {
    const [showArray, setShowArray] = useState<boolean[]>([]);

    const changeShow = (index: number) => () => {
        setShowArray((prev) => {
            const temp = [...prev];
            temp[index] = !temp[index];

            return [...temp];
        })
    }

    const deleteShow = (index: number) => () => {
        setShowArray((prev) => {
            const temp = [...prev];
            temp.splice(index, 1);

            return [...temp];
        })
    }

  return (
    <div className='h-full pb-16'>
        <TitleInput
            handleChangeName={handleChangeName}
            name={split.name}
            MAX_TITLE={MAX_TITLE}
        />

        {split.days.map((day, index) => {
            return (
                <DayInput 
                    key = {index}
                    index = {index}
                    day = {day}
                    handleChange = {handleChangeDayName(index)}
                    handleAdd = {handleAddWorkout(index)}
                    handleDelete = {handleDeleteDay(index)}
                    show = {showArray[index]}
                    toggleShow = {changeShow(index)}
                    deleteShow = {deleteShow(index)}
                    handleChangeWorkout = {handleChangeWorkout(index)}
                    handleDeleteWorkout = {handleDeleteWorkout(index)}
                />)
        })}


        <AddDayButton 
            handleAddDay={handleAddDay}
        />
    </div>
  )
}

export default SplitInput