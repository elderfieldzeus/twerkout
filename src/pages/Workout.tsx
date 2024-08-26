import React, { useEffect } from "react";
import Main from "../components/Main";

interface WorkoutProps {
  setColor: () => void;
}

const Workout: React.FC<WorkoutProps> = ({ setColor }) => {

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
  <Main header="Workout">
    <div className="w-full flex flex-col justify-center items-center mt-24">
        <img src="/images/cute_chicken.png" alt="Cute Chicken" className="size-32 z-10 translate-x-2"/>
        <button onClick={alert} className="relative">
          <p className="font-coffee text-xl text-center absolute z-10 top-10 left-1/2 -translate-x-1/2">Begin<br />Workout</p>
          <img src="/images/egg.png" alt="Egg" className="size-64 -mt-16 rounded-full"/>
        </button>
    </div>
  </Main>
);
};

export default Workout;
