import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { User } from "../types/type-auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { getItemStorage, setItemStorage } = useLocalStorage("PaypalClone");

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

    const itemStorage = getItemStorage();
    const registredUsers = itemStorage?.users;
    if (registredUsers?.length) {
      const findRegisteredUser = registredUsers.find((item: User) => item.user.email === email && item.user.password === password);
      if (findRegisteredUser) {
        console.log("logged in", findRegisteredUser);
        setItemStorage({ ...itemStorage, loggedUser: findRegisteredUser });
      } else {
        console.log("invalid user");
      }
    } else {
      console.log("invalid user no users");
    }
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
