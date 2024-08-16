import React, { useEffect } from "react";
import Main from "../components/Main";

interface CurrentSplitProps {
  setColor: () => void;
}

const CurrentSplit: React.FC<CurrentSplitProps> = ({ setColor }) => {
  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main header="Current Split">

    </Main>
  );
};

export default CurrentSplit;
