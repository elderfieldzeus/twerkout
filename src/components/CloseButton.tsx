import React from "react";
import { IoClose } from "react-icons/io5";

interface CloseButtonProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClose }) => {
  return (
    <button
      onClick={handleClose}
      className="rounded-full border-2 border-black bg-red-400"
    >
      <IoClose className="size-5 text-black" />
    </button>
  );
};

export default CloseButton;
