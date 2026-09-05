import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
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
    title: "Overview & Scope of Services",
    content: [
      "MKD (Mofijul Islam) provides specialized e-commerce graphic design services, including Amazon Listing Images, A+ Content (Enhanced Brand Content / EBC), Brand Storefronts, 3D Product Rendering, and Brand Visual Identity.",
      "Each project commences based on a mutually agreed scope, timeline, and deliverable list defined during project onboarding or via written communication.",
    ],
  },
  {
    num: "02",
    title: "Client Responsibilities & Assets",
    content: [
      "The client agrees to provide all necessary assets (such as high-resolution product photos, 3D CAD models, brand logos, dimensions, and marketing copy) required to execute the agreed work in a timely manner.",
      "The client affirms that they possess all legal rights, trademarks, and copyright permissions for any materials provided to MKD for use in the design project.",
    ],
  },
  {
    num: "03",
    title: "Intellectual Property & Commercial Rights",
    content: [
      "Upon full payment for the completed project, full exclusive commercial rights for the finalized visual assets are transferred to the client for commercial use, advertising, and online marketplace listings.",
      "MKD retains the right to display the completed non-confidential visual designs, 3D renders, and case studies in personal portfolios, Behance, and promotional platforms for showcase purposes.",
    ],
  },
  {
    num: "04",
    title: "Revisions & Project Scope",
    content: [
      "Every project includes reasonable revision cycles to fine-tune typography, color palettes, copy alignment, and visual layout to ensure client satisfaction.",
      "Major scope revisions or conceptual shifts requested after initial wireframes or concepts have been approved may require additional timeline and cost adjustments.",
    ],
  },
  {
    num: "05",
    title: "Payment Terms & Milestones",
    content: [
      "Project payment terms, milestones, and invoice schedules are agreed upon prior to project initiation.",
      "Final high-resolution export files (PNG, JPEG, WebP, or layered PSD where agreed) are delivered upon settlement of the final project milestone.",
    ],
  },
  {
    num: "06",
    title: "Platform Compliance & Liability",
    content: [
      "All designs are crafted to adhere strictly to current Amazon Image Guidelines and Terms of Service (TOS) at the time of creation.",
      "While we design for maximum conversion and compliance, marketplace algorithm changes, listing approvals, and third-party platform policies remain outside our direct control.",
    ],
  },
];

export default function Terms() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#161616] text-white min-h-screen selection:bg-[#ED502C]/30 selection:text-white">
      <SEO
        title="Terms & Conditions — MKD Official"
        description="Review the terms of service, project milestones, revision policies, and commercial usage rights for design services and tools provided by MKD."
        canonical="/terms"
      />
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
              Terms &amp; Conditions
            </span>
            <span className="block text-[#666666] text-[26px] sm:text-[36px] md:text-[42px] font-thin mt-1 tracking-normal">
              Clear standards for our creative collaboration.
            </span>
          </h1>

          <p className="mt-6 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-relaxed max-w-[720px]">
            These terms govern the visual design and creative services provided by MKD. By commissioning a project, you acknowledge and agree to the guidelines outlined below.
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

          {/* Questions Callout */}
          <div className="p-8 rounded-[20px] bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-[18px] font-medium">Have questions about these terms?</h3>
              <p className="text-[#888888] text-sm mt-1">We believe in transparent, friendly collaboration from day one.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3 rounded-full bg-[#ED502C] hover:bg-[#d84422] text-white text-sm font-medium transition-all shadow-md"
            >
              Contact Us →
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
