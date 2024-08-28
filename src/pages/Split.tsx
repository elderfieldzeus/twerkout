import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import CurrentSplitButton from "../components/Split/CurrentSplitButton";
import PastSplits from "../components/Split/PastSplits";
import { User } from "firebase/auth";
import { Split as Splits } from "./Split/NewSplit";
import { auth } from "../utilities/firebase";
import { getCurrentSplit } from "../utilities/get";
import LoadingScreen from "../components/LoadingScreen";

interface SplitProps {
  setColor: () => void;
}

const Split: React.FC<SplitProps> = ({ setColor }) => {
  const defaultSplit: Splits = {
    name: "",
    days: [{
      name: "",
      exercises: []
    }],
  }

  const [user, setUser] = useState<User | null>(null);
  const [split, setSplit] = useState<Splits>(defaultSplit);
  const [loading, setLoading] = useState<boolean>(true);

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
          if(currentSplit) {
            const newSplit: Splits = {
              name: currentSplit.data.name,
              days: currentSplit.data.days
            }

            setSplit(newSplit);
          }
        }
      }
      catch(e) {
        console.error(e);
      }
    }

    fetchSplit();
  }, [user]);

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main header="Split">
      {
        loading
        ?
        <LoadingScreen />
        :
        <>
          <CurrentSplitButton name = {split ? split.name : null} />
          <PastSplits />
        </>
      }
    </Main>
  );
};

export default Split;
