import React, { useEffect } from "react";
import Main from "../components/Main";
import CurrentSplit from "../components/Split/CurrentSplit";
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
      <CurrentSplit />
      <PastSplits />
    </Main>
  );
};

export default Split;
