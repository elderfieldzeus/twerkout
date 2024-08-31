import React, { useEffect, useState } from 'react'
import Main from '../../components/Main';
import { User } from 'firebase/auth';
import { auth } from '../../utilities/firebase';
import { getCurrentSplit, getCurrentWorkout } from '../../utilities/get';
import LoadingScreen from '../../components/LoadingScreen';
import HorizontalBar from '../../components/HorizontalBar';
import { updateWorkoutStatus } from '../../utilities/update';
import { Exercise } from '../../utilities/post';
import { useNavigate } from 'react-router-dom';
import { Day } from '../Split/NewSplit';

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
    const [day, setDay] = useState<Day | null>(null);
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
                exercises: [],
                splitId: currentWorkout.data.splitId,
                dayIndex: currentWorkout.data.dayIndex
              });
            }
          }
        }
        catch(e) {
          console.error(e);
        }
      }
  
      fetchWorkout();
    }, [user]);

    useEffect(() => {
      const fetchSplit = async () => {
        try {
          if(user && workout) {
            const tempSplit = await getCurrentSplit(user.uid);

            if(tempSplit) {
              const tempDay: Day = tempSplit.data.days[workout.dayIndex]

              setDay({
                name: tempDay.name,
                exercises: [...tempDay.exercises]
              });
            }
            setLoading(false);
          }
        }
        catch(e) {
          console.log(e);
        }
      }

      fetchSplit();
    }, [user, workout])
    
  return (
    <Main header='Session'>
      {
        loading
        ?
        <LoadingScreen />
        :
        <>
          <div className='flex flex-col w-full items-center'>
            <p className='font-coffee text-2xl'>Today is...</p>
            <p className='font-coffee text-5xl'>{workout?.name} day</p>
          </div>

          <div className='w-full flex items-center justify-center my-4'>
            <button 
            className='px-4 py-2 font-coffee border-2 border-black bg-red-400 active:bg-red-500 text-sm transition-colors rounded-xl'
            onClick={handleEndWorkout}
          >End workout</button>
          </div>

          <HorizontalBar className='border-black my-4'/>

          <p className='font-coffee w-full text-center'>CHOOSE AN EXERCISE</p>

          {day?.exercises.map((exercise) => {
            return <button 
                    onClick={alert} 
                    className='w-full p-3 my-2 bg-yellow-400 border-2 border-black rounded-xl font-coffee'
                  >
                    {exercise}
                  </button>
          }) 
          }
        </>
      }
    </Main>
  );
}

export default Session