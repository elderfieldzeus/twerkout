import React from 'react'

interface ButtonProps {
    children?: React.ReactNode;
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({children, handleOnClick}) => {
  return (
    <button onClick={handleOnClick} className="bg-yellow-400 font-coffee w-full h-12 rounded-lg text-white text-2xl active:bg-yellow-500">
        {children}
    </button>
  )
}

export default Button;
