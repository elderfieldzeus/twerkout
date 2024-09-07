import React, { useEffect, useState } from 'react'
import Main from '../../components/Main';
import { User } from 'firebase/auth';
import { auth } from '../../utilities/firebase';
import { subscribeToWorkout } from '../../utilities/get';
import LoadingScreen from '../../components/LoadingScreen';
import HorizontalBar from '../../components/HorizontalBar';
import { addExerciseSet, saveExercise, updateWorkoutStatus } from '../../utilities/update';
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

export interface WorkoutDay {
  id: string,
  name: string,
  exercises: Exercise[],
  splitId: string,
  dayIndex: number
}

const Session: React.FC<SessionProps> = ({ setColor }) => {
    const REP_MAX = 1000;
    const WEIGHT_MAX = 1000;

    const [user, setUser] = useState<User | null>(null);
    const [workout, setWorkout] = useState<WorkoutDay | null>(null);
    const [workoutIndex, setWorkoutIndex] = useState<number>(-1);

    const [loading, setLoading] = useState<boolean>(true);
    const [subLoading, setSubLoading] = useState<boolean>(false);
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

    const handleOpenWorkout = (i: number): React.MouseEventHandler<HTMLButtonElement> => () => {
      setOpen(true);
      setWorkoutIndex(i);
    }

    const handleCloseWorkout: React.MouseEventHandler<HTMLButtonElement> = () => {
      if(workout && user) {
        saveExercise(workout, user.uid);
      }

      setOpen(false);
    }

    const handleAddSet = (index: number): React.MouseEventHandler<HTMLButtonElement> => () => {
      const handleUpdateSet = async () => {
        try {
          if(workout && index !== -1 && user) {
            setSubLoading(true);
            await saveExercise(workout, user.uid);
            await addExerciseSet(workout.id, index);
          }
        }
        catch(e) {
          console.error(e);
        }
      }

      handleUpdateSet();
    }

    const handleDeleteSet = (exerciseIndex: number) => (setIndex: number) : React.MouseEventHandler<HTMLButtonElement> => () => {
      const handleUpdateSet = async () => {
        try {
          if(workout && exerciseIndex !== -1 && setIndex !== -1 && user) {
            setSubLoading(true);

            workout.exercises[exerciseIndex].sets.splice(setIndex, 1);

            await saveExercise(workout, user.uid);
          }
        }
        catch(e) {
          console.error(e);
        }
      }

      handleUpdateSet();
    }

    const handleChangeReps = (exerciseIndex: number) => (setIndex: number): React.ChangeEventHandler<HTMLInputElement> => (e) => {
      setWorkout(prev => {
        let exercises: Exercise[] = [];
        if(prev) {
          exercises = prev.exercises;

          const lastIndex = e.target.value.length - 1;

          if((Number(e.target.value[lastIndex])
            && Number(e.target.value) < REP_MAX 
            && Number(e.target.value) > -REP_MAX) 
            || (e.target.value[lastIndex] === '.' && e.target.value.split('.').length - 1 === 1)
            || e.target.value === ''
            || e.target.value === '0'
            || e.target.value[lastIndex] === '0'
          ) {
            exercises[exerciseIndex].sets[setIndex].reps = e.target.value;
          }
        }
        return (prev) ? {
          ...prev,
          exercises
        }
        :
        null;
      });
    } 

    const handleChangeWeight = (exerciseIndex: number) => (setIndex: number): React.ChangeEventHandler<HTMLInputElement> => (e) => {
      setWorkout(prev => {
        let exercises: Exercise[] = [];
        if(prev) {
          exercises = prev.exercises;

          if(Number(e.target.value) 
            && Number(e.target.value) < WEIGHT_MAX 
            && Number(e.target.value) > -WEIGHT_MAX 
            || e.target.value === ''
          ) {
            exercises[exerciseIndex].sets[setIndex].weightKG = e.target.value;
          }

        }
        return (prev) ? {
          ...prev,
          exercises
        }
        :
        null;
      });
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
      const handleSubscribe = async () => {
        if(user) {
          await subscribeToWorkout(user.uid, (tempWorkout) => {
            setWorkout(tempWorkout);
            setSubLoading(false);
            setLoading(false);
          });
        }
      }
        
      handleSubscribe();
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
            (workout && !subLoading)
            ?
            <ExerciseContent 
              exercises={workout.exercises}
              handleAddSet={handleAddSet}
              index = {workoutIndex}
              handleChangeReps = {handleChangeReps(workoutIndex)}
              handleChangeWeight = {handleChangeWeight(workoutIndex)}
              handleDeleteSet = {handleDeleteSet(workoutIndex)}
            />
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
                      handleClick={handleOpenWorkout(index)}
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