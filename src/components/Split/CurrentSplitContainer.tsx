import React from 'react'

interface CurrentSplitContainerProps {
    children?: React.ReactNode
}

const CurrentSplitContainer: React.FC<CurrentSplitContainerProps> = ({ children }) => {
  return (
    <div className='w-full h-[32rem] border-2 border-black rounded-lg mb-6 p-4 shadow-xl'>
        {children}
    </div>
  )
}

export default CurrentSplitContainer