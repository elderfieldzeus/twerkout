import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import BeginWorkout from "../components/Workout/BeginWorkout";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { User } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { getCurrentWorkout } from "../utilities/get";
import { Exercise } from "../utilities/post";

interface WorkoutProps {
  setColor: () => void;
}

export interface Workouts {
  name: string,
  exercises: Exercise[]
}

const Workout: React.FC<WorkoutProps> = ({ setColor }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(auth) {
      setUser(auth.currentUser);
    }
  }, []);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        if(user) {
          const currentWorkout = await getCurrentWorkout(user.uid);

          setLoading(false);

          if(currentWorkout) {
            // navigate('/workout');
          }

        }
      }
      catch(e) {
        console.error(e);
      }
    }

    fetchWorkout();
  }, [user, navigate]);

  useEffect(() => {
    setColor();
  }, [setColor]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/gym/begin');
  }

  return (
  <Main header="Workout">
    {
      loading
      ?
      <LoadingScreen />
      :
      <BeginWorkout handleClick={handleClick}/>
    }
  </Main>
);
};

export default Workout;
