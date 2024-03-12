import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { User } from "../types/type-auth";
import * as Yup from "yup";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string[]>([]);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { getItemStorage, setItemStorage } = useLocalStorage("PaypalClone");

  const validationSchemaEmail = Yup.string().required("Email is required.").email("Please enter a valid email address.");
  const validationSchemaPassword = Yup.string().required("Enter your password.");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
    setEmailError([]);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePassword = event.target?.value;
    setPassword(valuePassword);
    setPasswordError([]);
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

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    validationLogin();
  };

  const validationLogin = async () => {
    try {
      await validationSchemaEmail.validate(email);
      await validationSchemaPassword.validate(password);
      login();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        if (error?.errors?.length) {
          if(error.message === 'Enter your password.') {
            setPasswordError(error.errors)
          } else {
            setEmailError(error.errors);
          }
        }
      }
    }
  };

  const login = () => {
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
        emailError={emailError}
        password={password}
        passwordError={passwordError}
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
