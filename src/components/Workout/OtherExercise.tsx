import React from 'react'
import HorizontalBar from '../HorizontalBar'
import AddButton from '../AddButton'

interface OtherExerciseProps {
    otherExercise: string;
    handleChangeOtherExercise: React.ChangeEventHandler<HTMLInputElement>;
    handleAddExercise: React.MouseEventHandler<HTMLButtonElement>
}

const OtherExercise: React.FC<OtherExerciseProps> = ({ otherExercise, handleChangeOtherExercise, handleAddExercise }) => {
  return (
    <div>
        <div className='flex flex-col items-center pb-1'>
            <input 
                className='text-center mt-2 font-coffee text-xl focus:outline-none'
                placeholder='Exercise Name Here'
                value = {otherExercise}
                onChange={handleChangeOtherExercise}
            />
        </div>

        <HorizontalBar className='mx-2' />

        <AddButton 
          handleAdd={handleAddExercise} 
        />
    </div>
  )
}

export default OtherExercise