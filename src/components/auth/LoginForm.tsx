import Button from "../common/Button";
import Input from "../common/Input";

interface LoginForm {
  email: string;
  password: string;
  onChangeEmail: () => void;
  onChangePassword: () => void;
  onSubmit: () => void;
}

const LoginForm: React.FC<LoginForm> = ({ email, password, onChangeEmail, onChangePassword, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
        <Input type="password" placeholder="Enter your password" value={password} onChange={onChangePassword} />
        <Button type="submit" variant="primary" width="w-full" borderRadius="rounded-full">
          Log In
        </Button>
      </form>
    </>
  );
};
export default LoginForm;
