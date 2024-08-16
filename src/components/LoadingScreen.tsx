import React from "react";
import Logo from "./Logo";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Logo className="-mt-[7.5rem] size-28 select-none" />
    </div>
  );
};

export default LoadingScreen;
