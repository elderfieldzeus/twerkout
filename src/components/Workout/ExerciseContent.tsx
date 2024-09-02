import React from 'react'
import { Exercise } from '../../utilities/post';
import HorizontalBar from '../HorizontalBar';
import Inline from '../Inline';

interface ExerciseContent {
    exercise: Exercise;
}

const ExerciseContent: React.FC<ExerciseContent> = ( { exercise } ) => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <p className='text-center mt-2 font-coffee text-xl'>{exercise.name}</p>
            <Inline className='font-coffee text-xs -mt-1'>
                <p>Best:</p>
                <p className='text-gray-400'>{'N/A'}</p>
            </Inline>
        </div>

        <HorizontalBar className='mx-2' />
        
    </div>
  )
}

export default ExerciseContent