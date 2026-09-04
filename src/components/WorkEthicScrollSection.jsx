import img1 from "../assets/home/work-ethic.jpg";
import img2 from "../assets/home/work-ethic2.jpg";
import img3 from "../assets/home/work-ethic3.jpg";

export default function WorkEthicScrollSection({ children }) {
  const slides = [
    {
      kicker: "LISTING IMAGE",
      title: "Gallery Image",
      text: "A curated collection of product visuals designed to highlight features, communicate benefits, and guide viewers through the product story. Each image is crafted with clarity, consistency, and conversion in mind.",
      img: img1,
      link: "/work?tab=listing",
    },
    {
      kicker: "A+ CONTENT",
      title: "Enhanced Visual Content",
      text: "Modular A+ visuals for product storytelling—benefits, comparisons, and feature callouts. Designed to elevate brand perception, reduce bounce rates, and boost conversions across every listing.",
      img: img2,
      link: "/work?tab=ebc",
    },
    {
      kicker: "BRAND GRAPHIC",
      title: "Logo Design",
      text: "Marketing creatives designed for campaigns: ads, banners, social, and landing visuals. Cohesive visual language that drives engagement and reinforces your brand identity.",
      img: img3,
      link: "/work",
    },
  ];

  return (
    <section
      id="workethics"
      className="relative bg-[#f4f4f4] text-black pt-8 md:pt-10 pb-0"
    >
      {/* PINNED HEADER (Matching attached screenshot) */}
      <div className="sticky top-4 sm:top-6 md:top-8 z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 md:px-12 mb-4 md:mb-8 pointer-events-none">
        <p className="text-black/55 text-[13px] sm:text-[15px] md:text-[17px] font-normal mb-1.5">
          Work Ethic
        </p>

        <h2 className="text-[26px] sm:text-[42px] md:text-[50px] leading-[1.08] tracking-tight">
          <span className="block font-semibold text-black">
            I’m known for product visuals
          </span>
          <span className="block font-light text-black/35">
            because I design with sales in mind.
          </span>
        </h2>
      </div>

      {/* VERTICAL STICKY OVERLAPPING CARDS (Direct children of section so Card 3 fully overlaps) */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="sticky top-[80px] sm:top-[120px] md:top-[205px] max-w-[1360px] w-full mx-auto px-4 sm:px-6 md:px-12 mb-8 md:mb-14 pointer-events-auto"
          style={{
            zIndex: 15 + i * 5,
          }}
        >
          <div className="w-full bg-white rounded-[24px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/[0.04] p-5 sm:p-8 md:p-12 lg:p-14 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-6 md:gap-12 lg:gap-16 items-center">
              {/* Left: Product Image */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[200px] sm:max-w-[320px] md:max-w-[480px] aspect-square rounded-[18px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Content & Vertical Progress Indicator */}
              <div className="flex items-center justify-between gap-6 lg:gap-12">
                <div className="flex-1 max-w-[560px]">
                  {/* Kicker */}
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-[0.18em] uppercase text-black/40">
                    {s.kicker}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 sm:mt-3 text-[24px] sm:text-[36px] md:text-[44px] font-semibold text-black tracking-tight leading-[1.1]">
                    {s.title}
                  </h3>

                  {/* Thin Horizontal Divider */}
                  <div className="mt-4 sm:mt-5 mb-4 sm:mb-7 h-[1px] bg-black/[0.08] w-full" />

                  {/* Description Paragraph */}
                  <p className="text-[14px] sm:text-[16px] md:text-[17px] leading-[1.6] md:leading-[1.68] text-black/75 font-normal">
                    {s.text}
                  </p>

                  {/* Case Studies Button */}
                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <a
                      href={s.link}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3 rounded-[12px] border border-black/25 bg-white text-black/85 text-[14px] sm:text-[15px] font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                    >
                      Case Studies
                    </a>
                  </div>
                </div>

                {/* Vertical Progress Bar Indicator matching Image 2 */}
                <div className="hidden lg:flex flex-col items-center justify-center pl-4 pr-2">
                  <div className="w-[2px] h-[190px] bg-black/10 rounded-full relative overflow-hidden">
                    <div
                      className="absolute left-0 w-full bg-black/80 rounded-full transition-all duration-200"
                      style={{
                        height: `${100 / slides.length}%`,
                        top: `${(i / slides.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* OVERLAPPING TESTIMONIAL SECTION */}
      {children && (
        <div className="relative z-40 w-full mt-10 md:mt-14">
          {children}
        </div>
      )}
    </section>
  );
}




