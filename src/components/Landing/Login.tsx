import React, { useState } from "react";
import Inline from "../Inline";
import Button from "../Button";
import Input from "../Input";
import { signinEmail, signinGoogle } from "../../utilities/auth";
import Error from "../Error";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import Or from "./Or";

interface LoginProps {
  className: string;
  changeForm: () => void;
}

const Login: React.FC<LoginProps> = ({ className, changeForm }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setPassword(e.target.value);
  };

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    setError(null);

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    async function signinProcess() {
      const res = await signinEmail(email, password);

      if (res.status === true) {
        setError(null);
        navigate("/gym");
      } else {
        if (res.message !== undefined) {
          setError(res.message);
        }
      }
      setLoading(false);
    }

    signinProcess();
  };

  const handleGoogleLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    setError(null);
    setLoading(true);

    async function googleProcess() {
      const res = await signinGoogle();

      if (res.status === true) {
        navigate("/gym");
      } else {
        if (res.message !== undefined) {
          setError(res.message);
        }
      }
      setLoading(false);
    }

    googleProcess();
  };

  return (
    <div className={className}>
      <p className="mb-5 font-coffee text-4xl">Welcome, back!</p>

      {error !== null && <Error message={error} />}

      <Input
        type="email"
        placeholder="Email"
        value={email}
        handleOnChange={handleChangeEmail}
        required={true}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        handleOnChange={handleChangePassword}
        required={true}
      />

      <Button handleOnClick={handleLogin} loading={loading}>
        Login!
      </Button>

      <Inline>
        <p>Don't have an account?</p>
        <button
          onClick={changeForm}
          className="text-yellow-500 underline active:text-yellow-500"
        >
          Sign up.
        </button>
      </Inline>

      <Or />

      <GoogleLogin handleOnClick={handleGoogleLogin} />
    </div>
  );
};

export default Login;
