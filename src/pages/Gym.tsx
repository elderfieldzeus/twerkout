import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

interface GymProps {
    setColor: () => void;
}

const Gym: React.FC<GymProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [])

  return (
    <div className='w-full min-h-screen bg-white'>
        <Navbar />
        <div className='pt-10 px-5'>
          <p className='font-coffee text-2xl'>Workouts</p>
        </div>
    </div>
  )
}

export default Gym