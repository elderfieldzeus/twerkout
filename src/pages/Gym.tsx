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
    </div>
  )
}

export default Gym