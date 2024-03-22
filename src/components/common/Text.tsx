import { NavLink } from "react-router-dom";
import { FontSizeProp, FontWeightProp } from "../../types/type-utility";

interface TextProps {
  size?: FontSizeProp;
  weight?: FontWeightProp;
  isLink?: boolean;
  href?: string;
  customClass?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<TextProps> = {
  size: "text-base",
  weight: "font-normal",
  isLink: false,
};

const Text: React.FC<TextProps> = ({ size, weight, isLink, href, customClass, children }) => {
  return isLink ? (
    <NavLink to={href ? href : "/"} className={`${size} ${weight} ${customClass} text-link`}>
      {children}
    </NavLink>
  ) : (
    <p className={`${size} ${weight} ${customClass}`}>{children}</p>
  );
};

Text.defaultProps = defaultProps;
export default Text;
