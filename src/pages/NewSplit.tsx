import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import SplitContainer from "../components/Split/SplitContainer";
import SplitButton from "../components/Split/SplitButton";
import { MdOutlineSaveAlt } from "react-icons/md";
import SplitInput from "../components/Split/SplitInput";

interface NewSplitProps {
  setColor: () => void;
}

interface Days {
  name: string;
  workoutIds: string[];
}

export interface Split {
  name: string;
  days: Days[];
}

const NewSplit: React.FC<NewSplitProps> = ({ setColor }) => {
  const MAX_TITLE: number = 16;

  const defaultSplit: Split = {
    name: "",
    days: [],
  }

  const [split, setSplit] = useState<Split>(defaultSplit);

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.value.length <= MAX_TITLE) {
      setSplit(prev => ({...prev, name: e.target.value}));
    }
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
