import React from "react";
import MainButton from "./Navbar/MainButton";
import SideButton from "./Navbar/SideButton";
import { SiActigraph } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaChartBar } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Dummy from "./Navbar/Dummy";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const goto =
    (url: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      navigate(`/${url}`);
    };

  return (
    <div className="fixed bottom-0 left-1/2 z-10 flex h-16 w-[calc(100%+0.3rem)] -translate-x-1/2 justify-evenly rounded-t-lg border-t-2 border-black bg-[#EFC94C] shadow-lg">
      <MainButton handleOnClick={goto("gym")} />

      <SideButton
        Icon={SiActigraph}
        label="Split"
        handleOnClick={goto("split")}
      />
      <SideButton
        Icon={FaChartBar}
        label="Progress"
        handleOnClick={goto("progress")}
      />

      <Dummy />
      <Dummy />
      <Dummy />

      <SideButton Icon={GrNotes} label="Notes" handleOnClick={goto("notes")} />
      <SideButton
        Icon={CgProfile}
        label="Profile"
        handleOnClick={goto("profile")}
      />
    </div>
  );
};

export default Navbar;
