import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePassword = event.target?.value;
    setPassword(valuePassword);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <LoginForm email={email} password={password} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} onSubmit={onSubmit} />
    </>
  );
};
export default Login;
