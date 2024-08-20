import React from 'react'
import { Split } from '../../pages/NewSplit'
import HorizontalBar from '../HorizontalBar';

interface SplitInputProps {
    split: Split;
    handleChangeName: React.ChangeEventHandler<HTMLInputElement>;
    MAX_TITLE: number;
}

const SplitInput: React.FC<SplitInputProps> = ({ split, handleChangeName, MAX_TITLE }) => {
  return (
    <div>
        <div className='relative'>
            <input
                type="text"
                onChange={handleChangeName}
                value={split.name}
                className='font-coffee text-xl w-full text-center focus:outline-none '
                placeholder='title'
            />
             {/* className={`${textCount === CONTENT_MAX_COUNT ? "text-red-400" : "text-gray-400"} absolute bottom-0 right-0 text-xs font-bold`} */}
            <p className={`${split.name.length === MAX_TITLE ? "text-red-400" : "text-gray-400"} absolute bottom-0 right-0 text-xs font-bold`}>{split.name.length}/{MAX_TITLE}</p>
        </div>

        <HorizontalBar />
    </div>
  )
}

export default SplitInput