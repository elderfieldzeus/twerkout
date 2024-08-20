import React from 'react'

interface SplitContainerProps {
    children?: React.ReactNode
}

const SplitContainer: React.FC<SplitContainerProps> = ({ children }) => {
  return (
    <div className='w-full min-h-[32rem] border-2 border-black rounded-lg p-4 shadow-xl transition-all'>
        {children}
    </div>
  )
}

export default SplitContainer