import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import { useLocation } from "react-router";
import LoadingPage from "../pages/Loading/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation()
//   console.log(location)

  if (loading) {
    return <LoadingPage></LoadingPage>;
  } else {
    if (user) {
      return children;
    } else {
      return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    }
  }
};

export default PrivateRoute;
