import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import BackToTop from "../components/BackToTop";

// 16 Random Gallery Cards from Gallery img-2.pdf
import card1 from "../assets/work/random-gallery/card-1.jpg";
import card2 from "../assets/work/random-gallery/card-2.jpg";
import card3 from "../assets/work/random-gallery/card-3.jpg";
import card4 from "../assets/work/random-gallery/card-4.jpg";
import card5 from "../assets/work/random-gallery/card-5.jpg";
import card6 from "../assets/work/random-gallery/card-6.jpg";
import card7 from "../assets/work/random-gallery/card-7.jpg";
import card8 from "../assets/work/random-gallery/card-8.jpg";
import card9 from "../assets/work/random-gallery/card-9.jpg";
import card10 from "../assets/work/random-gallery/card-10.jpg";
import card11 from "../assets/work/random-gallery/card-11.jpg";
import card12 from "../assets/work/random-gallery/card-12.jpg";
import card13 from "../assets/work/random-gallery/card-13.jpg";
import card14 from "../assets/work/random-gallery/card-14.jpg";
import card15 from "../assets/work/random-gallery/card-15.jpg";
import card16 from "../assets/work/random-gallery/card-16.jpg";

const galleryCards = [
  { id: 1, image: card1, title: "Yoga Mat - Thick Textured" },
  { id: 2, image: card2, title: "Yoga Mat - Take Anywhere" },
  { id: 3, image: card3, title: "Yoga Mat - Waterproof Clean" },
  { id: 4, image: card4, title: "Yoga Mat - All Ages" },
  { id: 5, image: card5, title: "USB-C Cable - 100W Speed" },
  { id: 6, image: card6, title: "USB-C Cable - 240W Force" },
  { id: 7, image: card7, title: "USB-C Cable - Apple Devices" },
  { id: 8, image: card8, title: "USB-C Cable - Smart Chip" },
  { id: 9, image: card9, title: "Balance Cushion - Relax Sitting" },
  { id: 10, image: card10, title: "Office Cushion - Relaxed Posture" },
  { id: 11, image: card11, title: "Exercise Ball - Skin Friendly" },
  { id: 12, image: card12, title: "Wire Stripper - Automatic" },
  { id: 13, image: card13, title: "Screen Cleaner - Built to Last" },
  { id: 14, image: card14, title: "Screen Cleaner - Stain Removal" },
  { id: 15, image: card15, title: "Bluetooth 5.0 - Stable Chip" },
  { id: 16, image: card16, title: "Fast Charging - Solid Copper" },
];

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

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      "@id": "https://itsmkd.com/gallery/#gallery",
      "url": "https://itsmkd.com/gallery",
      "name": "MKD Product Visuals & Lifestyle Gallery",
      "description": "Curated gallery of e-commerce infographics, product rendering, and feature graphics by Mofijul Islam (MKD).",
      "creator": {
        "@type": "Person",
        "name": "Mofijul Islam (MKD)",
        "url": "https://itsmkd.com"
      }
    }
  ]
};

export default function Gallery() {
  const { scrollYProgress } = useScroll();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#161616] text-white min-h-screen selection:bg-[#ED502C]/30 selection:text-white">
      <SEO
        title="Design Gallery — Curated E-Commerce & Product Visuals | MKD"
        description="Browse a curated visual showcase of product renders, lifestyle infographics, and packaging designs by Mofijul Islam (MKD)."
        keywords="E-commerce Gallery, Amazon Visual Showcase, Product Infographics, Packaging Portfolio, MKD Gallery"
        canonical="/gallery"
        schema={gallerySchema}
      />
      {/* 1. Header Section */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-28 md:pt-[130px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1100px]"
        >
          <p className="text-[#888888] text-[15px] font-normal tracking-wide">
            Case Study
          </p>

          <h1 className="mt-4 tracking-tight leading-[1.1]">
            <span className="block text-white text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-medium">
              I don’t know the exact number
            </span>
            <span className="block text-[#666666] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] font-thin mt-2 lg:whitespace-nowrap tracking-normal">
              of product gallery images I’ve designed.
            </span>
          </h1>

          <p className="mt-8 text-white text-[16px] sm:text-[18px] font-medium tracking-tight">
            And even if I did, that number wouldn’t really matter.
          </p>

          <p className="mt-3 text-[#a6a6a6] text-[15px] sm:text-[16px] leading-[1.75] max-w-[700px] font-normal">
            What matters is the process — creating hero visuals that clearly present products, communicate value instantly, and make a strong first impression.
          </p>
        </motion.div>
      </section>

      {/* 2. 16-Card Visual Grid (4 columns x 4 rows) */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[19px]">
          {galleryCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: (idx % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              onClick={() => setSelectedImage(card.image)}
              className="group cursor-pointer relative rounded-[16px] overflow-hidden bg-[#181818] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-[#ED502C]/40 hover:shadow-[0_20px_40px_rgba(237,80,44,0.15)] transition-all duration-300"
            >
              <div className="relative aspect-[278/385] w-full overflow-hidden bg-white/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle overlay & view prompt on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Click to Enlarge
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Divider: Scroll-driven animated line before Footer */}
        <div className="mt-24 md:mt-32 pb-6 md:pb-10">
          <GlobalScrollDivider scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] rounded-[16px] overflow-hidden shadow-2xl bg-[#181818] border border-white/20"
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery visual"
                className="max-h-[85vh] w-auto object-contain block mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                aria-label="Close image modal"
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
