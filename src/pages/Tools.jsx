import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import toolIcon from "../assets/tools/icon46.png";
import clearspaceBaseImg from "../assets/tools/Clearspace.png";
import { MKDConstructionVectorGrid } from "./MKDConstructionVectorGrid";
import BackToTop from "../components/BackToTop";

function GlobalScrollDivider({ scrollYProgress }) {
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div className="w-full">
      <div className="relative w-full h-[1px] bg-white/15 overflow-hidden">
        <motion.div
          style={{ x }}
          className="h-[1px] w-1/4 bg-white shadow-[0_0_10px_rgba(255,255,255,0.75)]"
        />
      </div>
    </div>
  );
}

// =========================================================================
// INTERACTIVE TOOL MODES: 1. Base | 2. Construction | 3. Clearspace
// Clean, Crisp, Authentic Construction.svg Vector Engine
// =========================================================================
function InteractiveGridGenerator() {
  const [activeTab, setActiveTab] = useState("construction"); // "base" | "construction" | "clearspace"
  const [constructionStage, setConstructionStage] = useState("artwork"); // "artwork" | "generating" | "grid"
  const [clearspaceStage, setClearspaceStage] = useState("artwork"); // "artwork" | "generating" | "grid"
  const [isTabSwitching, setIsTabSwitching] = useState(false);

  // Construction Mode Auto-Loop (Smooth & Balanced: 2.4s loop)
  useEffect(() => {
    if (activeTab !== "construction") return;
    const interval = setInterval(() => {
      setConstructionStage((prev) => {
        if (prev === "artwork") {
          setTimeout(() => setConstructionStage("grid"), 200);
          return "generating";
        }
        return "artwork";
      });
    }, 2400);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Clearspace Mode Auto-Loop (Smooth & Balanced: 2.4s loop)
  useEffect(() => {
    if (activeTab !== "clearspace") return;
    const interval = setInterval(() => {
      setClearspaceStage((prev) => {
        if (prev === "artwork") {
          setTimeout(() => setClearspaceStage("grid"), 200);
          return "generating";
        }
        return "artwork";
      });
    }, 2400);
    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsTabSwitching(true);
    setTimeout(() => {
      setActiveTab(tab);
      if (tab === "construction") {
        setConstructionStage("artwork");
      }
      if (tab === "clearspace") {
        setClearspaceStage("artwork");
      }
      setIsTabSwitching(false);
    }, 180);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Controls Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#141414] border-b border-white/10 rounded-t-[28px] text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#222] border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
            <img src={toolIcon} alt="MKD Tool" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-medium text-white/90 text-[14px]">
              {activeTab === "base"
                ? "MKD Grid Tool • Base Vector Artwork"
                : activeTab === "construction"
                ? constructionStage === "artwork"
                  ? "MKD Brand Mark Selected • Auto Generating Grid..."
                  : "MKD Brand Construction Matrix (38.8X)"
                : clearspaceStage === "artwork"
                ? "MKD Brand Mark Selected • Auto Calculating Clearspace..."
                : "MKD Brand Clearspace & Exclusion Safety Zone (1.0X)"}
            </span>
          </div>
        </div>

        {/* 3 Tool Mode Buttons: 1st Base | 2nd Construction | 3rd Clearspace */}
        <div className="flex items-center gap-1.5 bg-[#1f1f1f] p-1.5 rounded-2xl border border-white/10 shadow-inner">
          <button
            type="button"
            onClick={() => handleTabChange("base")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "base"
                ? "bg-[#f15a28] text-white shadow-md"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>1. Base</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("construction")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "construction"
                ? "bg-[#f15a28] text-white shadow-md"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>2. Construction</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("clearspace")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "clearspace"
                ? "bg-[#f15a28] text-white shadow-md"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>3. Clearspace</span>
          </button>
        </div>
      </div>

      {/* Canvas Outer Wrapper */}
      <div className="w-full bg-[#141414] p-3 md:p-6 rounded-b-[28px] flex items-center justify-center">
        {/* White Artboard: EXACT 100% IDENTICAL FIXED DIMENSIONS ACROSS ALL 3 TABS */}
        <div className="w-full h-[480px] sm:h-[540px] md:h-[600px] bg-[#ffffff] text-slate-800 rounded-[20px] overflow-hidden relative p-4 md:p-8 flex items-center justify-center select-none">
          {/* Glowing Orange Laser Scanner Sweep Line (Smooth 0.38s) */}
          <AnimatePresence>
            {(isTabSwitching ||
              (activeTab === "construction" && constructionStage === "generating") ||
              (activeTab === "clearspace" && clearspaceStage === "generating")) && (
              <motion.div
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: "100%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#f15a28] to-transparent z-30 pointer-events-none shadow-[0_0_15px_#f15a28]"
              />
            )}
          </AnimatePresence>

          {/* =============================================================
              MODE 1: BASE MODE (Solid Orange MKD Brand Logo + Selection Handles)
              ============================================================= */}
          {activeTab === "base" && (
            <svg
              viewBox="500 200 920 680"
              className="w-auto h-full max-h-full max-w-full transition-all duration-300 select-none"
            >
              <motion.g
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Solid Orange MKD Brand Logo */}
                <image
                  href={clearspaceBaseImg}
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* Selection Bounding Box */}
                <rect
                  x="726"
                  y="402"
                  width="468"
                  height="278"
                  fill="none"
                  stroke="#0080ff"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
                {[
                  { x: 718, y: 394 },
                  { x: 952, y: 394 },
                  { x: 1186, y: 394 },
                  { x: 718, y: 533 },
                  { x: 1186, y: 533 },
                  { x: 718, y: 672 },
                  { x: 952, y: 672 },
                  { x: 1186, y: 672 },
                ].map((h, idx) => (
                  <rect
                    key={`base_handle_${idx}`}
                    x={h.x}
                    y={h.y}
                    width="16"
                    height="16"
                    fill="#ffffff"
                    stroke="#0080ff"
                    strokeWidth="2.5"
                  />
                ))}

                {/* Badge */}
                <rect
                  x="780"
                  y="326"
                  width="360"
                  height="48"
                  rx="10"
                  fill="#0080ff"
                />
                <text
                  x="960"
                  y="357"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="sans-serif"
                  fontSize="15"
                  fontWeight="600"
                >
                  1 Vector Object Selected • Base Mode
                </text>
              </motion.g>
            </svg>
          )}

          {/* =============================================================
              MODE 2: CONSTRUCTION MODE (Authentic Construction.svg Vector Animation)
              ============================================================= */}
          {activeTab === "construction" && (
            <svg
              viewBox="500 200 920 680"
              className="w-auto h-full max-h-full max-w-full transition-all duration-300 select-none"
            >
              {/* 1. Base Artwork Layer (Solid Orange Logo with Selection Box) */}
              {constructionStage === "artwork" && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  {/* Master Solid Orange MKD Logo */}
                  <image
                    href={clearspaceBaseImg}
                    x="0"
                    y="0"
                    width="1920"
                    height="1080"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  {/* Selection Bounding Box */}
                  <rect
                    x="726"
                    y="402"
                    width="468"
                    height="278"
                    fill="none"
                    stroke="#0080ff"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  {[
                    { x: 718, y: 394 },
                    { x: 952, y: 394 },
                    { x: 1186, y: 394 },
                    { x: 718, y: 533 },
                    { x: 1186, y: 533 },
                    { x: 718, y: 672 },
                    { x: 952, y: 672 },
                    { x: 1186, y: 672 },
                  ].map((h, idx) => (
                    <rect
                      key={`const_handle_${idx}`}
                      x={h.x}
                      y={h.y}
                      width="16"
                      height="16"
                      fill="#ffffff"
                      stroke="#0080ff"
                      strokeWidth="2.5"
                    />
                  ))}

                  <rect
                    x="780"
                    y="326"
                    width="360"
                    height="48"
                    rx="10"
                    fill="#0080ff"
                  />
                  <text
                    x="960"
                    y="357"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="sans-serif"
                    fontSize="15"
                    fontWeight="600"
                  >
                    1 Vector Object Selected • Auto Gridding
                  </text>
                </motion.g>
              )}

              {/* 2. Grid Generated Stage (Smooth Drawing Animation) */}
              {constructionStage === "grid" && (
                <MKDConstructionVectorGrid />
              )}
            </svg>
          )}

          {/* =============================================================
              MODE 3: CLEARSPACE MODE (Authentic Clearspace Grid & Guidelines)
              ============================================================= */}
          {activeTab === "clearspace" && (
            <svg
              viewBox="500 200 920 680"
              className="w-auto h-full max-h-full max-w-full transition-all duration-300 select-none"
            >
              {/* BASE LAYER: Clearspace.png with Illustrator Selection Transform Box */}
              <g>
                {/* Master Solid Orange MKD Logo (Clearspace.png) */}
                <image
                  href={clearspaceBaseImg}
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* Illustrator Transform Selection Box (Shown cleanly in Artwork stage) */}
                <motion.g
                  initial={false}
                  animate={{
                    opacity: clearspaceStage === "artwork" ? 0.95 : 0,
                    scale: clearspaceStage === "artwork" ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  style={{ transformOrigin: "960px 541px" }}
                >
                  <rect
                    x="726"
                    y="402"
                    width="468"
                    height="278"
                    fill="none"
                    stroke="#0080ff"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  {[
                    { x: 718, y: 394 },
                    { x: 952, y: 394 },
                    { x: 1186, y: 394 },
                    { x: 718, y: 533 },
                    { x: 1186, y: 533 },
                    { x: 718, y: 672 },
                    { x: 952, y: 672 },
                    { x: 1186, y: 672 },
                  ].map((h, idx) => (
                    <rect
                      key={`cs_handle_${idx}`}
                      x={h.x}
                      y={h.y}
                      width="16"
                      height="16"
                      fill="#ffffff"
                      stroke="#0080ff"
                      strokeWidth="2.5"
                    />
                  ))}

                  {/* Perfectly Fitted Blue Badge Box for Text */}
                  <rect
                    x="780"
                    y="326"
                    width="360"
                    height="48"
                    rx="10"
                    fill="#0080ff"
                  />
                  <text
                    x="960"
                    y="357"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="sans-serif"
                    fontSize="15"
                    fontWeight="600"
                  >
                    1 Vector Object Selected • Auto Gridding
                  </text>
                </motion.g>
              </g>

              {/* PROCEDURAL VECTOR DRAWING ANIMATION LAYER (Smooth & Elegant) */}
              {clearspaceStage === "grid" && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.28 }}
                >
                  {/* 1. Four Animated Corner Blue Exclusion Boxes with Bold Authentic Grey Logo Mark */}
                  {[
                    { x: 586, y: 262, w: 140, h: 140 },
                    { x: 1194, y: 262, w: 140, h: 140 },
                    { x: 586, y: 680, w: 140, h: 140 },
                    { x: 1194, y: 680, w: 140, h: 140 },
                  ].map((box, idx) => (
                    <g key={`corner_box_${idx}`}>
                      {/* Blue Tinted Safety Block */}
                      <motion.rect
                        x={box.x}
                        y={box.y}
                        width={box.w}
                        height={box.h}
                        fill="#e8f2fe"
                        fillOpacity="0.88"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.04 + idx * 0.04, ease: "easeOut" }}
                      />

                      {/* Animated Box Vector Border */}
                      <motion.rect
                        x={box.x}
                        y={box.y}
                        width={box.w}
                        height={box.h}
                        fill="none"
                        stroke="#b9d9fc"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.58, delay: idx * 0.04, ease: "easeInOut" }}
                      />

                      {/* Bold, Clear, Prominent Authentic Grey Logo Mark */}
                      <motion.g
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.15 + idx * 0.04, ease: "easeOut" }}
                        style={{ transformOrigin: `${box.x + box.w / 2}px ${box.y + box.h / 2}px` }}
                      >
                        <image
                          href={clearspaceBaseImg}
                          x={box.x + 8}
                          y={box.y + 8}
                          width={box.w - 16}
                          height={box.h - 16}
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            filter: "grayscale(100%) brightness(0.28) contrast(1.2)",
                          }}
                        />
                      </motion.g>
                    </g>
                  ))}

                  {/* 2. Procedural Horizontal Lines Drawing Across Canvas */}
                  <motion.line
                    x1="520"
                    y1="262"
                    x2="1400"
                    y2="262"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.08, ease: "easeInOut" }}
                  />

                  <motion.line
                    x1="520"
                    y1="402"
                    x2="1400"
                    y2="402"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.12, ease: "easeInOut" }}
                  />

                  <motion.line
                    x1="520"
                    y1="680"
                    x2="1400"
                    y2="680"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.16, ease: "easeInOut" }}
                  />

                  <motion.line
                    x1="520"
                    y1="820"
                    x2="1400"
                    y2="820"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                  />

                  {/* 3. Procedural Vertical Lines Drawing Down Canvas */}
                  <motion.line
                    x1="586"
                    y1="220"
                    x2="586"
                    y2="860"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.12, ease: "easeInOut" }}
                  />

                  <motion.line
                    x1="726"
                    y1="220"
                    x2="726"
                    y2="860"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.16, ease: "easeInOut" }}
                  />

                  <motion.line
                    x1="1194"
                    y1="220"
                    x2="1194"
                    y2="860"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                  />

                  <motion.line
                    x1="1334"
                    y1="220"
                    x2="1334"
                    y2="860"
                    stroke="#e2e8f0"
                    strokeWidth="1.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.24, ease: "easeInOut" }}
                  />

                  {/* 4. Animated Height Dimension Ruler (278 px) */}
                  <motion.g
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
                  >
                    <line
                      x1="1346"
                      y1="402"
                      x2="1346"
                      y2="680"
                      stroke="#94a3b8"
                      strokeWidth="1.8"
                    />
                    <line
                      x1="1338"
                      y1="402"
                      x2="1354"
                      y2="402"
                      stroke="#94a3b8"
                      strokeWidth="1.8"
                    />
                    <line
                      x1="1338"
                      y1="680"
                      x2="1354"
                      y2="680"
                      stroke="#94a3b8"
                      strokeWidth="1.8"
                    />
                    <text
                      x="1364"
                      y="548"
                      textAnchor="start"
                      fill="#64748b"
                      fontFamily="sans-serif"
                      fontSize="18"
                      fontWeight="600"
                    >
                      278 px
                    </text>
                  </motion.g>
                </motion.g>
              )}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Tools() {
  const { scrollYProgress } = useScroll();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Currency & Payment Gateway State
  const [currency, setCurrency] = useState("USD");
  const [paymentTab, setPaymentTab] = useState("bkash");

  // bKash Form State
  const [trxId, setTrxId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prices
  const priceUSD = "2.99";
  const priceBDT = 299;

  // 6 Key Features with Clean Minimal Stroke Vector Icons
  const features = [
    {
      title: "1-Click Grid Generator",
      desc: "Instant construction circles, modular matrices, and vector alignment guides generated in seconds.",
      badge: "Instant",
      iconSvg: (
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-[#f15a28] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Golden Ratio & Radial Matrices",
      desc: "Nested geometric proportions, 16-fold floral matrices, and harmonic arcs with zero manual math.",
      badge: "Mathematical",
      iconSvg: (
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-[#f15a28] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" strokeDasharray="2.5 2.5" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      ),
    },
    {
      title: "Isometric & Polar Angles",
      desc: "Pre-calibrated 30°, 45°, 60° angle guides for modern 3D monograms, geometric marks, and emblems.",
      badge: "3D & 2D",
      iconSvg: (
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-[#f15a28] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "1-Click Auto Installer",
      desc: "Fast, automated installation for both macOS (Apple Silicon & Intel) and Windows (10/11).",
      badge: "10-Sec Setup",
      iconSvg: (
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-[#f15a28] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      title: "Live In-Panel Controls",
      desc: "Dockable Illustrator native panel under Window > Extensions for a distraction-free workflow.",
      badge: "Native UI",
      iconSvg: (
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-[#f15a28] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
    },
    {
      title: "Commercial Use License",
      desc: "Use on unlimited personal, client, and agency commercial branding projects worldwide.",
      badge: "Unlimited",
      iconSvg: (
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-[#f15a28] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "How do I download the files after purchasing via bKash or Nagad?",
      a: "After completing your Send Money or payment via bKash or Nagad, submit your TrxID and email in the checkout form. Your instant download link and lifetime license key will be generated immediately on-screen and also sent directly to your email.",
    },
    {
      q: "How do I install the extension in Adobe Illustrator?",
      a: "Installation takes 10 seconds! Simply double-click the included 'Install_Mac.command' (on macOS) or 'Install_Win.bat' (on Windows). Then open Illustrator and go to Window > Extensions > MKD Grid System.",
    },
    {
      q: "Which Adobe Illustrator versions are compatible?",
      a: "It is fully compatible with Adobe Illustrator CC 2020, 2021, 2022, 2023, 2024, 2025, and 2026 on both macOS (Apple Silicon M1/M2/M3/M4 & Intel) and Windows 10/11.",
    },
    {
      q: "Do I get free future updates?",
      a: "Yes! Your license includes lifetime free updates and access to all new grid templates and feature additions.",
    },
    {
      q: "Can I use this for client projects?",
      a: "Absolutely. The license allows unlimited commercial use for all your personal, freelance, and client design projects.",
    },
  ];

  const handleBkashSubmit = (e) => {
    e.preventDefault();
    if (!trxId || !userEmail) {
      alert("অনুগ্রহ করে আপনার Email এবং Transaction ID (TrxID) লিখুন!");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#161616] text-white min-h-screen pt-28 pb-20 overflow-hidden relative selection:bg-[#f15a28]/30 selection:text-white">
      {/* Background Ambient Animated Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#f15a28]/15 via-orange-500/5 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-[800px] -left-40 w-[500px] h-[500px] bg-rose-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-[1400px] -right-40 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

      {/* =================================================================
          1. HERO BANNER
          ================================================================= */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 pt-8 pb-20 relative z-10">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#f15a28]/20 to-amber-500/20 border border-[#f15a28]/35 text-[#f15a28] text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(241,90,40,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f15a28] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f15a28]"></span>
            </span>
            Adobe Illustrator Extension • Version 1.0 Pro
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.08] tracking-tight text-white mb-6"
          >
            The Ultimate Logo Grid System for{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#f15a28] to-amber-300">
              Adobe Illustrator
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="absolute left-0 -bottom-1 h-[3px] bg-gradient-to-r from-[#f15a28] to-amber-400 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[760px] mx-auto mb-10"
          >
            Say goodbye to tedious manual gridding. Generate flawless logo construction
            circles, Golden Ratio matrices, and isometric guides in 1-click directly inside
            Illustrator.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setShowCheckoutModal(true);
                setIsSubmitted(false);
              }}
              className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#f15a28] to-[#e04a18] text-white font-semibold transition-all shadow-[0_10px_35px_rgba(241,90,40,0.4)] cursor-pointer text-base flex items-center gap-3 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span>Get Lifetime Access — $2.99 / ৳299</span>
              <span className="text-xs bg-black/30 px-2 py-0.5 rounded-md uppercase font-bold tracking-wider">
                50% OFF
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                alert("Free 3-Day Trial download started! (Includes Install_Mac.command & Install_Win.bat)");
              }}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition cursor-pointer text-base flex items-center gap-2 backdrop-blur-md"
            >
              <span>Download 3-Day Free Trial</span>
              <span className="animate-bounce text-orange-400">↓</span>
            </motion.button>
          </motion.div>

          {/* Payment Badges - Clean & Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-[13px] text-white/50"
          >
            <span>Supported Payments:</span>
            <span className="text-white/80 font-medium">bKash</span>
            <span>·</span>
            <span className="text-white/80 font-medium">Nagad</span>
            <span>·</span>
            <span className="text-white/80 font-medium">Cards</span>
            <span>·</span>
            <span className="text-white/80 font-medium">PayPal</span>
            <span>·</span>
            <span className="text-white/80 font-medium">Stripe</span>
          </motion.div>
        </div>

        {/* =================================================================
            LIVE INTERACTIVE 3-IN-1 TOOL PANEL (Base | Construction | Clearspace)
            ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 max-w-[1050px] mx-auto rounded-[28px] bg-[#141414]/90 backdrop-blur-xl border border-white/15 p-4 md:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative"
        >
          {/* Interactive Tool Component */}
          <InteractiveGridGenerator />

          {/* Bottom Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/5">
              <span className="text-[#f15a28] text-xs font-bold block mb-1">1. BASE ARTWORK</span>
              <h4 className="font-semibold text-white text-sm">Clean Vector Boundary</h4>
              <p className="text-xs text-white/50 mt-1">Select any vector mark inside Illustrator with 8 transform bounding points.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/5">
              <span className="text-[#f15a28] text-xs font-bold block mb-1">2. CONSTRUCTION</span>
              <h4 className="font-semibold text-white text-sm">38.8X Grid Matrix</h4>
              <p className="text-xs text-white/50 mt-1">Generate dynamic circles, angles, and proportional rulers in seconds.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/5">
              <span className="text-[#f15a28] text-xs font-bold block mb-1">3. CLEARSPACE</span>
              <h4 className="font-semibold text-white text-sm">Brand Exclusion Safety</h4>
              <p className="text-xs text-white/50 mt-1">Auto-calculate exact 1.0X brand clearspace safety zones with vector lines.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =================================================================
          2. KEY FEATURES GRID WITH MINIMAL VECTOR STROKE ICONS
          ================================================================= */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-16 border-t border-white/10 relative z-10">
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <span className="text-[#f15a28] text-xs font-semibold uppercase tracking-widest block mb-2">
            Why Designers Love It
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
            Engineered for Precision &amp; Speed
          </h2>
          <p className="text-sm md:text-base text-white/60">
            Everything you need to deliver world-class logo marks that look sharp, symmetrical, and mathematically balanced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              whileTap={{ scale: 0.98 }}
              className="p-8 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#f15a28]/60 hover:shadow-[0_20px_45px_rgba(241,90,40,0.15)] flex flex-col justify-between group cursor-default relative overflow-hidden transition-colors duration-300"
            >
              {/* Subtle ambient radial gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f15a28]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-12 h-12 rounded-xl bg-[#202020] border border-white/10 flex items-center justify-center group-hover:bg-[#f15a28]/20 group-hover:border-[#f15a28]/40 transition-colors duration-300"
                  >
                    {f.iconSvg}
                  </motion.div>
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:text-white/70 group-hover:border-white/15 transition-colors duration-300">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#f15a28] transition-colors duration-200">
                  {f.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================================================================
          3. PRICING & PURCHASE SECTION (DUAL CURRENCY: USD / BDT)
          ================================================================= */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 border-t border-white/10 relative z-10">
        <div className="text-center max-w-[650px] mx-auto mb-10">
          <span className="text-[#f15a28] text-xs font-semibold uppercase tracking-widest block mb-2">
            Pricing &amp; Licensing
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
            Invest Once, Build Forever
          </h2>
          <p className="text-sm md:text-base text-white/60">
            No monthly subscriptions. Get full lifetime access with all future updates included.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-[#1c1c1c] border border-white/10 mt-6">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-[#f15a28] text-white shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              USD ($2.99)
            </button>
            <button
              onClick={() => setCurrency("BDT")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                currency === "BDT"
                  ? "bg-[#e2136e] text-white shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>🇧🇩 BDT (৳299)</span>
              <span className="text-[10px] bg-white/20 px-1 rounded">bKash</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Option 1: Free Trial */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-[#141414] border border-white/10 p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/50 bg-white/10 px-3 py-1 rounded-full">
                Community Edition
              </span>
              <h3 className="text-2xl font-semibold text-white mt-4">3-Day Beta Trial</h3>
              <p className="text-sm text-white/60 mt-2">
                Experience the full power of MKD Grid System with zero commitment.
              </p>

              <div className="my-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-xs text-white/50 ml-2">/ 3 days free</span>
              </div>

              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Full Access to Grid Presets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 1-Click Mac &amp; Windows Installer
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Standard Golden Ratio Circles
                </li>
                <li className="flex items-center gap-2 text-white/40">
                  <span>✗</span> Lifetime Updates &amp; Priority Support
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => alert("Free trial installer package downloading! (Includes Install_Mac.command & Install_Win.bat)")}
              className="mt-8 w-full py-3.5 rounded-xl border border-white/30 hover:border-white/60 text-white font-medium transition cursor-pointer"
            >
              Download Free Trial
            </motion.button>
          </motion.div>

          {/* Option 2: Lifetime Pro License */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-[#f15a28] p-8 flex flex-col justify-between relative shadow-[0_20px_60px_rgba(241,90,40,0.25)]"
          >
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-[#f15a28] text-white text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f15a28] bg-[#f15a28]/15 px-3 py-1 rounded-full">
                Lifetime Pro Edition
              </span>
              <h3 className="text-2xl font-semibold text-white mt-4">Complete Pro Toolkit</h3>
              <p className="text-sm text-white/60 mt-2">
                Lifetime access for professional brand identity designers and agencies.
              </p>

              <div className="my-6 flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">
                  {currency === "USD" ? `$${priceUSD}` : `৳${priceBDT}`}
                </span>
                <span className="text-base text-white/40 line-through">
                  {currency === "USD" ? "$5.99" : "৳599"}
                </span>
                <span className="text-xs text-[#f15a28] font-semibold bg-[#f15a28]/20 px-2 py-0.5 rounded">
                  Save 50%
                </span>
              </div>

              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="text-[#f15a28] font-bold">✓</span> All Pro Grid Generators &amp; Presets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f15a28] font-bold">✓</span> 1-Click Fast Mac &amp; Windows Installers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f15a28] font-bold">✓</span> 15+ Video Tutorials &amp; PDF Logo Guides
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f15a28] font-bold">✓</span> Unlimited Commercial Use on Client Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f15a28] font-bold">✓</span> Lifetime Free Updates &amp; Direct Support
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setShowCheckoutModal(true);
                setIsSubmitted(false);
              }}
              className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-[#f15a28] to-[#e04a18] text-white font-bold transition shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>
                {currency === "USD" ? "Buy Lifetime License ($2.99)" : "বিকাশ / নগদে কিনুন (৳299)"}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* =================================================================
          4. ANIMATED ACCORDION FAQS
          ================================================================= */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 border-t border-white/10 relative z-10">
        <div className="text-center max-w-[650px] mx-auto mb-12">
          <span className="text-[#f15a28] text-xs font-semibold uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="text-3xl font-medium text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition"
                >
                  <h3 className="text-base md:text-lg font-medium text-white">{faq.q}</h3>
                  <span
                    className={`text-xl font-bold text-[#f15a28] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-white/65 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section Divider: Scroll-driven animated line before Footer */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] mt-24 md:mt-32 pb-6 md:pb-10 relative z-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      <BackToTop />

      {/* =================================================================
          5. CHECKOUT / PURCHASE MODAL WITH BKASH & INTERNATIONAL TABS
          ================================================================= */}
      <AnimatePresence>
        {showCheckoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowCheckoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full bg-[#161616] border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm cursor-pointer z-10"
              >
                ✕
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#f15a28]/20 text-[#f15a28] flex items-center justify-center text-2xl mx-auto mb-3 font-bold">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-white">Choose Payment Method</h3>
                <p className="text-xs text-white/60 mt-1">
                  MKD Grid System for Illustrator • Lifetime License
                </p>
              </div>

              {/* Payment Method Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-[#202020] p-1.5 rounded-2xl border border-white/10 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentTab("bkash")}
                  className={`py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                    paymentTab === "bkash"
                      ? "bg-[#e2136e] text-white shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>🇧🇩 bKash / Nagad</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentTab("international")}
                  className={`py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                    paymentTab === "international"
                      ? "bg-[#f15a28] text-white shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>🌍 Card / PayPal / Stripe</span>
                </button>
              </div>

              {/* BKASH / NAGAD PAYMENT TAB */}
              {paymentTab === "bkash" && (
                <div>
                  {!isSubmitted ? (
                    <form onSubmit={handleBkashSubmit} className="space-y-4">
                      {/* Price Banner */}
                      <div className="bg-gradient-to-r from-[#e2136e]/20 to-orange-500/20 border border-[#e2136e]/30 rounded-2xl p-4 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-white/70">টোটাল পেমেন্ট অ্যামাউন্ট</div>
                          <div className="text-xl font-bold text-white mt-0.5">৳ ২৯৯ BDT</div>
                        </div>
                        <span className="text-xs bg-[#e2136e] text-white px-2.5 py-1 rounded-full font-bold">
                          50% ডিসকাউন্ট
                        </span>
                      </div>

                      {/* Instructions Box */}
                      <div className="bg-[#1e1e1e] p-4 rounded-2xl border border-white/10 text-xs space-y-2.5 text-white/80">
                        <div className="font-semibold text-white text-sm flex items-center gap-2">
                          <span>📱 পেমেন্ট নির্দেশনা:</span>
                        </div>
                        <p>
                          ১. আপনার বিকাশ বা নগদ অ্যাপ থেকে <strong>Send Money</strong> করুন:
                        </p>
                        <div className="p-2.5 bg-black/50 rounded-xl border border-white/10 flex items-center justify-between font-mono text-sm text-[#f15a28] font-bold">
                          <span>01700-000000</span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText("01700000000");
                              alert("নম্বর কপি করা হয়েছে!");
                            }}
                            className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded font-sans cursor-pointer"
                          >
                            Copy
                          </button>
                        </div>
                        <p className="text-[11px] text-white/60">
                          (নম্বরটি আপনার পার্সোনাল/মার্চেন্ট নম্বর দিয়ে রিপ্লেস করে নিন)
                        </p>
                        <p>
                          ২. রেফারেন্সে আপনার নাম বা ইমেইল লিখুন।
                        </p>
                        <p>
                          ৩. নিচের ফর্মে আপনার <strong>TrxID</strong> এবং <strong>Email</strong> দিয়ে সাবমিট করুন।
                        </p>
                      </div>

                      {/* Input fields */}
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-semibold text-white/75 mb-1.5">
                            আপনার ইমেইল অ্যাড্রেস (যেখানে লাইসেন্স key ও ফাইল যাবে) *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="yourname@gmail.com"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full bg-[#111] border border-white/15 focus:border-[#e2136e] rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/75 mb-1.5">
                            bKash / Nagad Transaction ID (TrxID) *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 9J8A7K2XYZ"
                            value={trxId}
                            onChange={(e) => setTrxId(e.target.value)}
                            className="w-full bg-[#111] border border-white/15 focus:border-[#e2136e] rounded-xl px-4 py-3 text-sm text-white font-mono uppercase outline-none transition"
                          />
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e2136e] to-[#f7941d] hover:opacity-95 text-white font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-4 text-sm"
                      >
                        <span>অর্ডার কনফার্ম করুন &amp; ফাইল ডাউনলোড করুন &rarr;</span>
                      </motion.button>
                    </form>
                  ) : (
                    /* Success / Instant Download State */
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-4 space-y-4"
                    >
                      <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
                        ✓
                      </div>
                      <h4 className="text-xl font-bold text-white">ধন্যবাদ! পেমেন্ট রিকোয়েস্ট গৃহীত হয়েছে</h4>
                      <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                        আপনার TrxID (<span className="font-mono text-[#f15a28] font-bold">{trxId}</span>) এবং ইমেইল (<span className="text-white font-semibold">{userEmail}</span>) রেকর্ড করা হয়েছে।
                      </p>

                      <div className="bg-[#202020] p-4 rounded-2xl border border-white/10 text-left space-y-2 text-xs">
                        <div className="text-white font-bold text-sm">আপনার লাইসেন্স কী:</div>
                        <div className="p-2.5 bg-black/60 font-mono text-emerald-400 font-bold rounded-lg select-all">
                          MKD-PRO-GRID-2026-X892-LIFETIME
                        </div>
                      </div>

                      <a
                        href="/downloads/MKD_Grid_System_Pro_v1.0.zip"
                        download="MKD_Grid_System_Pro_v1.0.zip"
                        className="w-full py-3.5 rounded-xl bg-[#f15a28] hover:bg-[#d94a1d] text-white font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg block text-sm"
                      >
                        <span>📥 সরাসরি ZIP ফাইল ডাউনলোড করুন</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              )}

              {/* INTERNATIONAL PAYMENT TAB */}
              {paymentTab === "international" && (
                <div className="space-y-4">
                  <div className="bg-[#202020] p-4 rounded-2xl border border-white/5 flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-white">Lifetime Pro License</div>
                      <div className="text-xs text-white/50">Instant ZIP Download + Key</div>
                    </div>
                    <div className="text-xl font-bold text-[#f15a28]">$2.99 USD</div>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        alert("Redirecting to secure Credit Card / Stripe checkout...");
                      }}
                      className="w-full py-3.5 rounded-xl bg-[#f15a28] hover:bg-[#d94a1d] text-white font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg text-sm"
                    >
                      <span>Pay with Credit / Debit Card (Stripe)</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        alert("Redirecting to PayPal / Gumroad checkout...");
                      }}
                      className="w-full py-3.5 rounded-xl bg-[#ffc439] hover:bg-[#f4b82d] text-black font-bold transition flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      <span>Pay with PayPal / Gumroad</span>
                    </motion.button>
                  </div>
                </div>
              )}

              <div className="mt-6 text-center text-[11px] text-white/40">
                🔒 256-bit Secure Encryption • 14-Day Money Back Guarantee
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
