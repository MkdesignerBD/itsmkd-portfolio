import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import BackToTop from "../components/BackToTop";

import amazonHero from "../assets/work/amazon-hero.png";
import ebcHero from "../assets/work/ebc-hero.png";
import ebc1 from "../assets/work/ebc/ebc-1-humidifier.jpg";
import ebc2 from "../assets/work/ebc/ebc-2-office-chair.jpg";
import ebc3 from "../assets/work/ebc/ebc-3-foot-roller.jpg";
import ebc4 from "../assets/work/ebc/ebc-4-plant-stand.jpg";
import ebc5 from "../assets/work/ebc/ebc-5-charging-cable.jpg";

// Set 1: Yoga Mat
import yoga1 from "../assets/work/sets/yoga/card-1.jpg";
import yoga2 from "../assets/work/sets/yoga/card-2.jpg";
import yoga3 from "../assets/work/sets/yoga/card-3.jpg";
import yoga4 from "../assets/work/sets/yoga/card-4.jpg";
import yoga5 from "../assets/work/sets/yoga/card-5.jpg";
import yoga6 from "../assets/work/sets/yoga/card-6.jpg";

// Set 2: Wire Stripper
import ws1 from "../assets/work/sets/wire-stripper/card-1.jpg";
import ws2 from "../assets/work/sets/wire-stripper/card-2.jpg";
import ws3 from "../assets/work/sets/wire-stripper/card-3.jpg";
import ws4 from "../assets/work/sets/wire-stripper/card-4.jpg";
import ws5 from "../assets/work/sets/wire-stripper/card-5.jpg";
import ws6 from "../assets/work/sets/wire-stripper/card-6.jpg";

// Set 3: Screen Cleaner
import sc1 from "../assets/work/sets/screen-cleaner/card-1.jpg";
import sc2 from "../assets/work/sets/screen-cleaner/card-2.jpg";
import sc3 from "../assets/work/sets/screen-cleaner/card-3.jpg";
import sc4 from "../assets/work/sets/screen-cleaner/card-4.jpg";
import sc5 from "../assets/work/sets/screen-cleaner/card-5.jpg";
import sc6 from "../assets/work/sets/screen-cleaner/card-6.jpg";

// Set 4: Balance Board
import bb1 from "../assets/work/sets/balance-board/card-1.jpg";
import bb2 from "../assets/work/sets/balance-board/card-2.jpg";
import bb3 from "../assets/work/sets/balance-board/card-3.jpg";
import bb4 from "../assets/work/sets/balance-board/card-4.jpg";
import bb5 from "../assets/work/sets/balance-board/card-5.jpg";
import bb6 from "../assets/work/sets/balance-board/card-6.jpg";

// Set 5: Exercise Ball
import eb1 from "../assets/work/sets/exercise-ball/card-1.jpg";
import eb2 from "../assets/work/sets/exercise-ball/card-2.jpg";
import eb3 from "../assets/work/sets/exercise-ball/card-3.jpg";
import eb4 from "../assets/work/sets/exercise-ball/card-4.jpg";
import eb5 from "../assets/work/sets/exercise-ball/card-5.jpg";
import eb6 from "../assets/work/sets/exercise-ball/card-6.jpg";
// Reusable scroll-driven animated divider line (matching About page)
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

