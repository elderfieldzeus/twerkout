import React, { useState } from "react";
import Inline from "../Inline";
import Button from "../Button";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { signup } from "../../utilities/auth";
import Error from "../Error";

interface SignupProps {
  className: string;
  changeForm: () => void;
}

const Signup: React.FC<SignupProps> = ({ className, changeForm }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setPassword(e.target.value);
  };

  const handleChangeCPassword: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setCPassword(e.target.value);
  };

  const handleSignUp: React.MouseEventHandler<HTMLButtonElement> = () => {
    setError(null);

    if (!email || !password || !cpassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== cpassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    async function signupProcess() {
      const res = await signup(email, password);

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

    signupProcess();
  };

  return (
    <div className={className}>
      <p className="mb-5 font-coffee text-4xl">Hey, stranger!</p>

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

      <Input
        type="password"
        placeholder="Confirm Password"
        value={cpassword}
        handleOnChange={handleChangeCPassword}
        required={true}
      />

      <Button handleOnClick={handleSignUp} loading={loading}>
        Sign up!
      </Button>

      <Inline>
        <p>Already have an account?</p>
        <button
          onClick={changeForm}
          className="text-yellow-500 underline active:text-yellow-500"
        >
          Login.
        </button>
      </Inline>
    </div>
  );
};

export default Signup;
