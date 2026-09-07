import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import BackToTop from "../components/BackToTop";

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

const coreServices = [
  {
    id: "01",
    tag: "High Impact",
    title: "Amazon Listing Image Design",
    subtitle: "Built to outrank competitors and boost click-to-sale conversion rates.",
    description:
      "A complete, research-backed 6 to 7 image listing stack engineered around buyer psychology, overcoming objections, and highlighting product superiority.",
    deliverables: [
      "Hero Main Image with strict Amazon TOS compliance",
      "Key Benefits & Problem-Solving Infographics",
      "High-End Lifestyle Photo Manipulation",
      "Dimensions, Sizing & Technical Breakdown",
      "Comparison Chart vs. Competitor Alternatives",
      "Packaging, Quality Guarantee & Unboxing Views",
    ],
    actionLabel: "Explore Listing Gallery",
    actionLink: "/work?tab=listing",
  },
  {
    id: "02",
    tag: "Brand Authority",
    title: "A+ Content / EBC Design",
    subtitle: "Immersive storytelling that builds trust and maximizes basket size.",
    description:
      "Custom-designed Enhanced Brand Content stacks built to communicate value, decrease bounce rate, educate shoppers, and elevate your brand credibility.",
    deliverables: [
      "Full-Length Visual Brand Modules & Header Banners",
      "Cross-Selling Product Comparison Matrices",
      "Technical Feature & Material Deep Dives",
      "Mobile-First Responsive Layout Optimization",
      "Persuasive Visual Pacing & Story Architecture",
      "Direct Upload-Ready High-Res Export Files",
    ],
    actionLabel: "Explore A+ Showcase",
    actionLink: "/work?tab=ebc",
  },
  {
    id: "03",
    tag: "Brand Ecosystem",
    title: "Storefront & Brand Story",
    subtitle: "Turn Amazon into your brand's flagship digital flagship boutique.",
    description:
      "Cohesive multi-page Amazon Storefronts and Brand Story carousel modules that cultivate repeat buyers, introduce your entire product catalog, and drive average order value.",
    deliverables: [
      "Multi-Page Store Navigation & Architecture",
      "Category Headers & Promotional Campaign Banners",
      "Amazon Brand Story Carousel Modules",
      "Curated Product Grids & Collection Showcases",
      "Unified Brand Typography & Visual Identity",
      "Desktop & Mobile Cross-Platform Tuning",
    ],
    actionLabel: "Inquire Custom Storefront",
    actionLink: "/contact",
  },
  {
    id: "04",
    tag: "Photorealism",
    title: "3D Rendering & Photo Retouching",
    subtitle: "Flawless product visuals without the limitations of traditional photoshoots.",
    description:
      "From CAD models to photorealistic renders, complex product compositing, lighting adjustments, and texture enhancement for products that demand perfection.",
    deliverables: [
      "Photorealistic 3D Modeling & Angle Extraction",
      "Material, Fabric, Metal & Liquid Texture Shading",
      "Realistic Studio & Natural Lighting Simulation",
      "Advanced Reflection & Dynamic Shadow Synthesis",
      "Packaging, Bottle & Label Digital Application",
      "Complex Photo Compositing & Cleanup",
    ],
    actionLabel: "Browse Visual Gallery",
    actionLink: "/gallery",
  },
];



const advantages = [
  {
    title: "Conversion-First Mindset",
    desc: "We don't design for decoration. Every callout, layout, and visual decision is engineered to improve click-through and sales conversion rates.",
  },
  {
    title: "Amazon TOS Compliant",
    desc: "100% compliant with Amazon's image standards, dimensions, whitespace rules, and mobile readability requirements.",
  },
  {
    title: "Direct & Fast Collaboration",
    desc: "Direct communication with the designer, clear delivery timelines, and seamless revisions to keep your product launch on track.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.itsmkd.com/service/#service",
      "name": "MKD E-Commerce Design Services",
      "url": "https://www.itsmkd.com/service",
      "description": "Professional Amazon Listing Image Design, A+ EBC Content, Brand Storefronts, and 3D Product Mockups by Mofijul Islam (MKD).",
      "provider": {
        "@type": "Person",
        "name": "Mofijul Islam (MKD)",
        "url": "https://www.itsmkd.com"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "E-Commerce Creative Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Amazon Listing Image Design",
              "description": "Research-backed 6 to 7 image listing stack engineered around buyer psychology and conversion rate optimization."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Amazon A+ Content (EBC)",
              "description": "Premium brand story modules, comparison charts, and editorial desktop/mobile layouts for Amazon sellers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D Product Rendering & Modeling",
              "description": "Photorealistic 3D product CAD renders, exploded mechanical views, and studio lighting mockups."
            }
          }
        ]
      }
    }
  ]
};

