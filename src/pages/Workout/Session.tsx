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
import ExerciseButton from '../../components/Workout/ExerciseButton';
import Notepad from '../../components/Notepad';
import ExerciseContent from '../../components/Workout/ExerciseContent';
import SubLoading from '../../components/SubLoading';
import CancelWorkout from '../../components/Workout/CancelWorkout';
import { deleteWorkout } from '../../utilities/delete';

interface SessionProps {
    setColor: () => void;
}

interface WorkoutDay {
  id: string,
  name: string,
  exercises: Exercise[],
  splitId: string,
  dayIndex: number
}

const Session: React.FC<SessionProps> = ({ setColor }) => {
    const [user, setUser] = useState<User | null>(null);
    const [workout, setWorkout] = useState<WorkoutDay | null>(null);
    const [exercise, setExercise] = useState<Exercise | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);

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

    const handleDeleteWorkout: React.MouseEventHandler<HTMLButtonElement> = () => {
      const handleDelete = async () => {
        try {
          if(workout) {
            await deleteWorkout(workout.id);
            
            setLoading(false);
            navigate('/gym');
          }
        }
        catch(e) {
          console.error(e);
        }
      }

      setLoading(true);
      handleDelete();
    }

    const handleOpenWorkout = (e: Exercise): React.MouseEventHandler<HTMLButtonElement> => () => {
      setOpen(true);
      setExercise(e);
    }

    const handleCloseWorkout: React.MouseEventHandler<HTMLButtonElement> = () => {
      setOpen(false);
      setExercise(null);
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
                id: currentWorkout.id,
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
    <Main 
      header='Session'
      Extra = {open && (
        <Notepad 
          handleClose={handleCloseWorkout}
          type='Session'
        >
          {
            (exercise)
            ?
            <ExerciseContent exercise={exercise} />
            :
            <SubLoading />
          }
        </Notepad>
      )}
    >
      {
        loading
        ?
        <LoadingScreen />
        :
        <>
          <SessionHeader name = { workout ? workout.name : ''} />

          <div className='w-full flex justify-center my-4 gap-1'>
            <EndWorkoutButton handleEndWorkout = {handleEndWorkout} />
            <CancelWorkout handleCancelWorkout={handleDeleteWorkout} />
          </div>
          

          <HorizontalBar className='border-black my-4'/>

          <p className='font-coffee w-full text-center mb-2'>CHOOSE AN EXERCISE</p>

          {workout?.exercises.map((exercise, index) => {
            return <ExerciseButton 
                      key={index}
                      handleClick={handleOpenWorkout(exercise)}
                      name={exercise.name}
                    />
          })
          }
          
          <ExerciseButton 
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