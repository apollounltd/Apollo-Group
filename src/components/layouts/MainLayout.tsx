import { Outlet } from "react-router-dom";
import MainNavbar from "../components/navbars/MainNavbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
}