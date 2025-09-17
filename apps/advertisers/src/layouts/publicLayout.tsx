
import Footer from "../pages/Footer";
import { Header } from "../pages/Header";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
