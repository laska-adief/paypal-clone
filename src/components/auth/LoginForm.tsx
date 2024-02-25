import Button from "../common/Button";
import Input from "../common/Input";
import Text from "../common/Text";
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
          <form onSubmit={onSubmit} className="flex flex-col gap-4 text-lg">
            <Input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
            <Input type="password" placeholder="Enter your password" value={password} onChange={onChangePassword} />
            <Text isLink={true} href="/forgot-password" size="text-lg" weight="font-bold" customClass="mb-1">
              Forgot Password?
            </Text>
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