const projectSets = [
  {
    id: "yoga",
    title: "Yoga Mat Visuals",
    category: "Fitness & Wellness",
    cards: [
      { id: 1, image: yoga1, title: "Key Benefits & Features" },
      { id: 2, image: yoga2, title: "Durable & High-Density Design" },
      { id: 3, image: yoga3, title: "Anti-slip clear lines for safer workouts" },
      { id: 4, image: yoga4, title: "Extra Thick Comfort Support" },
      { id: 5, image: yoga5, title: "Perfect for All Exercises" },
      { id: 6, image: yoga6, title: "Spacious & Easy to Store" },
    ],
  },
  {
    id: "wire-stripper",
    title: "Wire Stripper Tool",
    category: "Hardware & Tools",
    cards: [
      { id: 1, image: ws1, title: "Ideal for Professionals & DIY" },
      { id: 2, image: ws2, title: "Precision Jaw Structure" },
      { id: 3, image: ws3, title: "Adjustable Stripping Control" },
      { id: 4, image: ws4, title: "Multi-Function Wire Tool" },
      { id: 5, image: ws5, title: "Automatic Wire Stripping" },
      { id: 6, image: ws6, title: "Ergonomic & Durable Design" },
    ],
  },
  {
    id: "screen-cleaner",
    title: "Screen Cleaner Spray",
    category: "Tech Accessories",
    cards: [
      { id: 1, image: sc1, title: "Clean All Your Devices" },
      { id: 2, image: sc2, title: "Compact & Easy to Carry" },
      { id: 3, image: sc3, title: "Reusable Screen Cleaner Spray" },
      { id: 4, image: sc4, title: "Refillable Spray Bottle" },
      { id: 5, image: sc5, title: "Fine Mist Spray Technology" },
      { id: 6, image: sc6, title: "Instant Streak-Free Cleaning" },
    ],
  },
  {
    id: "balance-board",
    title: "Wooden Balance Board",
    category: "Fitness Equipment",
    cards: [
      { id: 1, image: bb1, title: "Ease Into Relaxation" },
      { id: 2, image: bb2, title: "Solid Wood & Secure Grip" },
      { id: 3, image: bb3, title: "Enhance Balance & Core Stability" },
      { id: 4, image: bb4, title: "Ultimate 360° Rotation" },
      { id: 5, image: bb5, title: "Balance Board For Every Age" },
      { id: 6, image: bb6, title: "Precision Measured Dimensions" },
    ],
  },
  {
    id: "exercise-ball",
    title: "Pregnancy & Exercise Ball",
    category: "Maternity & Health",
    cards: [
      { id: 1, image: eb1, title: "Perfect Wellness Gift" },
      { id: 2, image: eb2, title: "Pregnancy Comfort" },
      { id: 3, image: eb3, title: "Full-Body Support & Relaxation" },
      { id: 4, image: eb4, title: "Easy to Inflate & Use" },
      { id: 5, image: eb5, title: "Air-Tight Plug Design" },
      { id: 6, image: eb6, title: "Anti-Burst Strength" },
    ],
  },
];

const ebcProjects = [
  { id: "ebc-1", title: "ADOV Cool Mist Humidifier", image: ebc1 },
  { id: "ebc-2", title: "Ergonomic Office Chair", image: ebc2 },
  { id: "ebc-3", title: "Foot Massage Roller & Spiky Ball", image: ebc3 },
  { id: "ebc-4", title: "Wooden Plant Stand", image: ebc4 },
  { id: "ebc-5", title: "100W USB-C Fast Charging Cable", image: ebc5 },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const workSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://itsmkd.com/work/#collection",
      "url": "https://itsmkd.com/work",
      "name": "MKD Portfolio & Design Case Studies",
      "description": "Comprehensive portfolio of Amazon Listing Image Sets, A+ EBC Modules, and Conversion Graphics by Mofijul Islam (MKD).",
      "creator": {
        "@type": "Person",
        "name": "Mofijul Islam (MKD)",
        "url": "https://itsmkd.com"
      }
    }
  ]
};

