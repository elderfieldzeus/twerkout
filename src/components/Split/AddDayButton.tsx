import React from 'react'
import { IoIosAdd } from 'react-icons/io';

interface AddDayButtonProps {
    handleAddDay: React.MouseEventHandler<HTMLButtonElement>;
}

const AddDayButton: React.FC<AddDayButtonProps> = ({handleAddDay}) => {
  return (
    <button onClick={handleAddDay} className='w-[calc(100%-2rem)] border-2 border-black absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-400 focus:bg-green-500 transition-all rounded-lg h-8 flex items-center justify-center'>
        <IoIosAdd />
    </button>
  )
}

export default AddDayButton