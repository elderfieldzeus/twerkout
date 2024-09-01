import React from 'react'

interface ExerciseButtonProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    name: string;
    other?: boolean;
}

const ExerciseButton:React.FC<ExerciseButtonProps> = ({handleClick, name, other = false}) => {
  const bg = other ? 'bg-orange-300 active:bg-orange-400' : 'bg-yellow-400 active:bg-yellow-500'

  return (
    <button 
        onClick={handleClick} 
        className={`w-full p-3 my-2 ${bg} transition-all border-2 border-black rounded-xl font-coffee`}
        >
        {name}
    </button>
  )
}

export default ExerciseButton