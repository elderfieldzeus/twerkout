import React, { useEffect } from "react";
import Main from "../components/Main";
import AddSplit from "../components/Split/AddSplit";

interface CurrentSplitProps {
  setColor: () => void;
}

const CurrentSplit: React.FC<CurrentSplitProps> = ({ setColor }) => {
  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main header="Your Split">
      <AddSplit />
    </Main>
  );
};

export default CurrentSplit;
