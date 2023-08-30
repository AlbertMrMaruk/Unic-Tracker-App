import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Navbar from "./Navbar";
import spinner from "../assets/807.gif";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
      <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10 shadow-inner py-[20%]">
        <img className="m-auto w-[128px]" src={spinner} />
      </div>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
