import React, { useEffect, useState } from "react";
import Main from "../../components/Main";
import SplitButton from "../../components/Split/SplitButton";
import { useNavigate } from "react-router-dom";
import SplitContainer from "../../components/Split/SplitContainer";
import CurrentSplitContent from "../../components/Split/CurrentSplitContent";
import { MdAddCircle } from "react-icons/md";
import { Day, Split } from "./NewSplit";
import { auth } from "../../utilities/firebase";
import { getCurrentSplit } from "../../utilities/get";
import { User } from "firebase/auth";
import LoadingScreen from "../../components/LoadingScreen";

interface CurrentSplitProps {
  setColor: () => void;
}

const CurrentSplit: React.FC<CurrentSplitProps> = ({ setColor }) => {  
  const defaultSplit: Split = {
    name: "",
    days: [{
      name: "",
      workouts: []
    }],
  }

  const [user, setUser] = useState<User | null>(null);
  const [split, setSplit] = useState<Split>(defaultSplit);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setColor();
  }, [setColor]);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  useEffect(() => {
    const fetchSplit = async () => {
      try {
        if(user) {
          const currentSplit = await getCurrentSplit(user.uid);
          setLoading(false);
          if(currentSplit && currentSplit[0].data) {
            const newSplit: Split = {
              name: currentSplit[0].data.name as string,
              days: currentSplit[0].data.days as Day[]
            }

            setSplit(newSplit);
            console.log(currentSplit);
          }
        }
      }
      catch(e) {
        console.error(e);
      }
    }

    fetchSplit();
  }, [user]);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate("/split/new");
  }

  return (
    <Main
      header="Your Split"
    >
      {
      loading 
      ? 
      <LoadingScreen /> 
      :
      <>
        <SplitContainer>
          <CurrentSplitContent split = {split} />
        </SplitContainer>
        <SplitButton
          content="Create New Split"
          handleOpen = {handleOpen}
          Icon = {MdAddCircle}
        />
      </>
      }
    </Main>
  );
};

export default CurrentSplit;
