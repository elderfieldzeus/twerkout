import React from 'react'
import Navbar from './Navbar'

interface MainProps {
    children?: React.ReactNode;
    header: string;
}

const Main: React.FC<MainProps> = ({children, header}) => {
  return (
    <div className='w-full min-h-screen bg-white relative'>
        <Navbar />
        <p className='font-coffee flex items-center text-2xl fixed top-0 h-14 px-5 w-full bg-white'>{header}</p>
        <main className='pt-16 px-5'>
            {children}
        </main>
    </div>
  )
}

export default Main