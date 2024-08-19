import React, { useEffect } from "react";
import Main from "../components/Main";
import AddSplitButton from "../components/Split/AddSplitButton";
import { useNavigate } from "react-router-dom";
import CurrentSplitContainer from "../components/Split/CurrentSplitContainer";
import CurrentSplitContent from "../components/Split/CurrentSplitContent";

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
      <CurrentSplitContainer>
        <CurrentSplitContent />
      </CurrentSplitContainer>

      <AddSplitButton
        handleOpen = {handleOpen}
      />
    </Main>
  );
};

export default CurrentSplit;
