import { Outlet } from "react-router-dom";
import FarmsNavbar from "../components/navbars/FarmsNavbar";
import Footer from "../components/Footer";

export default function ConsultLayout() {
  return (
    <>
      <FarmsNavbar />
      <Outlet />
      <Footer />
    </>
  );
}