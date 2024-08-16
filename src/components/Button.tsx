import React from "react";
import Logo from "./Logo";

interface ButtonProps {
  children?: React.ReactNode;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleOnClick,
  loading = false,
}) => {
  return (
    <button
      onClick={handleOnClick}
      className={`${loading ? "bg-yellow-500" : "bg-yellow-400"} h-12 w-full rounded-lg font-coffee text-2xl text-white active:bg-yellow-500`}
      disabled={loading ? true : false}
    >
      {loading ? (
        <Logo className="flex size-5 w-full justify-center" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
