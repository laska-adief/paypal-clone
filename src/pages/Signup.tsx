import { useState } from "react";
import SignupForm from "../components/auth/SignupForm";
import { SignupStepProps } from "../types/type-auth";
import * as Yup from "yup";
import useLocalStorage from "../hooks/useLocalStorage";

const Signup = () => {
  const signupStepInitial: SignupStepProps[] = [
    { step: 1, label: "email", isCompleted: false },
    { step: 2, label: "phone", isCompleted: false },
    { step: 3, label: "password", isCompleted: false },
  ];

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string[]>([]);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const [steps, setSteps] = useState(signupStepInitial);
  const [activeSteps, setActiveSteps] = useState(1);

  const { getItemStorage, setItemStorage } = useLocalStorage("PaypalClone");

  const validationSchemaEmail = Yup.string().required("Email is required.").email("Please enter a valid email address.");
  const validationSchemaPhone = Yup.string().required("Phone is required.");
  const validationSchemaPassword = Yup.string()
    .required("Password is required.")
    .min(8, "Use 8 to 20 characters.")
    .max(20, "Do not use more than 20 characters.")
    .matches(/^(?!.*(.)\1{3}).*$/, "Do not use 4 or more consecutive repeated characters (like 1111).")
    .matches(/^(?=.*[0-9!@#%^])(?!.*(.)\1{3}).*$/, "At least 1 number or symbol (like !@#%^).");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
    setEmailError([]);
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePhone = event.target?.value.replace(/\D/g, "");
    setPhone(valuePhone);
    setPhoneError([]);
  };

  const onGetValuePassword = (valuePassword: string) => {
    setPassword(valuePassword);
  };

  const validStep = async (event: React.MouseEvent<HTMLButtonElement>, stepNumber: number) => {
    event.preventDefault();

    setEmailError([]);
    if (stepNumber === 1) {
      try {
        await validationSchemaEmail.validate(email);
        setEmailError([]);
        navigateStep("next", stepNumber);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          if (error?.errors?.length) {
            setEmailError(error.errors);
          }
        }
      }
    }

    setPhoneError([]);
    if (stepNumber === 2) {
      try {
        await validationSchemaPhone.validate(phone);
        setPhoneError([]);
        navigateStep("next", stepNumber);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          if (error?.errors?.length) {
            setPhoneError(error.errors);
          }
        }
      }
    }

    setPasswordError([]);
    if (stepNumber === 3) {
      try {
        await validationSchemaPassword.validate(password);
        setPasswordError([]);
        signup();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          if (error?.errors?.length) {
            setPasswordError(error.errors);
          }
        }
      }
    }
  };

  const backStep = (stepNumber: number) => {
    navigateStep("back", stepNumber);
  };

  const navigateStep = (navigation: "next" | "back", stepNumber: number) => {
    setSteps((prevStep) => {
      return prevStep.map((step) => {
        if (step.step === stepNumber) {
          return { ...step, isCompleted: navigation === "next" ? true : false };
        }
        return step;
      });
    });
    if (navigation === "next") {
      setActiveSteps((prevStep) => prevStep + 1);
    } else {
      setActiveSteps((prevStep) => prevStep - 1);
    }
  };

  const signup = () => {
    const itemStorage = getItemStorage();
    const payload = {
      email,
      phone,
      password,
    };

    const users = [];
    if (itemStorage?.length) {
      users.push(...itemStorage, { user: payload });
    } else {
      users.push({ user: payload });
    }
    setItemStorage(users);
  };

  return (
    <SignupForm
      email={email}
      emailError={emailError}
      phone={phone}
      phoneError={phoneError}
      password={password}
      passwordError={passwordError}
      steps={steps}
      activeStep={activeSteps}
      onChangeEmail={onChangeEmail}
      onChangePhone={onChangePhone}
      setPasswordError={setPasswordError}
      onGetValuePassword={onGetValuePassword}
      validStep={validStep}
      backStep={backStep}
    />
  );
};
export default Signup;
