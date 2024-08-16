import React from "react";
import CloseButton from "../CloseButton";
import Filter from "../Profile/Filter";

interface NotepadProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Notepad: React.FC<NotepadProps> = ({ handleClose, children }) => {
  return (
    <Filter>
      <div className="relative h-96 w-72 overflow-hidden rounded-xl border-2 border-black bg-white">
        <div className="flex w-full items-center justify-end border-b-2 border-black bg-yellow-400 p-2">
          <CloseButton handleClose={handleClose} />
        </div>

        {children}
      </div>
    </Filter>
  );
};

export default Notepad;
