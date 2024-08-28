import React, { useEffect, useState } from "react";
import Main from "../../components/Main";
import DayButton from "../../components/Workout/DayButton";
import { Day, Split } from "../Split/NewSplit";
import { getCurrentSplit } from "../../utilities/get";
import { User } from "firebase/auth";
import { auth } from "../../utilities/firebase";
import LoadingScreen from "../../components/LoadingScreen";
import { postWorkout } from "../../utilities/post";
import { useNavigate } from "react-router-dom";

interface BeginProps {
  setColor: () => void;
}

const Begin: React.FC<BeginProps> = ({ setColor }) => {
    const [user, setUser] = useState<User | null>(null);
    const [splitId, setSplitId] = useState<string>('');
    const [split, setSplit] = useState<Split | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleCreateWorkout = (day: Day): React.MouseEventHandler<HTMLButtonElement> => () => {
        const handlePostWorkout = async () => {
            try {
                if(user) {
                    const result = await postWorkout(day, splitId, user.uid);

                    if(result) {
                        setLoading(false);
                        navigate('/gym');
                    }
                    else {
                        alert("UNKNOWN ERROR");
                    }
                }
            }
            catch(e) {
                console.error(e);
            }
        }

        setLoading(true);
        handlePostWorkout();
    }

  useEffect(() => {
    setColor();
  }, [setColor]);

  useEffect(() => {
    if(auth) {
        setUser(auth.currentUser);
    }
  }, []);

  useEffect(() => {
    const fetchSplit = async () => {
      try {
        if(user) {
          const currentSplit = await getCurrentSplit(user.uid);
          setLoading(false);
          if(currentSplit) {
            const newSplit: Split = {
              name: currentSplit.data.name,
              days: currentSplit.data.days
            }

            setSplitId(currentSplit.id);
            setSplit(newSplit);
          }
          else {
            navigate('/split/new');
          }
        }
      }
      catch(e) {
        console.error(e);
      }
    }

    fetchSplit();
  }, [user, navigate]);

  return (
  <Main>
    {
    loading 
    ?
    <LoadingScreen />
    :
    <>
        <p className="font-coffee text-4xl w-full text-center mb-4">Choose a Day!</p>
        <div className="flex flex-col gap-4">
            {split?.days.map((day, i) => {
                return (
                    <DayButton
                        key = {i}
                        content={day.name} 
                        handleClick={handleCreateWorkout(day)}
                    />
                )
            })}
        </div>
    </>
    }
  </Main>); 
};

export default Begin;
