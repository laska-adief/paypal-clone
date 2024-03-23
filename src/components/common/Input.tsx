import { useEffect, useRef } from "react";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  maxLength?: number;
  isError?: boolean;
  customClass?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, maxLength, isError, customClass, onChange, onFocus, onBlur }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isError && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isError]);

  return (
    <>
      <input
        ref={inputRef}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-3 py-5 border border-light-gray rounded focus:border-none focus:outline-dodger-blue focus:shadow-input-focus ${
          isError && "border-input-border-error focus:outline-0 focus:shadow-input-focus-error"
        } ${customClass}`}
      />
    </>
  );
};
export default Input;
