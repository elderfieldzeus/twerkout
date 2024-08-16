import React from "react";
import SignoutButton from "./YesOrNoButton";
import { useNavigate } from "react-router-dom";
import { signout } from "../../utilities/auth";

const SignoutSection: React.FC = () => {
  const navigate = useNavigate();
  const handleSignout: React.MouseEventHandler<HTMLButtonElement> = () => {
    async function signoutProcess() {
      await signout();
      navigate("/");
    }

    signoutProcess();
  };

  return (
    <div className="my-16 flex justify-center">
      <div className="flex flex-col items-center gap-2 rounded-[2.5rem] border-2 border-black bg-yellow-400 px-10 py-6 font-coffee shadow-xl">
        <p className="text-3xl">Signout?</p>
        <div className="flex gap-5 text-xl">
          <SignoutButton handleOnClick={handleSignout} type="red" label="YES" />
        </div>
      </div>
    </div>
  );
};

export default SignoutSection;
