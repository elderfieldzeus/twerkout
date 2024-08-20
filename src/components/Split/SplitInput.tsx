import React from 'react'
import { Split } from '../../pages/NewSplit'
import TitleInput from './TitleInput';
import DayInput from './DayInput';

interface SplitInputProps {
    split: Split;
    handleChangeName: React.ChangeEventHandler<HTMLInputElement>;
    MAX_TITLE: number;
    handleAddDay: React.MouseEventHandler<HTMLButtonElement>;
    handleChangeDayName: (index: number) => React.ChangeEventHandler<HTMLInputElement>;
}

const SplitInput: React.FC<SplitInputProps> = ({ split, handleChangeName, MAX_TITLE, handleAddDay, handleChangeDayName }) => {
  return (
    <div>
        <TitleInput
            handleChangeName={handleChangeName}
            name={split.name}
            MAX_TITLE={MAX_TITLE}
        />

        {split.days.map((day, index) => {
            return (
            <>
                <DayInput 
                    key = {index}
                    day = {day}
                    handleChange = {handleChangeDayName(index)}
                />
            </>)
        })}

        <button onClick={handleAddDay} className='size-10 bg-green-400 rounded-full'>+</button>
    </div>
  )
}

export default SplitInput