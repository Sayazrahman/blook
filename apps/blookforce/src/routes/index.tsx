import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages/homePage";
import PublicRoute from "./publicRoutes";
import PublicLayout from "../layouts/publicLayout";
import ProtectedRoute from "./protectedRoutes";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { login } from "@blook/store/authSlice";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [{ path: "/", element: <LandingPage /> }],
      },
    ],
  },
  {
    element: "",
    children: [
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          // { path: "/dashboard/admin", element: <AdminDashboard /> }
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["advertiser"]} />,
        children: [
          // { path: "/dashboard/advertiser", element: <AdvertiserDashboard /> },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["space-owner"]} />,
        children: [],
      },
    ],
  },
  { path: "/unauthorized", element: <h1>Unauthorized</h1> },
]);

export default function AppRoutes() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeAuth = () => {
      const token = localStorage.getItem("authToken");
      const userData = localStorage.getItem("userData");

      if (token && userData) {
        try {
          const user = JSON.parse(userData);
          if (user.id && user.name && user.role && user.email) {
            dispatch(login(user));
          } else {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userData");
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("authToken");
          localStorage.removeItem("userData");
        }
      }
    };

    initializeAuth();
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
