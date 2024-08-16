import React from "react";
import Logo from "../Logo";
import { FcGoogle } from "react-icons/fc";

interface GoogleLoginProps {
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({
  handleOnClick,
  loading,
}) => {
  return (
    <button
      onClick={handleOnClick}
      className="text-md flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gray-100 text-gray-500 active:bg-gray-200"
      disabled={loading ? true : false}
    >
      {loading ? (
        <Logo className="flex size-5 w-full justify-center" />
      ) : (
        <>
          <FcGoogle className="size-8" />
          <p>Continue with Google</p>
        </>
      )}
    </button>
  );
};

export default GoogleLogin;
