import { PropsWithChildren, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const { getItemStorage } = useLocalStorage("PaypalClone");
  const authStorage = getItemStorage();
  const authUser = authStorage?.loggedUser;
  return authUser;
};

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const authUser = useAuthentication();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser?.user) {
      navigate("/login", { replace: true });
    }
  }, [authUser, navigate]);
  return authUser?.user ? children : null;
};

export { ProtectedRoute };
