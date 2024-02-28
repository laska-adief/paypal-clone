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