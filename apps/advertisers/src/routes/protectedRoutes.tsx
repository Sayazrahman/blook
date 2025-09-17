import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useReduxHooks";

interface Props {
  allowedRoles: string[];
}

export default function ProtectedRoute({ allowedRoles }: Props) {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login/spaceOwnerLogin" replace />;
  }
  if (!allowedRoles.includes(user?.role || "")) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
}
