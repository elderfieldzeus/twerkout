import React from 'react'
import { LiaDumbbellSolid } from 'react-icons/lia'

const MainButton: React.FC = () => {
  return (
    <button className='bg-white rounded-full p-5 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 border-4 border-yellow-400 active:bg-yellow-100 transition-all'>
        <LiaDumbbellSolid className='size-10 text-yellow-400'/>
    </button>
  )
}

export default MainButton