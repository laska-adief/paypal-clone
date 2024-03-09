import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { InputPasswordProps } from "../../types/type-auth";

const InputPassword: React.FC<InputPasswordProps> = ({ passwordError, passwordValue }) => {
  const [password, setPassword] = useState<string>("");
  const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePassword = event.target?.value;
    setPassword(valuePassword);
    passwordValue(valuePassword);
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
  return (
    <div className={`flex w-full ${password && isFocusPassword ? "border border-l-0 rounded border-light-gray" : ""}`}>
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
          isError={passwordError.length > 0}
          value={password}
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
  );
};
export default InputPassword;
