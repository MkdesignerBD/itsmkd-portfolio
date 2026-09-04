import { useState, useEffect } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Left logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src={logo}
            alt="MKD Designer"
            className="h-9 sm:h-10 w-auto select-none"
            draggable="false"
          />
        </Link>

        {/* Center nav (Desktop 100% untouched) */}
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

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50 p-2 text-white/90 hover:text-white focus:outline-none"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-6 items-center text-center">
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
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      "text-[22px] font-medium tracking-tight transition-colors py-1",
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
      )}
    </header>
  );
}
