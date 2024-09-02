import React from "react";
import CloseButton from "./CloseButton";
import Filter from "./Filter";

interface NotepadProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type: 'Notes' | 'Session';
}

const Notepad: React.FC<NotepadProps> = ({ handleClose, children, type }) => {
  let size = '';

  switch(type) {
    case 'Notes': size = 'h-96 w-72'; break;
    case 'Session': size = 'h-[36rem] w-80'; break;
  }

  return (
    <Filter>
      <div className={`${size} relative overflow-hidden rounded-xl border-2 border-black bg-white`}>
        <div className="flex w-full items-center justify-end border-b-2 border-black bg-yellow-400 p-2">
          <CloseButton handleClose={handleClose} />
        </div>

        {children}
      </div>
    </Filter>
  );
};

export default Notepad;
