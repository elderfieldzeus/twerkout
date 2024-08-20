import React from 'react'
import { Split } from '../../pages/NewSplit'
import HorizontalBar from '../HorizontalBar';

interface SplitInputProps {
    split: Split;
    handleChangeName: React.ChangeEventHandler<HTMLInputElement>;
}

const SplitInput: React.FC<SplitInputProps> = ({ split, handleChangeName }) => {
  return (
    <div>
        <input 
            type="text" 
            onChange={handleChangeName} 
            value={split.name} 
            className='font-coffee text-xl w-full text-center focus:outline-none '
            placeholder='title'
        />

        <HorizontalBar />
    </div>
  )
}

export default SplitInput