import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What kind of design work do you do?",
    a: "I create product visuals for e-commerce—gallery/listing images, enhanced content (A+/EBC), and brand-focused marketing visuals designed to improve clarity and conversions.",
  },
  {
    q: "What is your main area of focus?",
    a: "My main focus is product presentation: clean composition, readable benefits, consistent style, and visuals that help customers make faster buying decisions.",
  },
  {
    q: "Do you follow a specific design style?",
    a: "I adapt to your brand. Most of my work leans clean and modern, with strong hierarchy and minimal clutter—always optimized for the platform and audience.",
  },
  {
    q: "Do you work with specific platforms only?",
    a: "I primarily design for Amazon and other major marketplaces, but the same visual principles apply to Shopify, Etsy, and brand websites as well.",
  },
  {
    q: "How can I start a project with you?",
    a: "Send your product details and goals. I’ll review, propose a direction, and we’ll confirm scope, timeline, and deliverables before starting.",
  },
];

function PlusIcon({ open }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white/60 grid place-items-center">
      <div className="relative w-4 h-4">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/90" />
        <span
          className={[
            "absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/90 transition-transform duration-200",
            open ? "scale-y-0" : "scale-y-100",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faqs" className="relative bg-black overflow-hidden">
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07)_0%,rgba(11,11,11,0.92)_60%,rgba(11,11,11,1)_100%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        {/* Label */}
        <p className="text-white/45 text-[15px] md:text-[16px] tracking-wide uppercase">
          FAQS
        </p>

        {/* Heading */}
        <h2 className="mt-6 sm:mt-8 leading-[1.08]">
          <span className="block text-white text-[28px] sm:text-[40px] md:text-[54px] font-medium tracking-tight">
            Before we get started,
          </span>
          <span className="block text-[#5C5C5C] text-[28px] sm:text-[40px] md:text-[54px] font-thin tracking-tight">
            here are a few things you might want to know.
          </span>
        </h2>

        {/* Accordion */}
        <div className="mt-10 md:mt-14">
          {faqs.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <div key={item.q} className="border-b border-white/35">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full py-6 sm:py-10 flex items-center justify-between gap-4 sm:gap-6 text-left"
                >
                  <span className="text-white text-[19px] sm:text-[28px] md:text-[34px] font-medium">
                    {item.q}
                  </span>
                  <div className="shrink-0">
                    <PlusIcon open={open} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 sm:pb-10 pr-4 sm:pr-14 text-white/70 text-[15px] sm:text-[18px] leading-[1.6] max-w-[980px]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
