import React, { useState } from "react";
import Inline from "../Inline";
import Button from "../Button";
import Input from "../Input";

interface LoginProps {
    className: string;
    changeForm: () => void
}

const Login: React.FC<LoginProps> = ({className, changeForm}) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className = {className}>
            <p className="font-coffee text-4xl mb-5">Welcome, back!</p>

            <Input placeholder="Username" value = {username} handleOnChange={handleChangeUsername} required = {true}/>
            <Input type="password" placeholder="Password" value = {password} handleOnChange={handleChangePassword} required = {true}/>

            <Button>Login!</Button>

            <Inline>
                <p>Don't have an account?</p>
                <button onClick={changeForm} className="text-yellow-500 underline active:text-yellow-500">Sign up.</button>
            </Inline>
        </div>
    )
}

export default Login;