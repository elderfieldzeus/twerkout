import React, { useEffect } from "react";
import Main from "../components/Main";

interface NewSplitProps {
  setColor: () => void;
}

const NewSplit: React.FC<NewSplitProps> = ({ setColor }) => {  

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main
      header="New Split"
    >

    </Main>
  );
};

export default NewSplit;
