interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        className="w-full p-3 border border-light-gray rounded focus:outline-dodger-blue focus:shadow-sm focus:shadow-dodger-blue"
        placeholder={placeholder}
      />
    </>
  );
};
export default Input;
