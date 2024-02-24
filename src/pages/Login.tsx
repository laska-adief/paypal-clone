import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
  };

  return <></>;
};
export default Login;
