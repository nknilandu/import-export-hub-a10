import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PageNotFound from "../pages/ErrorPages/PageNotFound";
import AllProducts from "../pages/AllProducts/AllProducts";
import MyExports from "../pages/MyExports/MyExports";
import MyImports from "../pages/MyImports/MyImports";
import AuthProvider from "../provider/AuthProvider";
import AddExport from "../pages/AddExport/AddExport";
import PrivateRoute from "../provider/PrivateRoute";
import AppNotFound from "../pages/ErrorPages/AppNotFound";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateExport from "../pages/UpdateExport/UpdateExport";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <AppNotFound></AppNotFound>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
          { path: "forgotPassword", Component: ForgotPassword },
        ],
      },
      {
        path: "/all-products",
        Component: AllProducts,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateExport></UpdateExport>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-exports",
        element: (
          <PrivateRoute>
            <MyExports></MyExports>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-imports",
        element: (
          <PrivateRoute>
            <MyImports></MyImports>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-export",
        element: (
          <PrivateRoute>
            <AddExport></AddExport>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-export",
        element: (
          <PrivateRoute>
            <AddExport></AddExport>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
