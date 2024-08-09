import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Landing/Form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

interface LandingProps {
    setColor: () => void;
}

const Landing: React.FC<LandingProps> = ({setColor}) => {
    const [active, setActive] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        setColor();
        setTimeout(() => {
            setActive(true);
        }, 1500);
    }, [setColor]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if(user) {
            navigate('/gym');
          }
        })
      }, [navigate]);

    return (
        <div className={`${active ? "justify-between pt-2" : "justify-center"} min-h-screen flex flex-col items-center bg-yellow-400 relative`}>
            <div className="transition-all">
                <Logo className="size-28 select-none"/>
                <p className="font-coffee text-2xl">Twerk-out!</p>
            </div>
            <Form active = {active}/>
        </div>
    );
}

export default Landing;