import React, { useState } from 'react'
import { Set } from '../../utilities/post';
import DropdownButton from '../DropdownButton';
import SetInput from './SetInput';
import DeleteSetButton from './DeleteSetButton';

interface ExerciseSetInterface {
    index: number;
    set: Set;
    handleChangeReps: React.ChangeEventHandler<HTMLInputElement>;
    handleChangeWeight: React.ChangeEventHandler<HTMLInputElement>;
    handleDeleteSet: React.MouseEventHandler<HTMLButtonElement>;
}

const ExerciseSet: React.FC<ExerciseSetInterface> = ({index, set, handleChangeReps, handleChangeWeight, handleDeleteSet}) => {
  const [show, setShow] = useState<boolean>(true);

  const handleShow = () => {
    setShow(prev => !prev);
  }

  return (
    <div className='mx-4'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
              <p className='font-coffee text-xs'>Set #{index + 1}</p>
              <DeleteSetButton handleDelete={handleDeleteSet} />
            </div>

            <DropdownButton
              show = {show}
              handleClick = {handleShow}
            />
        </div>
        {
          show
          &&
          <div className='flex gap-2 text-sm my-2'>
              <SetInput value = {set.reps} handleChange = {handleChangeReps} unit = "reps"/>
              <SetInput value = {set.weightKG} handleChange = {handleChangeWeight} unit = "kg"/>
          </div>
        }
    </div>
  )
}

export default ExerciseSet