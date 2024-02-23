import { BorderRadiusProp, WidthProp } from "../../types/type-utility";

interface ButtonProps {
  type: "submit" | "button";
  variant: "primary" | "secondary";
  borderRadius?: BorderRadiusProp;
  width?: WidthProp;
  children: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  width: "w-fit",
  borderRadius: "rounded",
};

const Button: React.FC<ButtonProps> = ({ type, variant, borderRadius, width, children }) => {
  return (
    <button type={type} className={`button-${variant} ${borderRadius} ${width}`}>
      {children}
    </button>
  );
};
Button.defaultProps = defaultProps;
export default Button;
