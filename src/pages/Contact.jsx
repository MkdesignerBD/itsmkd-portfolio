import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mofijulProfile from "../assets/about/mofijul-profile.jpg";
import BackToTop from "../components/BackToTop";

// Reusable scroll-driven animated divider line
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

export default function Contact() {
  const { scrollYProgress } = useScroll();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    source: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://formspree.io/f/xreyaqzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          service: "",
          source: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full h-[56px] rounded-xl border border-white/20 bg-transparent px-5 text-[16px] text-white outline-none placeholder:text-white/30 focus:border-[#ED502C] focus:ring-1 focus:ring-[#ED502C] transition-colors";

  const labelBase = "text-[16px] text-white/80 mb-3 block";

  return (
    <div className="bg-[#161616] text-white min-h-screen selection:bg-[#ED502C]/30 selection:text-white">
      {/* 1. Header Section */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-28 md:pt-[130px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[840px]"
        >
          <h1 className="leading-[1.08] tracking-tight">
            <span className="block text-[28px] sm:text-[50px] md:text-[58px] font-medium text-white">
              Not sure where to start?
            </span>
            <span className="block text-[28px] sm:text-[50px] md:text-[58px] font-thin text-[#666666] mt-1">
              A message is a good first step.
            </span>
          </h1>

          <p className="mt-6 text-[16px] text-white/60">
            Prefer direct email? Reach out at{" "}
            <a
              href="mailto:contact@itsmkd.com"
              className="text-white hover:text-[#ED502C] underline underline-offset-4 transition-colors font-medium"
            >
              contact@itsmkd.com
            </a>
          </p>
        </motion.div>

        {/* 2. Main Layout: Form on Left, Picture on Right (inspired by cajva.com) */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Clean Minimal Form (7 cols) */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={onSubmit}
            className="lg:col-span-7 space-y-7"
          >
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelBase}>Name*</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className={inputBase}
                  required
                />
              </div>

              <div>
                <label className={labelBase}>Email*</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Your email address"
                  className={inputBase}
                  required
                />
              </div>
            </div>

            {/* Row 2: Service */}
            <div>
              <label className={labelBase}>What service are you interested in?</label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={`${inputBase} appearance-none cursor-pointer pr-12`}
                >
                  <option value="" className="bg-[#1e1e1e] text-white/50">
                    Select a service (Listing Images, A+ Content, Storefront...)
                  </option>
                  <option value="listing" className="bg-[#1e1e1e] text-white">
                    Amazon Listing Images
                  </option>
                  <option value="ebc" className="bg-[#1e1e1e] text-white">
                    A+ Content (EBC)
                  </option>
                  <option value="storefront" className="bg-[#1e1e1e] text-white">
                    Brand Storefront &amp; Story
                  </option>
                  <option value="rendering" className="bg-[#1e1e1e] text-white">
                    3D Product Rendering &amp; Manipulation
                  </option>
                  <option value="other" className="bg-[#1e1e1e] text-white">
                    Other / Full Brand Package
                  </option>
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Row 3: Source */}
            <div>
              <label className={labelBase}>How did you find me?</label>
              <div className="relative">
                <select
                  name="source"
                  value={form.source}
                  onChange={onChange}
                  className={`${inputBase} appearance-none cursor-pointer pr-12`}
                >
                  <option value="" className="bg-[#1e1e1e] text-white/50">
                    Select an option
                  </option>
                  <option value="google" className="bg-[#1e1e1e] text-white">
                    Google Search
                  </option>
                  <option value="social" className="bg-[#1e1e1e] text-white">
                    Social Media (Behance, Instagram, Facebook, X)
                  </option>
                  <option value="referral" className="bg-[#1e1e1e] text-white">
                    Referral / Recommendation
                  </option>
                  <option value="marketplace" className="bg-[#1e1e1e] text-white">
                    Marketplace (Fiverr / Upwork)
                  </option>
                  <option value="other" className="bg-[#1e1e1e] text-white">
                    Other
                  </option>
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className={labelBase}>How can I help you?*</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Describe your project, timeline, or product links..."
                className="w-full min-h-[190px] rounded-xl border border-white/20 bg-transparent px-5 py-4 text-[16px] text-white outline-none placeholder:text-white/30 focus:border-[#ED502C] focus:ring-1 focus:ring-[#ED502C] transition-colors resize-none"
                required
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-[#ED502C] text-[16px]">
                ✓ Message sent successfully. I will get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-[16px]">
                Something went wrong. Please try again or email directly at contact@itsmkd.com.
              </p>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto h-[56px] px-10 rounded-xl border border-white/30 text-white hover:border-[#ED502C] hover:bg-[#ED502C] transition-all cursor-pointer font-medium text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>

          {/* Right Column: Profile Picture Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="w-full max-w-[480px] rounded-[24px] overflow-hidden border border-white/10 bg-[#181818] shadow-2xl">
              <div className="w-full h-[520px] sm:h-[580px] overflow-hidden bg-white/5">
                <img
                  src={mofijulProfile}
                  alt="Mofijul Islam - Product Visuals Designer"
                  className="w-full h-full object-cover object-top block hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 bg-[#181818] border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-[17px] font-medium">Mofijul Islam (MKD)</h3>
                  <p className="text-[#888888] text-[13px] mt-0.5">Head of Designer · Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider: Scroll-driven animated line before Footer */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] mt-24 md:mt-32 pb-6 md:pb-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      <BackToTop />
    </div>
  );
}
