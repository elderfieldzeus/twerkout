import React from "react";
import { LiaDumbbellSolid } from "react-icons/lia";

interface MainButtonProps {
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MainButton: React.FC<MainButtonProps> = ({ handleOnClick }) => {
  return (
    <button
      onClick={handleOnClick}
      className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-yellow-400 p-5 text-black transition-all active:bg-yellow-500 active:text-gray-800"
    >
      <LiaDumbbellSolid className="size-10" />
    </button>
  );
};

export default MainButton;
