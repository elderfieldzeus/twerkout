import React from 'react'
import Logo from './Logo';

interface ButtonProps {
    children?: React.ReactNode;
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, handleOnClick, loading = false}) => {
  return (
    <button onClick={handleOnClick} className="bg-yellow-400 font-coffee w-full h-12 rounded-lg text-white text-2xl active:bg-yellow-500" disabled = {loading ? true : false}>
        {loading ? <Logo className='size-5 flex w-full justify-center' /> : children}
    </button>
  )
}

export default Button;
