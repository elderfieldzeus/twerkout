import React from "react";

interface SideButtonProps {
  Icon: React.ElementType;
  label: string;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SideButton: React.FC<SideButtonProps> = ({
  Icon,
  label,
  handleOnClick,
}) => {
  return (
    <button
      onClick={handleOnClick}
      className="flex h-full w-10 flex-col items-center justify-start gap-1 pt-3 font-coffee text-black transition-all active:text-yellow-600"
    >
      <Icon className="size-6" />
      <p className="text-xs">{label}</p>
    </button>
  );
};

export default SideButton;
