import React from 'react'
import { LiaDumbbellSolid } from 'react-icons/lia'

const MainButton: React.FC = () => {
  return (
    <button className='bg-yellow-400 text-black rounded-full p-5 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 border-2 border-black active:bg-yellow-500 active:text-gray-800 transition-all'>
        <LiaDumbbellSolid className='size-10'/>
    </button>
  )
}

export default MainButton