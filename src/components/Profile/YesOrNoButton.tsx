import React from "react";

interface SignoutButtonProps {
  type: "green" | "red";
  label?: string;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SignoutButton: React.FC<SignoutButtonProps> = ({
  type,
  label,
  handleOnClick,
}) => {
  return (
    <button
      onClick={handleOnClick}
      className={`${type == "green" ? "bg-green-400 active:bg-green-500" : "bg-red-400 active:bg-red-500"} size-20 rounded-full border-2 border-black shadow-2xl`}
    >
      {label}
    </button>
  );
};

export default SignoutButton;
