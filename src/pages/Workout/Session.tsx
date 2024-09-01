import React, { useEffect, useState } from 'react'
import Main from '../../components/Main';
import { User } from 'firebase/auth';
import { auth } from '../../utilities/firebase';
import { getCurrentWorkout } from '../../utilities/get';
import LoadingScreen from '../../components/LoadingScreen';
import HorizontalBar from '../../components/HorizontalBar';
import { updateWorkoutStatus } from '../../utilities/update';
import { Exercise } from '../../utilities/post';
import { useNavigate } from 'react-router-dom';
import SessionHeader from '../../components/Workout/SessionHeader';
import EndWorkoutButton from '../../components/Workout/EndWorkoutButton';
import WorkoutButton from '../../components/Workout/WorkoutButton';

interface SessionProps {
    setColor: () => void;
}

interface WorkoutDay {
  name: string,
  exercises: Exercise[],
  splitId: string,
  dayIndex: number
}

const Session: React.FC<SessionProps> = ({ setColor }) => {
    const [user, setUser] = useState<User | null>(null);
    const [workout, setWorkout] = useState<WorkoutDay | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();

    const handleEndWorkout: React.MouseEventHandler<HTMLButtonElement> = () => {
      const handleChangeStatus = async() => {
        try {
          if(user && workout) {
            await updateWorkoutStatus(user.uid, workout.splitId);

            navigate("/gym");
            setLoading(false);
          }
        }
        catch(e) {
          console.log(e);
          setLoading(false);
        }
      }

      setLoading(true);
      handleChangeStatus();
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
      const fetchWorkout = async () => {
        try {
          if(user) {
            const currentWorkout = await getCurrentWorkout(user.uid);
            
            if(currentWorkout) {
              setWorkout({
                name: currentWorkout.data.name,
                exercises: [...currentWorkout.data.exercises],
                splitId: currentWorkout.data.splitId,
                dayIndex: currentWorkout.data.dayIndex
              });
              setLoading(false);
            }
          }
        }
        catch(e) {
          console.error(e);
          setLoading(false);
        }
      }
  
      fetchWorkout();
    }, [user]);
    
  return (
    <Main header='Session'>
      {
        loading
        ?
        <LoadingScreen />
        :
        <>
          <SessionHeader name = { workout ? workout.name : ''} />

          <EndWorkoutButton handleEndWorkout = {handleEndWorkout} />

          <HorizontalBar className='border-black my-4'/>

          <p className='font-coffee w-full text-center mb-2'>CHOOSE AN EXERCISE</p>

          {workout?.exercises.map((exercise) => {
            return <WorkoutButton 
                      handleClick={alert}
                      name={exercise.name}
                    />
          })
          }

            <WorkoutButton 
              handleClick={alert}
              name='...Other'
              other={true}
            />
        </>
      }
    </Main>
  );
}

export default Session