import { Outlet, useNavigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
function App() {
  const { getItemStorage } = useLocalStorage("PaypalClone");
  const authStorage = getItemStorage();
  const authUser = authStorage?.loggedUser;
  const navigate = useNavigate();

  const [isNavigated, setIsNavigated] = useState(false);

  useEffect(() => {
    if (!isNavigated) {
      if (!authUser) {
        navigate("/login");
      }
      setIsNavigated(true);
    }
  }, [authUser, navigate, isNavigated]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
