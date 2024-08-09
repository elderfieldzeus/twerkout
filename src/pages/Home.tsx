import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Home/Form";

interface HomeProps {
    setColor: () => void;
}

const Home: React.FC<HomeProps> = ({setColor}) => {
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        setColor();
        setTimeout(() => {
            setActive(true);
        }, 2000);
    }, []);

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

export default Home;