import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Layout from "./components/Layout/Layout";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import CustomLoader from "./components/CustomLoader/CustomLoader";
import ProceedOrder from "./components/ReviewOrder/ProceedOrder";
import Register from "./components/Register/Register";
import AuthProviders from "./ContextProvider/AuthProviders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "Orders",
        element: <Orders></Orders>,
        loader: CustomLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <ProceedOrder></ProceedOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
  </AuthProviders>
);
