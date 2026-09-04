import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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

const sections = [
  {
    num: "01",
    title: "Information We Collect",
    content: [
      "When you submit an inquiry through our contact form or contact us via email, we collect basic contact information including your name, email address, company or brand name, and project specifications.",
      "We do not collect unnecessary personal data or track sensitive private details.",
    ],
  },
  {
    num: "02",
    title: "How Your Information Is Used",
    content: [
      "The information provided is used exclusively to evaluate project requirements, prepare proposals, deliver commissioned design assets, and communicate effectively throughout the design process.",
      "We never sell, rent, trade, or distribute your personal details or brand assets to any third parties or marketing lists.",
    ],
  },
  {
    num: "03",
    title: "Confidentiality & Pre-Launch Protection",
    content: [
      "We respect the sensitivity of unreleased products, new Amazon patent filings, and proprietary product concepts.",
      "Any unreleased product photos, CAD models, or proprietary documentation shared with us remain strictly confidential and will never be shared or disclosed prior to your official product launch.",
    ],
  },
  {
    num: "04",
    title: "Third-Party Services",
    content: [
      "Our website utilizes reliable third-party service providers such as Formspree for transmitting contact form inquiries securely over encrypted HTTPS connections.",
      "These third-party providers process data solely according to their respective privacy standards and in compliance with global data security frameworks.",
    ],
  },
  {
    num: "05",
    title: "Data Retention & Your Rights",
    content: [
      "We retain client communications and project archives solely for historical reference, future design revisions, or warranty support.",
      "You have the right to request a copy of your stored records, ask for updates, or request complete deletion of your contact records at any time by emailing contact@itsmkd.com.",
    ],
  },
  {
    num: "06",
    title: "Contact & Inquiries",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us directly:",
      "Email: contact@itsmkd.com | Location: Dhaka, Bangladesh",
    ],
  },
];

export default function Privacy() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#161616] text-white min-h-screen selection:bg-[#ED502C]/30 selection:text-white">
      {/* Header */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-28 md:pt-[130px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px]"
        >
          <p className="text-[#888888] text-[15px] font-normal tracking-wide uppercase">
            Legal
          </p>

          <h1 className="mt-4 tracking-tight leading-[1.1]">
            <span className="block text-white text-[34px] sm:text-[44px] md:text-[52px] font-medium">
              Privacy Policy
            </span>
            <span className="block text-[#666666] text-[26px] sm:text-[36px] md:text-[42px] font-thin mt-1 tracking-normal">
              Your privacy and product confidentiality are protected.
            </span>
          </h1>

          <p className="mt-6 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-relaxed max-w-[720px]">
            We value your trust and are committed to protecting your personal information and brand assets. This policy explains how we handle your data with transparency and care.
          </p>

          <p className="mt-3 text-xs text-white/40 font-mono">
            Last Updated: January 2026
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-14 md:pt-20">
        <div className="max-w-[960px] space-y-10">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[20px] bg-[#181818] border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#ED502C] font-mono text-sm font-medium">
                  {sec.num}
                </span>
                <h2 className="text-white text-[20px] sm:text-[22px] font-medium tracking-tight">
                  {sec.title}
                </h2>
              </div>
              <div className="mt-5 space-y-3.5 text-[#a6a6a6] text-[15px] leading-relaxed">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Direct Contact Callout */}
          <div className="p-8 rounded-[20px] bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-[18px] font-medium">Need an NDA or custom confidentiality agreement?</h3>
              <p className="text-[#888888] text-sm mt-1">We are happy to review and sign mutual non-disclosure agreements before project kickoff.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3 rounded-full bg-[#ED502C] hover:bg-[#d84422] text-white text-sm font-medium transition-all shadow-md"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] mt-24 md:mt-32 pb-6 md:pb-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      <BackToTop />
    </div>
  );
}
