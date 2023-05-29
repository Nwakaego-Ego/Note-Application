import { Outlet, Navigate } from "react-router";

const PrivateRoute = () => {
  let userData = JSON.parse(localStorage.getItem("user"));

  return userData ? <Outlet /> : <Navigate to={"/"} />;
};
export default PrivateRoute;
