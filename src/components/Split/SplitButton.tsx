import React from "react";

interface SplitButtonProps {
  content?: string;
  handleOpen: React.MouseEventHandler<HTMLButtonElement>;
  Icon?: React.ElementType;
}

const SplitButton: React.FC<SplitButtonProps> = ({ content, handleOpen, Icon }) => {
  return (
    <button
      onClick={ handleOpen }
      className="flex h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-yellow-400 font-coffee active:bg-yellow-500 my-6"
    >
      {Icon && <Icon className="size-6" />}
      <p>{content}</p>
    </button>
  );
};

export default SplitButton;