export default function Service() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#161616] text-white min-h-screen selection:bg-[#ED502C]/30 selection:text-white">
      <SEO
        title="Services — Amazon Listing Design, EBC A+ Content & 3D Mockups | MKD"
        description="Comprehensive creative services for global e-commerce brands: Amazon listing image sets, A+ EBC modules, storefront branding, and photorealistic 3D product mockups."
        keywords="Hire Amazon Designer, Amazon EBC Design Services, 3D Product Rendering Service, Amazon Listing Optimization, MKD Services"
        canonical="/service"
        schema={serviceSchema}
      />
      {/* 1. Hero / Header Section */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-28 md:pt-[130px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[920px]"
        >
          <p className="text-[#888888] text-[15px] font-normal tracking-wide">
            Services &amp; Solutions
          </p>

          <h1 className="mt-4 tracking-tight leading-[1.1]">
            <span className="block text-white text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-medium">
              High-Converting Visuals
            </span>
            <span className="block text-[#666666] text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-thin mt-1 lg:whitespace-nowrap tracking-normal">
              Engineered for Amazon &amp; E-Commerce.
            </span>
          </h1>

          <p className="mt-8 text-white text-[16px] sm:text-[18px] font-medium tracking-tight">
            Strategic visual solutions built to capture attention, communicate product value instantly, and drive real conversions.
          </p>

          <p className="mt-3 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-[1.75] max-w-[700px] font-normal">
            We analyze your market, study buyer psychology, and craft structured visual assets that drive clicks, reduce bounce rates, and turn casual browsers into loyal customers.
          </p>
        </motion.div>
      </section>

      {/* 2. Core 4 Services Grid */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-14 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {coreServices.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative rounded-[20px] bg-[#181818] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#ED502C]/40 hover:shadow-[0_20px_40px_rgba(237,80,44,0.1)] transition-all duration-300"
            >
              <div>
                {/* Top Badge & Numbering */}
                <div className="flex items-center justify-between">
                  <span className="text-white/30 text-sm font-mono tracking-wider">
                    {srv.id}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-[#ED502C]/10 text-[#ED502C] border border-[#ED502C]/20">
                    {srv.tag}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <h2 className="mt-6 text-white text-[24px] sm:text-[28px] font-medium tracking-tight">
                  {srv.title}
                </h2>
                <p className="mt-2 text-[#888888] text-[14px] sm:text-[15px] font-normal">
                  {srv.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-[#a6a6a6] text-[15px] leading-relaxed">
                  {srv.description}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                  {srv.deliverables.map((d, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-3 text-white/80 text-[14px] sm:text-[15px]"
                    >
                      <span className="text-[#ED502C] text-sm shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6">
                <Link
                  to={srv.actionLink}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-[#ED502C] transition-colors"
                >
                  <span>{srv.actionLabel}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 4. The MKD Advantage */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[600px] mx-auto"
        >
          <p className="text-[#888888] text-[15px] font-normal tracking-wide uppercase">
            The Advantage
          </p>
          <h2 className="mt-3 text-white text-[32px] sm:text-[38px] md:text-[44px] font-medium tracking-tight">
            Why Brands Choose MKD
          </h2>
          <p className="mt-3 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-relaxed">
            Delivering results that go beyond surface aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[16px] bg-[#181818]/60 border border-white/10 p-8 hover:border-white/20 transition-colors"
            >
              <h3 className="text-white text-[20px] font-medium tracking-tight">
                {adv.title}
              </h3>
              <p className="mt-3 text-[#a6a6a6] text-[15px] leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Call to Action (CTA) Box */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[20px] bg-gradient-to-b from-[#1c1c1c] to-[#141414] border border-white/10 p-10 sm:p-14 md:p-18 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <p className="text-[#ED502C] text-sm font-medium tracking-widest uppercase">
            Let's Collaborate
          </p>
          <h2 className="mt-4 text-white text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-tight leading-tight">
            Ready to scale your product sales?
          </h2>
          <p className="mt-4 text-[#a6a6a6] text-[15px] sm:text-[16px] max-w-[580px] mx-auto leading-relaxed">
            Let's create high-impact visuals that turn your products into best-sellers. Share your project requirements and let's get started.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-[#ED502C] hover:bg-[#d84422] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_10px_30px_rgba(237,80,44,0.3)] hover:scale-105 active:scale-95 cursor-pointer text-[15px]"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Section Divider: Scroll-driven animated line before Footer */}
      <div className="max-w-[1366px] mx-auto px-6 md:px-[98px] mt-24 md:mt-32 pb-6 md:pb-10">
        <GlobalScrollDivider scrollYProgress={scrollYProgress} />
      </div>

      <BackToTop />
    </div>
  );
}
