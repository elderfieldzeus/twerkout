import React, { useEffect } from 'react'
import Main from '../components/Main';

interface SplitProps {
    setColor: () => void;
}

const Split: React.FC<SplitProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [])

  return (
    <Main header='Split'>

    </Main>
  )
}

export default Split