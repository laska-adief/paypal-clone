import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PaypalLogo from "./../../assets/images/paypal-logo-white.svg";
import BellIcon from "./../../assets/images/bell-icon.svg";
import SettingIcon from "./../../assets/images/setting-icon.svg";
import BarIcon from "./../../assets/images/bar-icon.svg";
import Button from "../common/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

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
  const navigate = useNavigate();
  const { getItemStorage, setItemStorage } = useLocalStorage("PaypalClone");
  const itemStorage = getItemStorage();
  const usersData = { users: itemStorage?.users };

  const handleLogout = () => {
    setItemStorage(usersData);
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-primary h-24">
        {/* Navbar Desktop */}
        <div className="container max-w-screen-xl max-xl:px-4 max-md:hidden h-full m-auto flex items-center justify-between">
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
            <Button type="button" variant="text" customClass="!text-white" onClick={handleLogout}>
              LOG OUT
            </Button>
          </div>
        </div>

        {/* Navbar Mobile */}
        <div className="hidden max-md:flex container h-full m-auto px-6 items-center justify-between">
          <div className="w-6">
            <img src={BarIcon} alt="Menu" />
          </div>
          <div className="w-8">
            <img src={PaypalLogo} alt="Paypal Logo" />
          </div>
          <NavLink to={"/notification"}>
            <div className="w-6">
              <img src={BellIcon} alt="Notification" className="fill-white" />
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
