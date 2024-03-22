import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { ProtectedRoute, ProtectedRouteLoggedIn } from "./components/auth/ProtectedRoute.tsx";
import Summary from "./pages/Summary.tsx";
import Activity from "./pages/Activity.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <ProtectedRouteLoggedIn>
            <Login />
          </ProtectedRouteLoggedIn>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRouteLoggedIn>
            <Signup />
          </ProtectedRouteLoggedIn>
        ),
      },
      {
        path: "/myaccount/summary",
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myaccount/activities",
        element: (
          <ProtectedRoute>
            <Activity />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
