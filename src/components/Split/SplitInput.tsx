import React from 'react'
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
}

const SplitInput: React.FC<SplitInputProps> = ({ split, handleChangeName, MAX_TITLE, handleAddDay, handleChangeDayName, handleAddWorkout }) => {
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
                />)
        })}


        <AddDayButton 
            handleAddDay={handleAddDay}
        />
    </div>
  )
}

export default SplitInput