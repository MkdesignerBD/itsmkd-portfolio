import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
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

const toolsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://itsmkd.com/tools/#software",
      "name": "MKD Grid System",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Windows 10/11, macOS (Intel & Apple Silicon)",
      "softwareRequirements": "Adobe Illustrator CC 2018 - 2026",
      "softwareVersion": "1.0.0",
      "description": "Precision Logo Construction and Grid System Extension for Adobe Illustrator. Generate isometric matrices, circular gridding, and clearspace rules in 1-click.",
      "url": "https://itsmkd.com/tools",
      "image": "https://itsmkd.com/logo.png",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Trial",
          "price": "0.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://itsmkd.com/tools"
        },
        {
          "@type": "Offer",
          "name": "Lifetime Pro License",
          "price": "2.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://itsmkd.com/tools"
        }
      ],
      "creator": {
        "@type": "Person",
        "name": "Mofijul Islam (MKD)",
        "url": "https://itsmkd.com"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://itsmkd.com/tools/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which versions of Adobe Illustrator are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MKD Grid System officially supports Adobe Illustrator CC 2018 through the latest 2026 release on both Windows and macOS (Intel & Apple Silicon M1/M2/M3/M4)."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Free Trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Free Trial allows you to download and test all core logo construction features, Base Grids, and Golden Ratio matrices directly inside Illustrator without any time limit or credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "Is it a subscription or a one-time purchase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MKD Grid System Pro is a lifetime one-time purchase with free future updates and zero recurring monthly fees."
          }
        }
      ]
    }
  ]
};

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
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Prices
  const priceUSD = "2.99";
  const priceBDT = 299;

  // Feedback Form State
  const [feedbackCategory, setFeedbackCategory] = useState("Feature Request");
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  // Auto-scroll to #feedback or #pricing if present in URL
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === "#feedback" || window.location.pathname.includes("feedback")) {
        setTimeout(() => {
          const el = document.getElementById("feedback");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else if (window.location.hash === "#pricing") {
        setTimeout(() => {
          const el = document.getElementById("pricing");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 350);
      }
    };
    handleHashScroll();
  }, []);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackMessage.trim()) {
      alert("অনুগ্রহ করে আপনার মতামত বা ফিডব্যাক লিখুন!");
      return;
    }
    setFeedbackLoading(true);
    try {
      const payload = {
        source: "MKD Grid System Tools Feedback",
        rating: `${feedbackRating}/5 Stars`,
        category: feedbackCategory,
        name: feedbackName.trim() || "Designer",
        message: feedbackMessage.trim(),
      };
      if (feedbackEmail.trim()) {
        payload.email = feedbackEmail.trim();
      }

      const res = await fetch("https://formspree.io/f/xreyaqzo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setFeedbackSubmitted(true);
      } else {
        alert(data.error || (data.errors && data.errors[0] ? data.errors[0].message : "ফিডব্যাক পাঠাতে সমস্যা হয়েছে।"));
      }
    } catch (err) {
      alert("ইন্টারনেট কানেকশন চেক করে পুনরায় চেষ্টা করুন।");
    } finally {
      setFeedbackLoading(false);
    }
  };

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
    <div className="bg-[#161616] text-white min-h-screen pb-20 overflow-hidden relative selection:bg-[#f15a28]/30 selection:text-white">
      <SEO
        title="MKD Grid System — Precision Logo Grid Extension for Adobe Illustrator"
        description="Generate Golden Ratio matrices, circular construction grids, and clearspace guides in 1-click inside Adobe Illustrator CC 2018-2026. Download free trial."
        keywords="Adobe Illustrator Grid Extension, Logo Grid System, Golden Ratio Grid Illustrator, Clearspace Grid Generator, Logo Construction Tool, Illustrator CEP Extension, MKD Grid System"
        canonical="/tools"
        schema={toolsSchema}
      />
      {/* Background Ambient Animated Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#f15a28]/15 via-orange-500/5 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-[800px] -left-40 w-[500px] h-[500px] bg-rose-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-[1400px] -right-40 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

      {/* =================================================================
          1. HERO BANNER
          ================================================================= */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-28 md:pt-[130px] pb-16 md:pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[920px]"
        >
          <p className="text-[#888888] text-[15px] font-normal tracking-wide">
            Tools &amp; Extension
          </p>

          <h1 className="mt-4 tracking-tight leading-[1.12]">
            <span className="block text-white text-[26px] sm:text-[36px] md:text-[46px] lg:text-[54px] font-medium">
              The Ultimate Logo Grid System
            </span>
            <span className="block text-[#666666] text-[22px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-thin mt-1 sm:mt-1.5 tracking-normal">
              for Adobe Illustrator.
            </span>
          </h1>

          <p className="mt-8 text-white text-[16px] sm:text-[18px] font-medium tracking-tight">
            Say goodbye to tedious manual gridding.
          </p>

          <p className="mt-3 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-[1.75] max-w-[700px] font-normal">
            Generate flawless logo construction circles, Golden Ratio matrices, and isometric guides in 1-click directly inside Illustrator.
          </p>
        </motion.div>

        {/* =================================================================
            LIVE INTERACTIVE 3-IN-1 TOOL PANEL (Base | Construction | Clearspace)
            ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-14 md:mt-16 w-full rounded-[28px] bg-[#141414]/90 backdrop-blur-xl border border-white/15 p-4 md:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative"
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

      {/* Section Divider 1: Scroll-driven animated line */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] relative z-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      {/* =================================================================
          2. KEY FEATURES GRID WITH MINIMAL VECTOR STROKE ICONS
          ================================================================= */}
      <section className="max-w-[1366px] mx-auto px-6 md:px-[98px] pt-16 md:pt-24 pb-16 md:pb-24 relative z-10">
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

      {/* Section Divider 2: Scroll-driven animated line */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] relative z-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      {/* =================================================================
          3. PRICING & PURCHASE SECTION (DUAL CURRENCY: USD / BDT)
          ================================================================= */}
      <section id="pricing" className="max-w-[1366px] mx-auto px-6 md:px-[98px] pt-16 md:pt-24 pb-16 md:pb-24 relative z-10">
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

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/downloads/MKD_Grid_System_Beta_Trial_v1.0.zip"
              download="MKD_Grid_System_Beta_Trial_v1.0.zip"
              className="mt-8 w-full py-3.5 rounded-xl border border-white/30 hover:border-white/60 text-white font-medium transition cursor-pointer flex items-center justify-center text-center"
            >
              Download Free Trial
            </motion.a>
          </motion.div>

          {/* Option 2: Lifetime Pro License */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-[#f15a28] p-8 flex flex-col justify-between relative shadow-[0_20px_60px_rgba(241,90,40,0.25)]"
          >
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider shadow-lg">
              Coming Soon
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

            <button
              type="button"
              disabled
              className="mt-8 w-full py-4 rounded-xl bg-white/[0.06] border border-white/15 text-white/50 font-semibold flex items-center justify-center gap-2 cursor-not-allowed select-none text-center"
            >
              <span className="w-2 h-2 rounded-full bg-[#f15a28] animate-pulse"></span>
              <span>
                {currency === "USD" ? "Coming Soon • Payment Gateway in Setup" : "শীঘ্রই আসছে • পেমেন্ট গেটওয়ে সেটআপ চলছে"}
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section Divider 3: Scroll-driven animated line */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] relative z-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      {/* =================================================================
          4. ANIMATED ACCORDION FAQS
          ================================================================= */}
      <section className="max-w-[1366px] mx-auto px-6 md:px-[98px] pt-16 md:pt-24 pb-16 md:pb-24 relative z-10">
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

      {/* Section Divider 4: Scroll-driven animated line before Feedback */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] relative z-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      {/* =================================================================
          5. USER FEEDBACK & SUGGESTIONS SECTION
          ================================================================= */}
      <section id="feedback" className="max-w-[1366px] mx-auto px-6 md:px-[98px] pt-16 md:pt-24 pb-16 md:pb-24 relative z-10">
        <div className="max-w-[920px] mb-10 md:mb-12">
          <p className="text-[#888888] text-[15px] md:text-[16px] font-normal tracking-wide">
            User Feedback
          </p>

          <h2 className="mt-4 sm:mt-6 leading-[1.08] tracking-tight">
            <span className="block text-white text-[28px] sm:text-[40px] md:text-[54px] font-medium tracking-tight">
              Help us shape the next release.
            </span>
            <span className="block text-[#5C5C5C] text-[28px] sm:text-[40px] md:text-[54px] font-thin tracking-tight mt-1">
              Your feedback directly guides updates &amp; new tools.
            </span>
          </h2>

          <p className="mt-6 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-[1.75] max-w-[720px] font-normal">
            Whether you&apos;re exploring the grid tools or using MKD Grid System on client projects, let us know what worked well or what features you&apos;d like to see next.
          </p>
        </div>

        {/* Minimal Feedback Form Card (Full-width consistency matching interactive hero card) */}
        <div className="w-full rounded-[28px] bg-[#141414] border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
          {feedbackSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">Thank You for Your Feedback!</h3>
              <p className="text-sm text-white/60 mt-2 max-w-md mx-auto leading-relaxed">
                Your suggestions have been recorded and help us optimize future grid matrices and features for Adobe Illustrator.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFeedbackSubmitted(false);
                  setFeedbackMessage("");
                }}
                className="mt-6 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition cursor-pointer"
              >
                Submit Another Response
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              {/* Row 1: Rating & Feedback Category */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                {/* Rating */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackRating(star)}
                        className={`text-2xl sm:text-3xl transition-transform hover:scale-110 cursor-pointer ${
                          star <= feedbackRating ? "text-[#f15a28]" : "text-white/20"
                        }`}
                        title={`${star} Star`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="text-xs text-white/50 ml-2 font-medium">
                      {feedbackRating === 5 && "5/5 — Flawless"}
                      {feedbackRating === 4 && "4/5 — Very Good"}
                      {feedbackRating === 3 && "3/5 — Good"}
                      {feedbackRating === 2 && "2/5 — Needs Work"}
                      {feedbackRating === 1 && "1/5 — Not Satisfied"}
                    </span>
                  </div>
                </div>

                {/* Feedback Category Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                    Feedback Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Feature Request", "Bug Report", "Tool Performance", "General Review"].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFeedbackCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                          feedbackCategory === cat
                            ? "bg-[#f15a28] text-white shadow-sm font-semibold"
                            : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs text-white/60 mb-2">Your Name (Optional)</label>
                  <input
                    type="text"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full h-12 rounded-xl bg-white/[0.04] border border-white/10 px-4 text-white text-sm outline-none placeholder:text-white/25 focus:border-[#f15a28] focus:ring-1 focus:ring-[#f15a28] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-2">
                    Your Email <span className="text-[#f15a28]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={feedbackEmail}
                    onChange={(e) => setFeedbackEmail(e.target.value)}
                    placeholder="alex@designer.com"
                    className="w-full h-12 rounded-xl bg-white/[0.04] border border-white/10 px-4 text-white text-sm outline-none placeholder:text-white/25 focus:border-[#f15a28] focus:ring-1 focus:ring-[#f15a28] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs text-white/60 mb-2">
                  Your Suggestions / Experience <span className="text-[#f15a28]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  placeholder="Tell us what you liked, issues you encountered, or what new tools you'd like to see next in Illustrator..."
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 p-4 text-white text-sm outline-none placeholder:text-white/25 focus:border-[#f15a28] focus:ring-1 focus:ring-[#f15a28] transition-colors resize-none leading-relaxed"
                  required
                />
              </div>

              {/* Row 4: Submit Button */}
              <div className="pt-2 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={feedbackLoading}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f15a28] to-[#e04a18] text-white font-semibold transition-all shadow-[0_10px_25px_rgba(241,90,40,0.3)] hover:shadow-[0_15px_35px_rgba(241,90,40,0.4)] cursor-pointer text-sm flex items-center gap-2"
                >
                  {feedbackLoading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Feedback</span>
                      <span>&rarr;</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Section Divider: Scroll-driven animated line before Footer */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] pb-16 md:pb-20 relative z-10">
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto overflow-x-hidden p-4 sm:p-6 flex items-center justify-center w-full"
            onClick={() => setShowCheckoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[340px] sm:max-w-[420px] min-w-0 bg-[#131313] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.85)] my-auto text-white box-border mx-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowCheckoutModal(false)}
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/5 flex items-center justify-center text-white/60 hover:text-white text-xs transition cursor-pointer z-10"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Header */}
              <div className="text-center mb-4 sm:mb-5 px-2">
                <div className="w-9 h-9 rounded-xl bg-[#f15a28]/10 border border-[#f15a28]/25 text-[#f15a28] flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">Choose Payment Method</h3>
                <p className="text-[11px] sm:text-xs text-white/50 mt-0.5">
                  MKD Grid System for Illustrator • Lifetime License
                </p>
              </div>

              {/* Payment Method Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5 mb-4 sm:mb-5">
                <button
                  type="button"
                  onClick={() => setPaymentTab("bkash")}
                  className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-medium flex items-center justify-center gap-1 transition cursor-pointer ${
                    paymentTab === "bkash"
                      ? "bg-white/10 text-white border border-white/10 shadow-sm font-semibold"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span>🇧🇩 bKash / Nagad</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentTab("international")}
                  className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-medium flex items-center justify-center gap-1 transition cursor-pointer ${
                    paymentTab === "international"
                      ? "bg-white/10 text-white border border-white/10 shadow-sm font-semibold"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span>🌍 Card / PayPal</span>
                </button>
              </div>

              {/* BKASH / NAGAD PAYMENT TAB */}
              {paymentTab === "bkash" && (
                <div className="min-w-0">
                  {!isSubmitted ? (
                    <form onSubmit={handleBkashSubmit} className="space-y-3 sm:space-y-3.5">
                      {/* Price Banner */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-[10px] sm:text-[11px] text-white/50 font-medium">টোটাল পেমেন্ট অ্যামাউন্ট</div>
                          <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5">
                            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">৳২৯৯</span>
                            <span className="text-[11px] sm:text-xs text-white/50 font-medium">BDT</span>
                            <span className="text-[11px] sm:text-xs text-white/35 line-through">৳১,২০০</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            ৭৫% ছাড় (75% OFF)
                          </span>
                        </div>
                      </div>

                      {/* Instructions Box */}
                      <div className="bg-white/[0.02] p-3.5 rounded-xl border border-white/5 text-xs space-y-2 text-white/75 min-w-0">
                        <div className="text-[11px] sm:text-[12px] font-medium text-white/90 flex items-center justify-between gap-2">
                          <span>১. বিকাশ বা নগদ থেকে <strong>Send Money</strong> করুন:</span>
                          <span className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded-md shrink-0">Personal</span>
                        </div>

                        <div className="p-2.5 bg-black/50 rounded-xl border border-white/10 flex items-center justify-between font-mono text-xs sm:text-sm text-white">
                          <span className="tracking-wider text-[#f15a28] font-bold">01700-000000</span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText("01700000000");
                              setCopiedNumber(true);
                              setTimeout(() => setCopiedNumber(false), 2000);
                            }}
                            className={`text-xs px-2.5 py-1 rounded-lg font-sans cursor-pointer transition shrink-0 ${
                              copiedNumber
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-white/10 hover:bg-white/20 text-white"
                            }`}
                          >
                            {copiedNumber ? "✓ Copied" : "Copy"}
                          </button>
                        </div>

                        <p className="text-[11px] text-white/60 leading-relaxed">
                          ২. রেফারেন্সে আপনার নাম বা ইমেইল লিখুন।
                        </p>
                        <p className="text-[11px] text-white/60 leading-relaxed">
                          ৩. নিচের ফর্মে আপনার <strong>TrxID</strong> এবং <strong>Email</strong> দিয়ে সাবমিট করুন।
                        </p>
                      </div>

                      {/* Input fields */}
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-medium text-white/70 mb-1">
                            আপনার ইমেইল অ্যাড্রেস (যেখানে লাইসেন্স key ও ফাইল যাবে) *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="yourname@gmail.com"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#f15a28] focus:bg-white/[0.05] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-white/70 mb-1">
                            bKash / Nagad Transaction ID (TrxID) *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 9J8A7K2XYZ"
                            value={trxId}
                            onChange={(e) => setTrxId(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#f15a28] focus:bg-white/[0.05] rounded-xl px-3.5 py-2.5 text-sm text-white font-mono uppercase placeholder:text-white/30 outline-none transition"
                          />
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl bg-[#f15a28] hover:bg-[#d94a1d] text-white font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(241,90,40,0.25)] text-xs sm:text-sm mt-3 sm:mt-4 text-center"
                      >
                        <span>অর্ডার কনফার্ম করুন &amp; ফাইল ডাউনলোড করুন &rarr;</span>
                      </motion.button>
                    </form>
                  ) : (
                    /* Success / Instant Download State */
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-3 space-y-4"
                    >
                      <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center text-xl mx-auto font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">ধন্যবাদ! পেমেন্ট রিকোয়েস্ট গৃহীত হয়েছে</h4>
                        <p className="text-xs text-white/60 max-w-sm mx-auto mt-1 leading-relaxed">
                          আপনার TrxID (<span className="font-mono text-[#f15a28] font-bold">{trxId}</span>) এবং ইমেইল (<span className="text-white font-semibold">{userEmail}</span>) রেকর্ড করা হয়েছে।
                        </p>
                      </div>

                      <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/10 text-left space-y-1.5 text-xs">
                        <div className="text-white/60 text-[11px] font-medium">আপনার লাইসেন্স কী:</div>
                        <div className="p-2.5 bg-black/60 font-mono text-emerald-400 font-semibold rounded-lg select-all text-xs tracking-wider">
                          MKD-PRO-GRID-2026-X892-LIFETIME
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled
                        className="w-full py-3.5 rounded-xl bg-white/10 text-white/50 font-semibold flex items-center justify-center gap-2 cursor-not-allowed select-none text-sm"
                      >
                        <span>পেমেন্ট গেটওয়ে চালুর পর ফাইল অ্যাক্টিভ হবে</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              )}

              {/* INTERNATIONAL PAYMENT TAB */}
              {paymentTab === "international" && (
                <div className="space-y-4 min-w-0">
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] sm:text-[11px] text-white/50 font-medium">Lifetime Pro License</div>
                      <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5">
                        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">$2.99</span>
                        <span className="text-[11px] sm:text-xs text-white/50 font-medium">USD</span>
                        <span className="text-[11px] sm:text-xs text-white/35 line-through">$9.99</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        70% OFF
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => {
                        alert("Redirecting to secure Credit Card / Stripe checkout...");
                      }}
                      className="w-full py-3 rounded-xl bg-white text-black hover:bg-white/90 font-semibold transition flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm shadow-sm"
                    >
                      <span>Pay with Credit / Debit Card (Stripe)</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => {
                        alert("Redirecting to PayPal / Gumroad checkout...");
                      }}
                      className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium transition flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                    >
                      <span>Pay with PayPal / Gumroad</span>
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Footer Trust Note */}
              <div className="mt-4 sm:mt-5 text-center text-[10px] sm:text-[11px] text-white/40 flex flex-wrap items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-white/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>256-bit Secure Encryption • 14-Day Money Back Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
