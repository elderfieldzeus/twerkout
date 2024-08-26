import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import SplitContainer from "../components/Split/SplitContainer";
import SplitButton from "../components/Split/SplitButton";
import { MdOutlineSaveAlt } from "react-icons/md";
import SplitInput from "../components/Split/SplitInput";
import { User } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { postSplit } from "../utilities/post";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

interface NewSplitProps {
  setColor: () => void;
}

export interface Day {
  name: string;
  workouts: string[];
}

export interface Split {
  name: string;
  days: Day[];
}

const NewSplit: React.FC<NewSplitProps> = ({ setColor }) => {
  const MAX_TITLE: number = 16;
  const MAX_DAYS: number = 7;

  const defaultSplit: Split = {
    name: "",
    days: [{
      name: "",
      workouts: []
    }],
  }

  const [split, setSplit] = useState<Split>(defaultSplit);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.value.length <= MAX_TITLE) {
      setSplit(prev => ({...prev, name: e.target.value.toLocaleUpperCase()}));
    }
  }

  const handleAddDay: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSplit(prev => {
      const temp: Day[] = [...prev.days];

      if(temp.length < MAX_DAYS){
        temp.push({
          name: "",
          workouts: []
        });
      }

      return {...prev, days: temp};
    });
  }

  const handleDeleteDay = (index: number) => (): void  => {
    setSplit(prev => {
      const temp: Day[] = [...prev.days];
      
      temp.splice(index, 1);

      return {
        ...prev,
        days: temp
      }
    })
  }

  const handleChangeDayName = (index: number): React.ChangeEventHandler<HTMLInputElement> => (e) => {
    if(e.target.value.length <= MAX_TITLE) {
      setSplit(prev => {
        const temp: Day[] = prev.days;
        temp[index].name = e.target.value.toLocaleUpperCase();

        return {
          ...prev,
          days: temp
        }
      });
    }
  }

  const handleAddWorkout = (index: number): React.MouseEventHandler<HTMLButtonElement> => () => {
    setSplit(prev => {
      const daysTemp: Day[] = [...prev.days];
      const workoutsTemp: string[] = [...prev.days[index].workouts];

      workoutsTemp.push("");

      daysTemp[index] = {...daysTemp[index], workouts: workoutsTemp};

      return {
        ...prev,
        days: daysTemp
      }
    });
  }

  const handleChangeWorkout = (dayIndex: number) => (workoutIndex: number): React.ChangeEventHandler<HTMLInputElement> => (e) => {
    if(e.target.value.length < MAX_TITLE) {
      setSplit(prev => {
        const daysTemp: Day[] = [...prev.days];
        const workoutsTemp: string[] = [...prev.days[dayIndex].workouts];

        
        workoutsTemp[workoutIndex] = e.target.value.toLocaleUpperCase();

        daysTemp[dayIndex].workouts = [...workoutsTemp];

        return {
          ...prev,
          days: daysTemp
        }
      });
    }
  }

  const handleDeleteWorkout = (index: number): React.MouseEventHandler<HTMLButtonElement> => () => {
    setSplit(prev => {
      const daysTemp: Day[] = [...prev.days];
      const workoutsTemp: string[] = [...prev.days[index].workouts];

      workoutsTemp.splice(-1, 1);

      daysTemp[index] = {...daysTemp[index], workouts: workoutsTemp};

      return {
        ...prev,
        days: daysTemp
      }
    })
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    async function handlePost(user: User) {
      try {
        const result = await postSplit(split, user.uid);
        if(result === true) {
          setLoading(false);
          navigate("/split/current");
        }
        else {
          alert("Error in posting data.");
        }
      }
      catch(e) {
        console.log(e);
      }
    }

    setLoading(true);
    let isValid = true;

    if(split.name === '' || split.days.length === 0) isValid = false;

    split.days.forEach((day) => {
      if(split.name === '' || day.workouts.length === 0) isValid = false;
      day.workouts.forEach((workout) => {
        if(workout === '') isValid = false;
      })
    })
    
    if(user !== null && isValid) {
      handlePost(user);
    }

    if(!isValid) {
      alert("LACKING INPUT");
    }
  }

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main
      header="New Split"
    >
      {
      loading
      ?
      <LoadingScreen />
      :
      <>
        <SplitContainer>
          <SplitInput
            split = {split}
            handleChangeName = {handleChangeName}
            MAX_TITLE = {MAX_TITLE}
            handleAddDay = {handleAddDay}
            handleChangeDayName = {handleChangeDayName}
            handleAddWorkout = {handleAddWorkout}
            handleDeleteDay = {handleDeleteDay}
            handleChangeWorkout = {handleChangeWorkout}
            handleDeleteWorkout = {handleDeleteWorkout}
          />
        </SplitContainer>
        <SplitButton
          content="Save Split"
          handleOpen = {handleSubmit}
          Icon={MdOutlineSaveAlt}
        />
      </>
      }
    </Main>
  );
};

export default NewSplit;
