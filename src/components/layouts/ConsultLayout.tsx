import { Outlet } from "react-router-dom";
import ConsultNavbar from "../components/navbars/ConsultNavbar";
import Footer from "../components/Footer";

export default function ConsultLayout() {
  return (
    <>
      <ConsultNavbar />
      <Outlet />
      <Footer />
    </>
  );
}