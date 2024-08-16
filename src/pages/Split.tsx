import React, { useEffect } from "react";
import Main from "../components/Main";
import CurrentSplitButton from "../components/Split/CurrentSplitButton";
import PastSplits from "../components/Split/PastSplits";

interface SplitProps {
  setColor: () => void;
}

const Split: React.FC<SplitProps> = ({ setColor }) => {
  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main header="Split">
      <CurrentSplitButton />
      <PastSplits />
    </Main>
  );
};

export default Split;
