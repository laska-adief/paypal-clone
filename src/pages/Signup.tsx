import { useState } from "react";
import SignupForm from "../components/auth/SignupForm";
import { SignupStepProps } from "../types/type-auth";
import * as Yup from "yup";

const Signup = () => {
  const signupStepInitial: SignupStepProps[] = [
    { step: 1, label: "email", isCompleted: false },
    { step: 2, label: "phone", isCompleted: false },
  ];

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [steps, setSteps] = useState(signupStepInitial);
  const [activeSteps, setActiveSteps] = useState(1);

  const validationSchemaEmail = Yup.string().required("Email is required.").email("Please enter a valid email address.");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePhone = event.target?.value.replace(/\D/g, "");
    setPhone(valuePhone);
  };

  const validStep = async (event: React.MouseEvent<HTMLButtonElement>, stepNumber: number) => {
    event.preventDefault();

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

  return (
    <SignupForm
      email={email}
      emailError={emailError}
      phone={phone}
      steps={steps}
      activeStep={activeSteps}
      onChangeEmail={onChangeEmail}
      onChangePhone={onChangePhone}
      validStep={validStep}
      backStep={backStep}
    />
  );
};
export default Signup;
