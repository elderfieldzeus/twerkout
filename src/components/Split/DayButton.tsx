import React from 'react'
import { IoIosAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

interface DayButtonProps {
    type: "Add" | "Delete";
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DayButton: React.FC<DayButtonProps> = ({type, handleClick}) => {
  return (
    <button 
        className={`${type == "Add" ? "bg-green-400 active:bg-green-500" : "bg-red-400 active:bg-red-500"} transition-all w-full h-8 rounded-lg border-2 border-black font-medium font-coffee flex items-center justify-center`}
        onClick = {handleClick}
    >
        {type == "Add" ? <IoIosAdd /> : <MdDelete/> }
    </button>
  )
}

export default DayButton