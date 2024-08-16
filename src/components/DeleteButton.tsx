import React from "react";
import { MdOutlineDelete } from "react-icons/md";

interface DeleteButtonProps {
  handleDeleteNotes: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ handleDeleteNotes }) => {
  return (
    <button
      onClick={handleDeleteNotes}
      className="rounded-full border-2 border-black bg-red-400 p-1"
    >
      <MdOutlineDelete className="size-7 text-black" />
    </button>
  );
};

export default DeleteButton;
