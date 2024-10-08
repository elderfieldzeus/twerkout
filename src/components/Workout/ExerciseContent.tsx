import React from 'react'
import HorizontalBar from '../HorizontalBar';
import Inline from '../Inline';
import AddButton from '../AddButton';
import ExerciseSet from './ExerciseSet';
import { WorkoutExercise } from '../../pages/Workout/Session';

interface ExerciseContent {
    exercises: WorkoutExercise[];
    handleAddSet: (index: number) => React.MouseEventHandler<HTMLButtonElement>;
    index: number;
    handleChangeReps: (setIndex: number) => React.ChangeEventHandler<HTMLInputElement>;
    handleChangeWeight: (setIndex: number) => React.ChangeEventHandler<HTMLInputElement>;
    handleDeleteSet: (setIndex: number) => React.MouseEventHandler<HTMLButtonElement>;
}

const ExerciseContent: React.FC<ExerciseContent> = ( { exercises, handleAddSet, index, handleChangeReps, handleChangeWeight, handleDeleteSet } ) => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <p className='text-center mt-2 font-coffee text-xl'>{exercises[index].name}</p>
            <Inline className='font-coffee text-xs -mt-1'>
                <p>Best (Previous 10):</p>
                <p className='text-gray-400'>
                  {exercises[index].bestSet === undefined 
                  || (exercises[index].bestSet.reps === 0)
                  ?
                  'N/A'
                :
                `${exercises[index].bestSet.weightKG} KG X ${exercises[index].bestSet.reps} REPS`} 
                </p>
            </Inline>
        </div>

        <HorizontalBar className='mx-2' />
        
        <div className='sets h-[25rem] overflow-y-scroll'>
          {exercises[index].sets.map((set, i) => {
            return (
            <ExerciseSet
              key = {i}
              index = {i}
              set = {set}
              handleChangeReps = {handleChangeReps(i)}
              handleChangeWeight = {handleChangeWeight(i)}
              handleDeleteSet = {handleDeleteSet(i)}
            />
          )
          })}
          {
            exercises[index].sets.length === 0
            &&
            <p className='font-coffee w-full text-[0.6rem] text-center text-gray-400'>No sets yet.</p>
          }
        </div>

        <AddButton 
          handleAdd={handleAddSet(index)} 
        />
    </div>
  )
}

export default ExerciseContent