import React, { useEffect } from 'react'
import Main from '../components/Main';

interface NotesProps {
    setColor: () => void;
}

const Notes: React.FC<NotesProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [])

  return (
    <Main header='Notes'>

    </Main>
  )
}

export default Notes