import { Link } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import Text from "../common/Text";
import PaypalLogo from "./../../assets/images/paypal-logo.svg";
import { LoginFormProps } from "../../types/type-auth";

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  emailError,
  password,
  passwordError,
  isShowPassword,
  isFocusPassword,
  onChangeEmail,
  onChangePassword,
  onShowHidePassword,
  onFocusInputPassword,
  onBlurInputPassword,
  onSubmit,
}) => {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <div className="w-[460px] mx-auto p-form border border-muted-gray max-md:border-none max-md:w-full max-sm:min-w-max rounded-xl">
          <div className="max-w-[40px] mx-auto mb-10">
            <img src={PaypalLogo} alt="Paypal Logo" />
          </div>
          <div className="flex flex-col gap-4 text-lg">
            <div>
              <Input type="email" placeholder="Email" value={email} onChange={onChangeEmail} isError={emailError.length > 0} />
              {emailError?.length > 0 && (
                <Text size="text-sm" weight="font-medium" customClass="text-error w-full mt-2 ml-4">
                  {...emailError}
                </Text>
              )}
            </div>
            <div>
              <div className={`flex ${password && isFocusPassword ? "border border-l-0 rounded border-light-gray" : ""}`}>
                {isShowPassword ? (
                  <Input
                    type="text"
                    placeholder="Enter your password"
                    value={password}
                    isError={passwordError.length > 0}
                    onChange={onChangePassword}
                    onFocus={onFocusInputPassword}
                    onBlur={onBlurInputPassword}
                  />
                ) : (
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    isError={passwordError.length > 0}
                    onChange={onChangePassword}
                    onFocus={onFocusInputPassword}
                    onBlur={onBlurInputPassword}
                  />
                )}
                {password && isFocusPassword ? (
                  <div>
                    <Button
                      type="button"
                      variant="text"
                      size="text-xs"
                      customClass="h-full px-1 font-bold min-w-[40px]"
                      onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => onShowHidePassword(e, !isShowPassword)}>
                      {isShowPassword ? "Hide" : "Show"}
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {passwordError?.length > 0 && (
                <Text size="text-sm" weight="font-medium" customClass="text-error w-full mt-2 ml-4">
                  {...passwordError}
                </Text>
              )}
            </div>

            <Text isLink={true} href="/forgot-password" size="text-lg" weight="font-bold" customClass="mb-1">
              Forgot Password?
            </Text>
            <Button
              type="submit"
              variant="primary"
              width="w-full"
              borderRadius="rounded-full"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => onSubmit(event)}>
              Log In
            </Button>
            <div className="relative h-4 text-center border-t border-separator mt-4 mb-2">
              <Text customClass="relative inline bg-white top-[-18px] px-2 text-dark-gray">or</Text>
            </div>
            <Link to={"/signup"}>
              <Button type="button" variant="secondary" width="w-full" borderRadius="rounded-full">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
