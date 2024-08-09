import React, { useEffect } from 'react'
import Main from '../components/Main';

interface GymProps {
    setColor: () => void;
}

const Gym: React.FC<GymProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [setColor])

  return (
    <Main header='Workout'>
        
    </Main>
  )
}

export default Gym