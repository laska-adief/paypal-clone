interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-3 py-5 border border-light-gray rounded focus:outline-dodger-blue focus:shadow-input-focus"
      />
    </>
  );
};
export default Input;
