import { Footer } from "../pages/footer";
import { Header } from "../pages/header";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
