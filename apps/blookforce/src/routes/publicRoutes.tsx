import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useReduxHooks";

export default function PublicRoute() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  const authSpecificRoutes = [
    "/login",
    "/login/spaceOwnerLogin",
    "/registration/SpaceOwnerRegistration",
  ];

  if (isAuthenticated && authSpecificRoutes.includes(location.pathname)) {
    switch (user?.role) {
      case "space-owner":
        return <Navigate to="/dashboard/space-owner" replace />;
      case "admin":
        return <Navigate to="/dashboard/admin" replace />;
      case "advertiser":
        return <Navigate to="/dashboard/advertiser" replace />;
      default:
        return <Navigate to="/dashboard/space-owner" replace />;
    }
  }
  return <Outlet />;
}
