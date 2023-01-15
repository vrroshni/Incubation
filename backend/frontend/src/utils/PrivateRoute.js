import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {

  const { user } = useContext(AuthContext);
  console.log('private route works..........')
  return (
    !user ? <Navigate to="/login" /> : <Outlet />
  )
};
export default PrivateRoute;
