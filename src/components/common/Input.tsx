import { useEffect, useRef } from "react";

interface InputProps {
  type: "text" | "email" | "password" | "radio";
  placeholder?: string;
  value: string;
  id?: string;
  name?: string;
  maxLength?: number;
  isError?: boolean;
  customClass?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  id,
  name,
  maxLength,
  isError,
  customClass,
  checked,
  onChange,
  onFocus,
  onBlur,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const isUsingFocus = type === "radio" ? false : true;

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
        id={id}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        checked={checked}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-3 py-5 border border-light-gray rounded focus:border-none focus:outline-dodger-blue ${
          isUsingFocus && "focus:shadow-input-focus"
        } ${isError && "border-input-border-error focus:outline-0 focus:shadow-input-focus-error"} ${customClass}`}
      />
    </>
  );
};
export default Input;
