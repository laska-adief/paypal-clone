export interface LoginFormProps {
  email: string;
  password: string;
  isShowPassword: boolean;
  isFocusPassword: boolean;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onShowHidePassword: (event: React.MouseEvent<HTMLButtonElement>, value: boolean) => void;
  onFocusInputPassword: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlurInputPassword: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}


export interface SignupStepProps {
  step: number;
  label: string;
  isCompleted: boolean;
}

export interface SignupFormProps {
  email: string;
  emailError: string[];
  phone: string;
  steps: SignupStepProps[];
  activeStep: number;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validStep: (event: React.MouseEvent<HTMLButtonElement>, step: number) => void;
  backStep: (step: number) => void;
}