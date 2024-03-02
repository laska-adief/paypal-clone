import { useState } from "react";
import SignupForm from "../components/auth/SignupForm";
import { SignupStepProps } from "../types/type-auth";

const Signup = () => {
  const signupStepInitial: SignupStepProps[] = [
    { step: 1, label: "email", isCompleted: false },
    { step: 2, label: "phone", isCompleted: false },
  ];

  const [email, setEmail] = useState("");
  const [steps, setSteps] = useState(signupStepInitial);
  const [activeSteps, setActiveSteps] = useState(1);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target?.value;
    setEmail(valueEmail);
  };

  const validStep = (stepNumber: number) => {
    setSteps((prevStep) => {
      return prevStep.map((step) => {
        if (step.step === stepNumber) {
          return { ...step, isCompleted: true };
        }
        return step;
      });
    });
    setActiveSteps((prevStep) => prevStep + 1);
  };

  const backStep = (stepNumber: number) => {
    setSteps((prevStep) => {
      return prevStep.map((step) => {
        if (step.step === stepNumber) {
          return { ...step, isCompleted: false };
        }
        return step;
      });
    });
    setActiveSteps((prevStep) => prevStep - 1);
  };

  return (
    <SignupForm
      email={email}
      steps={steps}
      activeStep={activeSteps}
      onChangeEmail={onChangeEmail}
      validStep={validStep}
      backStep={backStep}
    />
  );
};
export default Signup;