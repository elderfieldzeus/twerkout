import React from 'react'

interface DayButtonProps {
    content?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const DayButton: React.FC<DayButtonProps> = ({content, handleClick}) => {
  return (
    <button 
        className="w-full h-16 bg-yellow-400 active:bg-yellow-500 transition-all rounded-xl border-2 border-black font-coffee text-2xl"
        onClick = {handleClick}
    >   
        {content}
    </button>
  )
}

export default DayButton