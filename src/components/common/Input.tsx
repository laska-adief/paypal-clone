interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, onFocus, onBlur }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full px-3 py-5 border border-light-gray rounded focus:border-none focus:outline-dodger-blue focus:shadow-input-focus"
      />
    </>
  );
};
export default Input;
