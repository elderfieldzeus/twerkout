import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

interface MainProps {
  children?: React.ReactNode;
  header?: string;
  Extra?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children, header, Extra }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="w-full bg-white flex justify-center">
      <Navbar />
      <p className="fixed top-0 flex h-14 w-full items-center bg-white px-5 font-coffee text-2xl z-30">
        {header}
      </p>
      {Extra}
      <main className="min-h-screen max-w-[30rem] w-full px-5 pt-16 pb-24">{children}</main>
    </div>
  );
};

export default Main;
