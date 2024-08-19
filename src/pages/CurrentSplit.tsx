import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import AddSplitButton from "../components/Split/AddSplitButton";
import AddSplit from "../components/Split/AddSplit";

interface CurrentSplitProps {
  setColor: () => void;
}

const CurrentSplit: React.FC<CurrentSplitProps> = ({ setColor }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setColor();
  }, [setColor]);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(true);
  }

  return (
    <Main
      header="Your Split"
      Extra={<>
        {open && < AddSplit />}
        </>
      }
    >
      <AddSplitButton
        handleOpen = {handleOpen}
      />
    </Main>
  );
};

export default CurrentSplit;
