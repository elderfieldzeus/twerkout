import React, { useEffect, useState } from 'react'
import Main from '../../components/Main';
import { User } from 'firebase/auth';
import { auth } from '../../utilities/firebase';
import { getBestWeight, subscribeToWorkout } from '../../utilities/get';
import LoadingScreen from '../../components/LoadingScreen';
import HorizontalBar from '../../components/HorizontalBar';
import { addExercise, saveExercise, updateWorkoutStatus } from '../../utilities/update';
import { Exercise, Set } from '../../utilities/post';
import { useNavigate } from 'react-router-dom';
import SessionHeader from '../../components/Workout/SessionHeader';
import EndWorkoutButton from '../../components/Workout/EndWorkoutButton';
import ExerciseButton from '../../components/Workout/ExerciseButton';
import Notepad from '../../components/Notepad';
import ExerciseContent from '../../components/Workout/ExerciseContent';
import SubLoading from '../../components/SubLoading';
import CancelWorkout from '../../components/Workout/CancelWorkout';
import { deleteWorkout } from '../../utilities/delete';
import OtherExercise from '../../components/Workout/OtherExercise';

interface SessionProps {
    setColor: () => void;
}

export interface WorkoutDay {
  id: string,
  name: string,
  exercises: WorkoutExercise[],
  splitId: string,
  dayIndex: number
}

export interface WorkoutExercise extends Exercise {
  bestSet: Set;
}

const Session: React.FC<SessionProps> = ({ setColor }) => {
    const REP_MAX = 1000;
    const WEIGHT_MAX = 1000;
    const OTHER_EXERCISE_MAX = 16;

    const [user, setUser] = useState<User | null>(null);
    const [workout, setWorkout] = useState<WorkoutDay | null>(null);
    const [workoutIndex, setWorkoutIndex] = useState<number>(-1);
    const [otherExercise, setOtherExercise] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(true);
    const [subLoading, setSubLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleEndWorkout: React.MouseEventHandler<HTMLButtonElement> = () => {
      const handleChangeStatus = async() => {
        try {
          if(user && workout) {
            await updateWorkoutStatus(workout.id, workout.exercises);
            navigate('/gym');
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
          if (workout) {
            navigate('/gym');
            await deleteWorkout(workout.id);
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
      const fetchBestSet = async () => {
        try {
          if(workout && user && i !== -1) {
            const tempSet = await getBestWeight(user.uid, workout.splitId, workout.exercises[i].name);

            if(tempSet !== null) {
              workout.exercises[i].bestSet = tempSet;
              setOpen(true);
              setWorkoutIndex(i);
            }
          }
        }
        catch(e) {
          console.error(e);
        }
      }

      if(workout?.exercises[i].bestSet === undefined) {
        fetchBestSet();
      }
      else if(workout) {
        setOpen(true);
        setWorkoutIndex(i);
      }
    }

    const handleOpenOtherWorkout: React.MouseEventHandler<HTMLButtonElement> = () => {
      setOpen(true);
      setWorkoutIndex(-1);
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

            workout.exercises[index].sets.push({
              reps: 0,
              weightKG: 0
            });

            await saveExercise(workout, user.uid);
          }
        }
        catch(e) {
          console.error(e);
        }
      }

      handleUpdateSet();
    }

    const handleAddExercise: React.MouseEventHandler<HTMLButtonElement> = () => {
      const handleUpdateNewExercise = async () => {
        try {
          if(otherExercise !== '' && workout) {
            await addExercise(otherExercise, workout.id, workout.exercises);
            
            const newIndex = workout.exercises.length - 1;
            
            setWorkoutIndex(newIndex);

            const addSet = handleAddSet(newIndex) as () => void;
            addSet();

            setOtherExercise('');
          }
        }
        catch(e) {
          console.error(e);
        }
      }
      
      setSubLoading(true);
      handleUpdateNewExercise();
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
        let exercises: WorkoutExercise[] = [];
        if(prev) {
          exercises = prev.exercises;

          const lastIndex = e.target.value.length - 1;

          if(((Number(e.target.value[lastIndex]) || e.target.value[lastIndex] === '0')
            && Number(e.target.value) < REP_MAX 
            && Number(e.target.value) >= 0)
            || e.target.value === ''
            || e.target.value === '0'
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
        let exercises: WorkoutExercise[] = [];
        if(prev) {
          exercises = prev.exercises;

          const lastIndex = e.target.value.length - 1;

          if(((Number(e.target.value[lastIndex]) || e.target.value[lastIndex] === '0')
            && Number(e.target.value) < WEIGHT_MAX 
            && Number(e.target.value) >= 0) 
            || (e.target.value[lastIndex] === '.' && e.target.value.split('.').length - 1 === 1)
            || e.target.value === ''
            || e.target.value === '0'
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

    const handleChangeOtherExercise: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const text = e.target.value.toUpperCase();
      if(text.length <= OTHER_EXERCISE_MAX) {
        setOtherExercise(text);
      }
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
      if(!workout) {
        setLoading(true);
      }
      else {
        setLoading(false);
      }
    }, [workout]);

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
          {workout && !subLoading
          ?
          <>
            {
              (workout && workoutIndex !== -1)
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
              <OtherExercise
                otherExercise = {otherExercise}
                handleChangeOtherExercise = {handleChangeOtherExercise}
                handleAddExercise={handleAddExercise}
              />
            }
          </>
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
        <div className='mb-10'>
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
            handleClick={handleOpenOtherWorkout}
            name='...Other'
            other={true}
          />
        </div>
      }
    </Main>
  );
}

export default Session