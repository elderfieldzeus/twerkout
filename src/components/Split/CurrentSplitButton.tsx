import React from "react";
import { useNavigate } from "react-router-dom";

interface CurrentSplitButton {
  name: string | null;
}

const CurrentSplitButton: React.FC<CurrentSplitButton> = ({name}) => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate("/split/current");
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-44 w-full items-start justify-between rounded-xl border-2 border-black bg-yellow-400 px-4 font-coffee shadow-xl transition-all active:bg-yellow-500"
    >
      <div className="pt-6 text-start">
        <p>Your current split:</p>
        <p className="text-gray-600">{name ? name : 'N/A'}</p>
      </div>
      <img
        className="h-full select-none"
        src="/images/chickenlift.png"
        alt=""
      />
    </button>
  );
};

export default CurrentSplitButton;
