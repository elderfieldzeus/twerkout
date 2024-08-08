import React from 'react'

interface ButtonProps {
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <button className="bg-yellow-400 font-coffee w-full h-12 rounded-lg text-white text-2xl active:bg-yellow-500">
        {children}
    </button>
  )
}

export default Button;
