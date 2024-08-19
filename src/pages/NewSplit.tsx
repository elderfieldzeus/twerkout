import React, { useEffect, useState } from "react";
import Main from "../components/Main";

interface NewSplitProps {
  setColor: () => void;
}

interface Days {
  name: string;
  workoutIds: string[];
}

interface Split {
  name: string;
  days: Days[];
}

const NewSplit: React.FC<NewSplitProps> = ({ setColor }) => {
  const defaultSplit: Split = {
    name: "",
    days: [],
  }

  const [split, setSplit] = useState<Split>(defaultSplit);

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSplit(prev => ({...prev, name: e.target.value}));
  }

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main
      header="New Split"
    >
      <input type="text" value={split.name} onChange={handleChangeName} className="bg-black text-white"/>
    </Main>
  );
};

export default NewSplit;
