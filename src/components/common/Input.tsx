interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="w-full p-3 border border-light-gray rounded focus:outline-dodger-blue focus:shadow-sm focus:shadow-dodger-blue"
      />
    </>
  );
};
export default Input;
