import React, { useState } from "react";
import Inline from "../Inline";
import Button from "../Button";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

interface SignupProps {
    className: string;
    changeForm: () => void;
}

const Signup: React.FC<SignupProps> = ({className, changeForm}) => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [cpassword, setCPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeCPassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setCPassword(e.target.value);
    }

    const handleSignUp: React.MouseEventHandler<HTMLButtonElement> = () => {
        navigate('/gym');
    }

    return (
        <div className = {className}>
            <p className="font-coffee text-4xl mb-5">Hey, stranger!</p>

            <Input type="email" placeholder="Email" value = {email} handleOnChange={handleChangeEmail} required = {true}/>

            <Input placeholder="Username" value = {username} handleOnChange={handleChangeUsername} required = {true}/>

            <Input type="password" placeholder="Password" value = {password} handleOnChange={handleChangePassword} required = {true}/>

            <Input type="password" placeholder="Confirm Password" value = {cpassword} handleOnChange={handleChangeCPassword} required = {true}/>

            <Button handleOnClick={handleSignUp}>Sign up!</Button>

            <Inline>
                <p>Have an account?</p>
                <button onClick={changeForm} className="text-yellow-500 underline active:text-yellow-500">Login.</button>
            </Inline>
        </div>
    )
}

export default Signup;