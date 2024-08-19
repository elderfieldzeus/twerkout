import React from "react";
import { MdAddCircle } from "react-icons/md";

interface AddSplitButtonProps {
  handleOpen: React.MouseEventHandler<HTMLButtonElement>
}

const AddSplitButton: React.FC<AddSplitButtonProps> = ({ handleOpen }) => {
  return (
    <button
      onClick={ handleOpen }
      className="flex h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-yellow-400 font-coffee active:bg-yellow-500"
    >
      <MdAddCircle className="size-6" />
      <p>Create New Split</p>
    </button>
  );
};

export default AddSplitButton;
