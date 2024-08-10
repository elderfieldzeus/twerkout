import React from 'react'
import Logo from './Logo'

const LoadingScreen: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <Logo className='size-28 select-none -mt-[7.5rem]'/>
    </div>
  )
}

export default LoadingScreen