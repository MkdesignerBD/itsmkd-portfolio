// src/components/Hero.jsx
import { motion } from "framer-motion";
import leftBig from "../assets/hero/left-big.jpg";
import leftSmall from "../assets/hero/left-small.jpg";
import phone from "../assets/hero/phone.png";
import rightMid from "../assets/hero/right-mid.jpg";
import rightSmall from "../assets/hero/right-small.jpg";

function Floating({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div
        animate={{ y: [-6, 6] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Vignette / glow */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_0%,rgba(11,11,11,0.92)_55%,rgba(11,11,11,1)_100%)]" />
      </div> */}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Headline + cursor */}
        <div className="relative">
          <div className="text-center relative">
            <h1 className="text-white font-semibold leading-[1.05] sm:leading-[0.95] text-[34px] sm:text-[54px] md:text-[76px] tracking-tight">
              Visuals That Make
              <br />
              Customers Click
            </h1>

            {/* Cursor icon (no border) */}

            {/* PNG Cursor */}
            <div className="hidden md:block absolute right-[335px] top-[120px]">
              <motion.img
                src="/Cursor.png"
                alt="Cursor"
                width={90}
                height={90}
                className="block"
                style={{ width: 90, height: 90 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Collage */}
        <div className="relative mt-8 md:mt-10 h-[380px] sm:h-[460px] md:h-[560px]">
          {/* Left big (near left border but inside container) */}
          <div className="absolute left-0 md:left-2 top-[160px] md:top-[180px] w-[115px] sm:w-[160px] md:w-[260px] z-10">
            <Floating delay={0.1}>
              <img
                src={leftBig}
                alt=""
                className="w-full rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />
            </Floating>
          </div>

          {/* Left small (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute left-[260px] top-[275px] md:left-[305px] md:top-[255px] w-[150px] md:w-[180px]">
            <Floating delay={0.2}>
              <img
                src={leftSmall}
                alt=""
                className="w-full rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />
            </Floating>
          </div>

          {/* Phone center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[10px] md:-top-[50px] w-[190px] sm:w-[240px] md:w-[295px] z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <img
                src={phone}
                alt=""
                className="w-full drop-shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </div>

          {/* Right mid (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute right-[170px] top-[260px] md:right-[280px] md:top-[240px] w-[180px] md:w-[220px]">
            <Floating delay={0.25}>
              <img
                src={rightMid}
                alt=""
                className="w-full rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />
            </Floating>
          </div>

          {/* Right small (near right border but inside container) */}
          <div className="absolute right-0 md:right-2 top-[190px] md:top-[300px] w-[115px] sm:w-[160px] md:w-[240px] z-10">
            <Floating delay={0.3}>
              <img
                src={rightSmall}
                alt=""
                className="w-full rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />
            </Floating>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-16">
          <a
            href="/work"
            className="inline-flex items-center justify-center px-9 sm:px-10 py-3 rounded-xl border border-white/25 text-white/90 hover:border-white/50 transition-colors text-sm sm:text-base font-medium"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
