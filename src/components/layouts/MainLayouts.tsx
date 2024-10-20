import { Outlet } from "react-router-dom";
import Navbar from "../pages/shares/Navbar";
import Footer from "../pages/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
