import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

interface FormProps {
    active: boolean;
}

const Form: React.FC<FormProps> = ({active}) => {
    const [appear, setAppear] = useState(false);
    const [signUp, setSignup] = useState(false);

    const changeForm = (): void => {
        setSignup((prev) => !prev);
    }

    useEffect(() => {
        if(active) {
            setTimeout(() => {
                setAppear(true);
            }, 500);
        }
    }, [active]);

    const formBodyClass = `${appear ? "opacity-100" : "opacity-0"} transition-all duration-500 pt-10 px-5 flex flex-col items-center font-medium gap-2`;

    return (
        <div className={`${active ? "h-[80vh]" : "h-0"} bg-white w-full shadow-xl rounded-t-xl transition-all duration-500`}>
            {signUp || <Login className={formBodyClass} changeForm = {changeForm}/>}
            {signUp && <Signup className={formBodyClass} changeForm = {changeForm}/>}
        </div>
    )
}

export default Form;