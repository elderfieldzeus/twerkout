import React, { useEffect } from "react";
import Main from "../components/Main";
import BeginWorkout from "../components/Workout/BeginWorkout";
import { useNavigate } from "react-router-dom";

interface WorkoutProps {
  setColor: () => void;
}

const Workout: React.FC<WorkoutProps> = ({ setColor }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setColor();
  }, [setColor]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/gym/begin');
  }

  return (
  <Main header="Workout">
    <BeginWorkout handleClick={handleClick}/>
  </Main>
);
};

export default Workout;
