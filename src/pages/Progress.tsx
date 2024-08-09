import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main';

interface ProgressProps {
    setColor: () => void;
}

const Progress: React.FC<ProgressProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [])

  return (
    <Main header='Progress'>

    </Main>
  )
}

export default Progress