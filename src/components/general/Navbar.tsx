import { NavLink, useLocation } from "react-router-dom";
import PaypalLogo from "./../../assets/images/paypal-logo-white.svg";
import BellIcon from "./../../assets/images/bell-icon.svg";
import SettingIcon from "./../../assets/images/setting-icon.svg";
import Button from "../common/Button";

const Navbar = () => {
  const links = [
    {
      label: "Home",
      href: "/myaccount/summary",
    },
    {
      label: "Send and Request",
      href: "/myaccount/transfer",
    },
    {
      label: "Wallet",
      href: "/myaccount/money",
    },
    {
      label: "Activity",
      href: "/myaccount/activities",
    },
    {
      label: "Help",
      href: "/help",
    },
  ];

  const locationPath = useLocation();
  const isActiveRoute = (path: string) => locationPath.pathname === path;

  console.log("location.path", locationPath);
  return (
    <nav className="bg-primary h-24">
      <div className="container max-w-screen-xl max-xl:px-4 h-full m-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8">
            <img src={PaypalLogo} alt="Paypal Logo" />
          </div>
          <div className="flex items-center">
            {links &&
              links.map((link: { label: string; href: string }, index: number) => (
                <NavLink
                  key={index}
                  to={link.href}
                  className={`min-h-12 px-4 grid place-items-center text-white ml-2 rounded-full transition-all duration-300 border border-primary hover:border hover:border-link-hovered ${
                    isActiveRoute(link.href) && "border-primary bg-link-active"
                  }`}>
                  <span>{link.label}</span>
                </NavLink>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-white fill-white">
          <NavLink to={"/notification"}>
            <div className="w-6">
              <img src={BellIcon} alt="Notification" className="fill-white" />
            </div>
          </NavLink>
          <NavLink to={"/setting"}>
            <div className="w-6">
              <img src={SettingIcon} alt="Setting" />
            </div>
          </NavLink>
          <Button type="button" variant="text" customClass="!text-white">
            LOG OUT
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
