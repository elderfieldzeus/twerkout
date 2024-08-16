import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { auth } from "../utilities/firebase";
import { User } from "firebase/auth";

interface GymProps {
  setColor: () => void;
}

const Gym: React.FC<GymProps> = ({ setColor }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setColor();
  }, [setColor]);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return <Main header="Workout">{user !== null && user.uid}</Main>;
};

export default Gym;
