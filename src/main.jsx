import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../layouts/Root/Root';
import Home from '../pages/Home/Home';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import PageNotFound from '../pages/ErrorPages/PageNotFound';
import AllProducts from '../pages/AllProducts/AllProducts';
import MyExports from '../pages/MyExports/MyExports';
import MyImports from '../pages/MyImports/MyImports';
import AuthProvider from '../provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { 
        index: true, 
        Component: Home
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
        path: '/all-products',
        Component: AllProducts
      },
      {
        path: '/my-exports',
        Component: MyExports
      },
      {
        path: '/my-imports',
        Component: MyImports
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ]
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
