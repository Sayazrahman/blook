import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <aside className="w-60 bg-gray-100 p-4">Sidebar Menu</aside>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
