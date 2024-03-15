import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { ProtectedRoute, ProtectedRouteLoggedIn } from "./components/auth/ProtectedRoute.tsx";
import Summary from "./pages/Summary.tsx";

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
        element: <Signup />,
      },
      {
        path: "/myaccount/summary",
        element: (
          <ProtectedRoute>
            <Summary />
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
