import React from 'react'
import Navbar from './Navbar'

interface MainProps {
    children?: React.ReactNode;
    header: string;
}

const Main: React.FC<MainProps> = ({children, header}) => {
  return (
    <div className='w-full min-h-screen bg-white'>
        <Navbar />
        <main className='pt-2 px-5'>
            <p className='font-coffee text-2xl'>{header}</p>
            {children}
        </main>
    </div>
  )
}

export default Main