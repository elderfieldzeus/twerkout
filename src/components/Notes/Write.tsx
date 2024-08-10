import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6'

const Write: React.FC = () => {
  return (
    <div className='absolute right-5 h-12 flex justify-center items-center active:text-yellow-600'>
        <FaPenToSquare className='size-6'/>
    </div>
  )
}

export default Write