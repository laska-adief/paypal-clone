import Button from "../common/Button";
import Input from "../common/Input";
import PaypalLogo from "./../../assets/images/paypal-logo.svg";

interface LoginForm {
  email: string;
  password: string;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginForm> = ({ email, password, onChangeEmail, onChangePassword, onSubmit }) => {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <div className="w-[460px] mx-auto p-form border border-muted-gray rounded-xl">
          <div className="max-w-[40px] mx-auto mb-10">
            <img src={PaypalLogo} alt="Paypal Logo" />
          </div>
          <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
            <Input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
            <Input type="password" placeholder="Enter your password" value={password} onChange={onChangePassword} />
            <Button type="submit" variant="primary" width="w-full" borderRadius="rounded-full">
              Log In
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
