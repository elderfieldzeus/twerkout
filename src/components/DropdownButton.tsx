import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

interface DropdownButtonProps {
    show: boolean;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({show, handleClick}) => {
  return (
    <button onClick={handleClick}>
        <RiArrowDropDownLine className={`size-6 transition-all ${show ? "text-black" : "text-gray-400 rotate-90"}`} />
    </button>
  )
}

export default DropdownButton