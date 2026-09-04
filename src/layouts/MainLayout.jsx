import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();
  const isDarkCanvas =
    location.pathname === "/about" ||
    location.pathname.startsWith("/work") ||
    location.pathname === "/gallery" ||
    location.pathname === "/service" ||
    location.pathname === "/contact" ||
    location.pathname.startsWith("/tools") ||
    location.pathname.startsWith("/digital-tools") ||
    location.pathname.startsWith("/terms") ||
    location.pathname.startsWith("/privacy");

  return (
    <div className={`min-h-screen ${isDarkCanvas ? "bg-[#161616]" : "bg-[#0b0b0b]"} text-white`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
