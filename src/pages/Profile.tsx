import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import ProfilePicture from "../components/Profile/ProfilePicture";
import InfoSection from "../components/Profile/InfoSection";
import SignoutSection from "../components/Profile/SignoutSection";
import { auth } from "../utilities/firebase";
import { User } from "firebase/auth";

interface ProfileProps {
  setColor: () => void;
}

const Profile: React.FC<ProfileProps> = ({ setColor }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setColor();
  }, [setColor]);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main header="Profile">
      <ProfilePicture />
      <InfoSection user={user} />
      <SignoutSection />
    </Main>
  );
};

export default Profile;
