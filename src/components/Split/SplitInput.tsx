import React, { useState } from 'react'
import { Split } from '../../pages/NewSplit'
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
}

const SplitInput: React.FC<SplitInputProps> = ({ split, handleChangeName, MAX_TITLE, handleAddDay, handleChangeDayName, handleAddWorkout, handleDeleteDay }) => {
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
    <div className='h-full'>
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
                />)
        })}


        <AddDayButton 
            handleAddDay={handleAddDay}
        />
    </div>
  )
}

export default SplitInput