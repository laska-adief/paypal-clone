interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  maxLength?: number;
  isError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, maxLength, isError, onChange, onFocus, onBlur }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-3 py-5 border border-light-gray rounded focus:border-none focus:outline-dodger-blue focus:shadow-input-focus ${
          isError && "border-input-border-error focus:outline-0 focus:shadow-input-focus-error"
        }`}
      />
    </>
  );
};
export default Input;
