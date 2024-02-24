import { BorderRadiusProp, WidthProp } from "../../types/type-utility";

interface ButtonProps {
  type: "submit" | "button";
  variant: "primary" | "secondary";
  borderRadius?: BorderRadiusProp;
  width?: WidthProp;
  onClick?: () => void;
  children: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  width: "w-fit",
  borderRadius: "rounded",
};

const Button: React.FC<ButtonProps> = ({ type, variant, borderRadius, width, onClick, children }) => {
  return (
    <button
      type={type}
      className={`button-${variant} ${borderRadius} ${width} hover:bg-dodger-blue transition-all duration-300 ease-in-out`}
      onClick={onClick}>
      {children}
    </button>
  );
};
Button.defaultProps = defaultProps;
export default Button;
