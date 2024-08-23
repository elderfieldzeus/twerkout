import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import SplitContainer from "../components/Split/SplitContainer";
import SplitButton from "../components/Split/SplitButton";
import { MdOutlineSaveAlt } from "react-icons/md";
import SplitInput from "../components/Split/SplitInput";

interface NewSplitProps {
  setColor: () => void;
}

export interface Day {
  name: string;
  workoutIds: string[];
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
      workoutIds: []
    }],
  }

  const [split, setSplit] = useState<Split>(defaultSplit);

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
          workoutIds: []
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
        temp[index].name = e.target.value;

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
      const workoutsTemp: string[] = [...prev.days[index].workoutIds];

      workoutsTemp.push("");

      daysTemp[index] = {...daysTemp[index], workoutIds: workoutsTemp};

      return {
        ...prev,
        days: daysTemp
      }
    });
  }

  const handleChangeWorkout = (dayIndex: number) => (workoutIndex: number): React.ChangeEventHandler<HTMLInputElement> => (e) => {
    setSplit(prev => {
      const daysTemp: Day[] = [...prev.days];
      const workoutsTemp: string[] = [...prev.days[dayIndex].workoutIds];

      workoutsTemp[workoutIndex] = e.target.value;

      daysTemp[dayIndex].workoutIds = [...workoutsTemp];

      return {
        ...prev,
        days: daysTemp
      }
    })
  }

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main
      header="New Split"
    >
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
        />
      </SplitContainer>

      <SplitButton
        content="Save Split"
        handleOpen = {alert}
        Icon={MdOutlineSaveAlt}
      />
    </Main>
  );
};

export default NewSplit;
