import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface DayButtonProps {
    type: "Add" | "Delete" | "Subtract";
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DayButton: React.FC<DayButtonProps> = ({type, handleClick}) => {
  let color = "";

  switch(type) {
    case "Add": color = "bg-green-400 active:bg-green-500"; break;
    case "Delete": color = "bg-red-400 active:bg-red-500"; break;
    case "Subtract": color = "bg-yellow-400 active:bg-yellow-500"; break;
  }

  return (
    <button 
        className={`${color} transition-all w-full h-8 rounded-lg border-2 border-black font-medium font-coffee flex items-center justify-center`}
        onClick = {handleClick}
    >
        {type == "Add" ? <FaPlus className='size-3' /> : (type === 'Delete' ? <MdDelete/> : <FaMinus className='size-3' />) }
    </button>
  )
}

export default DayButton