import React, { useEffect } from "react";
import Main from "../components/Main";
import AddSplitButton from "../components/Split/AddSplitButton";

interface CurrentSplitProps {
  setColor: () => void;
}

const CurrentSplit: React.FC<CurrentSplitProps> = ({ setColor }) => {
  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main
      header="Your Split"
      Extra = {
        <div>meow</div>
      }
    >
      <AddSplitButton />
    </Main>
  );
};

export default CurrentSplit;
