import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/MKD Logo-02.png"; // change if needed

export default function Footer() {
  const location = useLocation();
  const isDark = location.pathname === "/about" || location.pathname === "/work";

  return (
    <footer className={`relative ${isDark ? "bg-[#161616]" : "bg-[#0b0b0b]"} overflow-hidden`}>
      {/* subtle vignette like other dark sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,rgba(11,11,11,0.92)_60%,rgba(11,11,11,1)_100%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-4">
          {/* Left brand */}
          <div>
            <img
              src={logo}
              alt="MKD"
              className="w-[120px] md:w-[180px] h-auto select-none"
              draggable="false"
            />
            {/* <div className="mt-6 text-white text-[54px] md:text-[64px] font-light">
              mkdesigner
            </div> */}
          </div>

          {/* Right columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
            {/* WEBSITE */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                WEBSITE
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                {[
                  { label: "Home", to: "/" },
                  { label: "About", to: "/about" },
                  { label: "Work", to: "/work" },
                  { label: "Service", to: "/service" },
                  { label: "Tools", to: "/tools" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => {
                  const isActive =
                    location.pathname === item.to ||
                    (item.to === "/work" && (location.pathname === "/gallery" || location.pathname.startsWith("/work"))) ||
                    (item.to === "/tools" && (location.pathname === "/tools" || location.pathname === "/digital-tools"));
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className={`block transition-colors ${
                        isActive
                          ? "text-white font-medium"
                          : "text-white/55 hover:text-white/90"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                LEGAL
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <Link
                  to="/terms"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block text-white/55 hover:text-white/90 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block text-white/55 hover:text-white/90 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                SOCIAL
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <a
                  className="block text-white/55 hover:text-white/90 transition-colors duration-200"
                  href="https://www.behance.net/itsmkd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
                <a
                  className="block text-white/55 hover:text-white/90 transition-colors duration-200"
                  href="https://www.facebook.com/MKdesignerBD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="block text-white/55 hover:text-white/90 transition-colors duration-200"
                  href="https://www.instagram.com/mkdesignerbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="block text-white/55 hover:text-white/90 transition-colors duration-200"
                  href="https://www.youtube.com/@MkDesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
                <a
                  className="block text-white/55 hover:text-white/90 transition-colors duration-200"
                  href="https://x.com/Mkdesigner1122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                CONTACT
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <div className="text-white/55">contact@itsmkdcom</div>
                <div className="text-white/55">Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 text-center text-white/45 text-[16px]">
          © Mkdesigner. All rights reserved
        </div>
      </div>
    </footer>
  );
}
