import React, { useEffect } from "react";
import Main from "../components/Main";
import SplitButton from "../components/Split/SplitButton";
import { useNavigate } from "react-router-dom";
import SplitContainer from "../components/Split/SplitContainer";
import CurrentSplitContent from "../components/Split/CurrentSplitContent";
import { MdAddCircle } from "react-icons/md";

interface CurrentSplitProps {
  setColor: () => void;
}

const CurrentSplit: React.FC<CurrentSplitProps> = ({ setColor }) => {  
  const navigate = useNavigate();

  useEffect(() => {
    setColor();
  }, [setColor]);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate("/split/new");
  }

  return (
    <Main
      header="Your Split"
    >
      <SplitContainer>
        <CurrentSplitContent />
      </SplitContainer>

      <SplitButton
        content="Create New Split"
        handleOpen = {handleOpen}
        Icon = {MdAddCircle}
      />
    </Main>
  );
};

export default CurrentSplit;
