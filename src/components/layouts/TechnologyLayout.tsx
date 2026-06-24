import { Outlet } from "react-router-dom";
import TechnologyNavbar from "../components/navbars/TechnologyNavbar";
import Footer from "../components/Footer";

export default function ConsultLayout() {
  return (
    <>
      <TechnologyNavbar />
      <Outlet />
      <Footer />
    </>
  );
}