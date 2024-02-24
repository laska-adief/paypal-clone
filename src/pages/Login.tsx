import { useState } from "react";

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

  return <></>;
};
export default Login;
