import React, { useEffect } from 'react'
import Main from '../components/Main';

interface ProfileProps {
    setColor: () => void;
}

const Profile: React.FC<ProfileProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [])

  return (
    <Main header='Profile'>

    </Main>
  )
}

export default Profile