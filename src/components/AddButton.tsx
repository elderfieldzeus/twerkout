import React from 'react'
import { FaPlus } from 'react-icons/fa';

interface AddButtonProps {
    handleAdd: React.MouseEventHandler<HTMLButtonElement>;
}

const AddButton: React.FC<AddButtonProps> = ({handleAdd}) => {
  return (
    <button onClick={handleAdd} className='w-[calc(100%-2rem)] border-2 border-black absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-400 focus:bg-green-500 transition-all rounded-lg h-8 flex items-center justify-center'>
        <FaPlus className='size-3' />
    </button>
  )
}

export default AddButton