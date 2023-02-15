import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext/logInContext";

export default function PublicRoute() {
  const { authorization } = useAuthContext();
  const location = useLocation();
    const user = window.localStorage.getItem("MY_AUTH_APP")
  if (authorization.email) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
