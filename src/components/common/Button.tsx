import { BorderRadiusProp, FontSizeProp, WidthProp } from "../../types/type-utility";

interface ButtonProps {
  type: "submit" | "button";
  variant: "primary" | "secondary" | "text";
  size?: FontSizeProp;
  borderRadius?: BorderRadiusProp;
  width?: WidthProp;
  customClass?: string;
  onClick?: () => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  width: "w-fit",
  borderRadius: "rounded",
  size: "text-base",
};

const Button: React.FC<ButtonProps> = ({ type, variant, size, borderRadius, width, customClass, onClick, onMouseDown, children }) => {
  return (
    <button
      type={type}
      className={`button-${variant} ${borderRadius} ${width} ${size} ${customClass}`}
      onClick={onClick}
      onMouseDown={onMouseDown}>
      {children}
    </button>
  );
};
Button.defaultProps = defaultProps;
export default Button;
