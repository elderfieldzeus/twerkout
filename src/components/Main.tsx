import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

interface MainProps {
  children?: React.ReactNode;
  header: string;
  Extra?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children, header, Extra }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <p className="fixed top-0 flex h-14 w-full items-center bg-white px-5 font-coffee text-2xl">
        {header}
      </p>
      {Extra}
      <main className="h-full w-full px-5 pt-16 pb-20">{children}</main>
    </div>
  );
};

export default Main;
