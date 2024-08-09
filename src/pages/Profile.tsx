import React, { useEffect } from 'react'
import Main from '../components/Main';
import ProfilePicture from '../components/Profile/ProfilePicture';
import InfoSection from '../components/Profile/InfoSection';
import SignoutSection from '../components/Profile/SignoutSection';

interface ProfileProps {
    setColor: () => void;
}

const Profile: React.FC<ProfileProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [setColor])

  return (
    <Main header='Profile'>
        <ProfilePicture />
        <InfoSection />
        <SignoutSection />
    </Main>
  )
}

export default Profile