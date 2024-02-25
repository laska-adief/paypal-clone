import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePassword = event.target?.value;
    setPassword(valuePassword);
  };

  const onShowHidePassword = (event: React.MouseEvent<HTMLButtonElement>, value: boolean) => {
    if (event.target === event.currentTarget) {
      event.preventDefault();
      setIsFocusPassword(true);
      setIsShowPassword(value);
    }
  };

  const onFocusInputPassword = (event: React.FocusEvent<HTMLInputElement>) => {
    const isFocus = document.activeElement === event.target;
    setIsFocusPassword(isFocus);
  };

  const onBlurInputPassword = (event: React.FocusEvent<HTMLInputElement>) => {
    const isFocus = document.activeElement === event.target;
    setIsFocusPassword(isFocus);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        isShowPassword={isShowPassword}
        isFocusPassword={isFocusPassword}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onShowHidePassword={onShowHidePassword}
        onFocusInputPassword={onFocusInputPassword}
        onBlurInputPassword={onBlurInputPassword}
        onSubmit={onSubmit}
      />
    </>
  );
};
export default Login;
