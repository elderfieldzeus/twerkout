import React from 'react'
import { Exercise } from '../../utilities/post';
import HorizontalBar from '../HorizontalBar';
import Inline from '../Inline';
import AddButton from '../AddButton';

interface ExerciseContent {
    exercises: Exercise[];
    handleAddSet: (index: number) => React.MouseEventHandler<HTMLButtonElement>;
    index: number;
}

const ExerciseContent: React.FC<ExerciseContent> = ( { exercises, handleAddSet, index } ) => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <p className='text-center mt-2 font-coffee text-xl'>{exercises[index].name}</p>
            <Inline className='font-coffee text-xs -mt-1'>
                <p>Best:</p>
                <p className='text-gray-400'>{'N/A'}</p>
            </Inline>
        </div>

        <HorizontalBar className='mx-2' />
        
        {exercises[index].sets.map((set, i) => {
          return (
          <div key = {i}>
            <p className='font-coffee text-xs'>Set #{i + 1}</p>
            <div>

            </div>
          </div>
        )
        })}

        <AddButton 
          handleAdd={handleAddSet(index)} 
        />
    </div>
  )
}

export default ExerciseContent