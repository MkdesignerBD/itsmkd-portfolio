import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/MKD Logo-02.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Service", to: "/service" },
  { label: "Tools", to: "/tools" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center relative">
        {/* Left logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MKD Designer"
            className="h-10 w-auto select-none"
            draggable="false"
          />
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          {nav.map((n) => {
            const isWorkActive =
              n.to === "/work" &&
              (location.pathname === "/gallery" || location.pathname.startsWith("/work"));
            const isToolsActive =
              n.to === "/tools" &&
              (location.pathname === "/tools" || location.pathname === "/digital-tools");
            return (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  [
                    "text-[15px] font-medium transition-colors",
                    isActive || isWorkActive || isToolsActive
                      ? "text-[#ff7a2f]"
                      : "text-white/85 hover:text-white",
                  ].join(" ")
                }
              >
                {n.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