export default function Work() {
  const { scrollYProgress } = useScroll();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam === "ebc" ? "ebc" : "listing");

  const [currentSetIdx, setCurrentSetIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [currentEbcIdx, setCurrentEbcIdx] = useState(0);
  const [ebcDirection, setEbcDirection] = useState(1);
  const [isEbcPaused, setIsEbcPaused] = useState(false);

  useEffect(() => {
    if (tabParam === "ebc" || tabParam === "listing") {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const nextSet = () => {
    setDirection(1);
    setCurrentSetIdx((prev) => (prev + 1) % projectSets.length);
  };

  const prevSet = () => {
    setDirection(-1);
    setCurrentSetIdx((prev) => (prev - 1 + projectSets.length) % projectSets.length);
  };

  const nextEbc = () => {
    setEbcDirection(1);
    setCurrentEbcIdx((prev) => (prev + 1) % ebcProjects.length);
  };

  const prevEbc = () => {
    setEbcDirection(-1);
    setCurrentEbcIdx((prev) => (prev - 1 + ebcProjects.length) % ebcProjects.length);
  };

  // Auto-slide listing sets every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || activeTab !== "listing") return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSetIdx((prev) => (prev + 1) % projectSets.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

  // Auto-slide EBC sets every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isEbcPaused || activeTab !== "ebc") return;
    const timer = setInterval(() => {
      setEbcDirection(1);
      setCurrentEbcIdx((prev) => (prev + 1) % ebcProjects.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isEbcPaused, activeTab]);

  const currentSet = projectSets[currentSetIdx];
  const currentEbc = ebcProjects[currentEbcIdx];

  return (
    <div className="bg-[#161616] text-white min-h-screen selection:bg-[#ED502C]/30 selection:text-white">
      <SEO
        title="Portfolio & Case Studies — Amazon Visuals & Packaging | MKD"
        description="Explore Amazon listing image case studies, conversion-driven A+ content sets, and custom packaging designs created by Mofijul Islam (MKD)."
        keywords="Amazon Listing Case Studies, EBC Design Examples, Amazon Infographics Portfolio, Packaging Design Showcase, MKD Work"
        canonical="/work"
        schema={workSchema}
      />
      {/* Category Mode Switcher: Ultra-minimal & compact */}
      <div className="pt-28 md:pt-32 pb-4 flex justify-center px-4">
        <div className="inline-flex items-center p-1 rounded-full bg-[#1e1e1e] border border-white/10 shadow-sm">
          <button
            onClick={() => handleTabChange("listing")}
            className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "listing"
                ? "bg-white/15 text-white font-medium shadow-sm"
                : "text-white/45 hover:text-white/80 font-normal"
            }`}
          >
            Amazon Listing Images
          </button>
          <button
            onClick={() => handleTabChange("ebc")}
            className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "ebc"
                ? "bg-white/15 text-white font-medium shadow-sm"
                : "text-white/45 hover:text-white/80 font-normal"
            }`}
          >
            A+ Content (EBC)
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "listing" ? (
          <motion.div
            key="listing-mode"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {/* 1. Hero Section: Amazon Listing Images */}
            <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-8 md:pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-[377px_1fr] gap-10 lg:gap-14 xl:gap-[118px] items-center">
                {/* Left Column: Hero Listing Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[377px] mx-auto lg:mx-0"
                >
                  <div className="relative rounded-[16px] overflow-hidden bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                    <img
                      src={amazonHero}
                      alt="Professional Amazon Listing - Biodünger"
                      className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[16px] pointer-events-none" />
                  </div>
                </motion.div>

                {/* Right Column: Title and Narrative */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center"
                >
                  <h1 className="tracking-tight leading-[1.1]">
                    <span className="block text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-medium">
                      Amazon Listing Images
                    </span>
                    <span className="block text-[#ED502C] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-thin mt-1 lg:whitespace-nowrap">
                      That Speak Before the Description Does
                    </span>
                  </h1>

                  <p className="mt-8 text-white text-[16px] sm:text-[17px] font-medium tracking-tight">
                    Good design isn’t decoration — it’s strategy.
                  </p>

                  <p className="mt-4 text-[#d1d1d1] text-[15px] sm:text-[16px] leading-[1.75] max-w-[640px] font-normal">
                    Each listing image is carefully crafted using research, positioning, and an understanding of what drives purchase decisions. The result is powerful product visuals that stand out, build trust, and improve conversions.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 2. Middle Section: Built to Compete */}
            <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-24 md:pt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-[600px] mx-auto"
              >
                <h2 className="text-white text-[36px] sm:text-[42px] md:text-[46px] font-medium tracking-tight leading-tight">
                  Built to Compete
                </h2>
                <p className="mt-3 md:mt-4 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-relaxed">
                  A showcase of Amazon visuals designed for clarity, impact, and real results.
                </p>
              </motion.div>

              {/* 3. Auto-sliding Gallery Grid with subtle Side Navigation Arrows */}
              <div className="mt-12 md:mt-16 relative">
                {/* Subtle Left Arrow Button */}
                <button
                  onClick={prevSet}
                  aria-label="Previous set"
                  className="absolute -left-5 sm:-left-8 md:-left-16 lg:-left-20 xl:-left-24 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#1e1e1e]/80 hover:bg-[#2a2a2a] border border-white/10 hover:border-white/25 text-white/50 hover:text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 -translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Subtle Right Arrow Button */}
                <button
                  onClick={nextSet}
                  aria-label="Next set"
                  className="absolute -right-5 sm:-right-8 md:-right-16 lg:-right-20 xl:-right-24 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#1e1e1e]/80 hover:bg-[#2a2a2a] border border-white/10 hover:border-white/25 text-white/50 hover:text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Sliding Grid */}
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="relative min-h-[700px] overflow-hidden"
                >
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentSetIdx}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[21px]"
                    >
                      {currentSet.cards.map((card, idx) => (
                        <motion.div
                          key={card.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          whileHover={{
                            y: -6,
                            transition: { duration: 0.25, ease: "easeOut" },
                          }}
                          onClick={() => setSelectedImage(card.image)}
                          className="group cursor-pointer relative rounded-[14px] overflow-hidden bg-[#181818] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-[#ED502C]/40 hover:shadow-[0_20px_40px_rgba(237,80,44,0.15)] transition-all duration-300"
                        >
                          <div className="relative aspect-[376/443] w-full overflow-hidden bg-white/5">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                            />

                            {/* Subtle overlay & view prompt on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                Click to Enlarge
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>

            {/* Section Divider 1: Scroll-driven animated line */}
            <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] mt-20 md:mt-28">
              <GlobalScrollDivider scrollYProgress={scrollYProgress} />
            </div>

            {/* 4. "Curious to see more?" Section (Listing tab only) */}
            <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-16 md:pt-20 pb-16 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[700px]"
              >
                <p className="text-[#888888] text-[15px] font-normal tracking-wide">
                  More Work
                </p>

                <h2 className="mt-4 text-white text-[38px] sm:text-[46px] md:text-[54px] font-medium tracking-tight leading-[1.1]">
                  Curious to see more?
                </h2>

                <div className="mt-5 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-[1.7] space-y-1">
                  <p>
                    Beyond client collaborations, I continuously explore and create new visual concepts.
                  </p>
                  <p>
                    You can browse a wider collection of selected works on a dedicated gallery page.{" "}
                    <Link
                      to="/gallery"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-[#ED502C] font-medium hover:underline inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Click Here
                    </Link>
                  </p>
                </div>
              </motion.div>

              {/* Section Divider 2: Scroll-driven animated line before Footer */}
              <div className="mt-20 md:mt-28">
                <GlobalScrollDivider scrollYProgress={scrollYProgress} />
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="ebc-mode"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {/* 1. Hero Section: Amazon A+ Content Design! */}
            <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-8 md:pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-[377px_1fr] gap-10 lg:gap-14 xl:gap-[118px] items-center">
                {/* Left Column: ADOV Humidifier Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[377px] mx-auto lg:mx-0"
                >
                  <div className="relative rounded-[16px] overflow-hidden bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                    <img
                      src={ebcHero}
                      alt="Amazon A+ Content Design - ADOV Humidifier"
                      className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[16px] pointer-events-none" />
                  </div>
                </motion.div>

                {/* Right Column: Title and Narrative */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center"
                >
                  <h1 className="tracking-tight leading-[1.1]">
                    <span className="block text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-medium">
                      Amazon A+ Content Design!
                    </span>
                    <span className="block text-[#ED502C] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-thin mt-1 lg:whitespace-nowrap">
                      Built for Clarity. Crafted for Conversion.
                    </span>
                  </h1>

                  <p className="mt-8 text-white text-[16px] sm:text-[17px] font-medium tracking-tight">
                    A+ Content is your opportunity to go beyond the basics.
                  </p>

                  <p className="mt-4 text-[#d1d1d1] text-[15px] sm:text-[16px] leading-[1.75] max-w-[640px] font-normal">
                    We design structured, research-driven visuals that highlight your product’s strengths and guide customers through a clear, persuasive story. No fillers, no decoration — just strategic content built to differentiate your brand and improve performance.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 2. Middle Section: Built to Compete */}
            <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-24 md:pt-32 pb-16 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-[600px] mx-auto"
              >
                <h2 className="text-white text-[36px] sm:text-[42px] md:text-[46px] font-medium tracking-tight leading-tight">
                  Built to Compete
                </h2>
                <p className="mt-3 md:mt-4 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-relaxed">
                  A showcase of Amazon visuals designed for clarity, impact, and real results.
                </p>
              </motion.div>

              {/* 3. Auto-sliding EBC Showcase with Side Navigation Arrows */}
              <div className="mt-12 md:mt-16 relative">
                {/* Subtle Left Arrow Button */}
                <button
                  onClick={prevEbc}
                  aria-label="Previous A+ content"
                  className="absolute -left-3 sm:-left-6 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#1e1e1e]/80 hover:bg-[#2a2a2a] border border-white/10 hover:border-white/25 text-white/50 hover:text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 -translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Subtle Right Arrow Button */}
                <button
                  onClick={nextEbc}
                  aria-label="Next A+ content"
                  className="absolute -right-3 sm:-right-6 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#1e1e1e]/80 hover:bg-[#2a2a2a] border border-white/10 hover:border-white/25 text-white/50 hover:text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Sliding EBC Container */}
                <div
                  onMouseEnter={() => setIsEbcPaused(true)}
                  onMouseLeave={() => setIsEbcPaused(false)}
                  className="relative min-h-[700px] overflow-hidden flex justify-center"
                >
                  <AnimatePresence custom={ebcDirection} mode="wait">
                    <motion.div
                      key={currentEbcIdx}
                      custom={ebcDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full max-w-[773px] mx-auto rounded-[16px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer group bg-white/5"
                      onClick={() => setSelectedImage(currentEbc.image)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={currentEbc.image}
                          alt={currentEbc.title}
                          className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            Click to Enlarge ({currentEbcIdx + 1} / {ebcProjects.length})
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Section Divider: Scroll-driven animated line before Footer */}
              <div className="mt-20 md:mt-28">
                <GlobalScrollDivider scrollYProgress={scrollYProgress} />
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[800px] w-full max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Enlarged Amazon visual"
                className="max-w-full max-h-[85vh] object-contain rounded-[16px] shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}
