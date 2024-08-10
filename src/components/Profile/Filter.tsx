import React from 'react'

interface FilterProps {
    children?: React.ReactNode;
}

const Filter: React.FC<FilterProps> = ({children}) => {
  return (
    <div className='fixed h-screen w-full bg-black bg-opacity-50 z-20 flex justify-center items-center'>
        {children}
    </div>
  )
}

export default Filter;