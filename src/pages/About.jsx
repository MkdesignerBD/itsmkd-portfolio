import { motion, useScroll, useTransform } from "framer-motion";
import mofijulProfile from "../assets/about/mofijul-profile.jpg";
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

const experiences = [
  {
    period: "2025-Present",
    role: "Head of Designer",
    company: "Styleteck Innovation LTD",
    location: "Dhaka, Bangladesh",
    points: [
      "Managing graphics design project from concept to reality.",
      "Producing new product design concept and ideas for clients from various ecommerce platform like amazon, ebay and shopify.",
      "Delegating tasks to the other members of the team and help them where needed to complete the tasks.",
      "Developing various marketing programs including brand logo, product infographics and lifestyle images, newsletters, EBC content and presentation.",
    ],
  },
  {
    period: "2019-2024",
    role: "Junior Graphic Designer",
    company: "Gadget BD",
    location: "Dhaka, Bangladesh",
    points: [
      "Managing end-to-end graphic design tasks for a fast-paced ecommerce brand.",
      "Creating product visuals including main images, infographics, and promotional creatives for online sales.",
      "Designing banners, social media visuals, and campaign assets aligned with brand identity.",
      "Collaborating closely with marketing and content teams to support product launches and offers.",
      "Maintaining visual consistency across product listings, website content, and digital campaigns.",
      "Optimizing product images for clarity, presentation, and customer engagement.",
    ],
  },
  {
    period: "2016-Present",
    role: "Freelancer Graphics Designer",
    company: "Gadget BD",
    location: "Dhaka, Bangladesh",
    points: [
      "Designing product display image, info graphic image, lifestyle image and comparison images for amazon sellers.",
      "Designing product EBC and other graphical content for marketing purpose as per client’s requirements.",
    ],
  },
];

export default function About() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#161616] text-white min-h-screen">
      {/* 1. Who is MKD / Story Section */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-28 md:pt-[130px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#888888] text-[18px] font-normal tracking-wide">
            WHO IS MKD
          </p>

          <h1 className="mt-4 md:mt-5 text-white font-medium text-[48px] sm:text-[56px] md:text-[64px] leading-[1.05] tracking-tight">
            I think, therefore . . .
          </h1>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[478px_612px] justify-between gap-12 lg:gap-[80px] items-start">
          {/* Left Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[478px]"
          >
            <div className="w-full max-w-[478px] h-auto md:h-[642px] rounded-[23px] overflow-hidden bg-white/5 shadow-2xl">
              <img
                src={mofijulProfile}
                alt="Mofijul Islam - Product Visuals Designer"
                className="w-full h-full object-cover block rounded-[23px]"
              />
            </div>
          </motion.div>

          {/* Right Column: Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-[16px] leading-[1.8] font-normal space-y-6 max-w-[612px]"
          >
            <p>
              ...I design.And I’ve been doing it for years now. But if I’m being honest, it didn’t start with clients or big projects—it started with curiosity. A screen, a few tools, and that quiet obsession of wanting things to look just right.
            </p>

            <p>
              Back then, I didn’t know what “product visuals” or “design systems” were. I just knew that spacing mattered, alignment mattered, and that one tiny detail could change how something feels. That’s when I realized—design isn’t decoration, it’s communication.
            </p>

            <p>
              As time went on, I chose design not just as a hobby, but as a craft. I studied, experimented, failed a bit, learned a lot, and slowly found my rhythm. Somewhere along the way, product visuals became my focus—because I enjoy turning ordinary products into something people actually want to look at.
            </p>

            <p>
              Of course, confidence didn’t arrive overnight. Putting my work out there, dealing with clients, understanding business—those were real challenges. But design teaches you something important: you improve by doing. Each project showed me what to fix, what to ask, and how to deliver better results the next time.
            </p>

            <p>
              Today, I don’t just create visuals that look good. I create visuals that make sense, feel clear, and work where they’re meant to—especially in competitive online marketplaces. Every design is thought through, tested mentally, and refined until it feels right.
            </p>

            <div className="py-1 space-y-1">
              <p className="italic text-white/85 text-[16px]">
                I used to believe you needed talent, confidence, and experience before starting.
              </p>
              <p className="font-bold text-white text-[16px]">
                Turns out, you get those by starting.
              </p>
            </div>

            <p>
              So if you’re building something and want it to be seen clearly, understood quickly, and remembered longer—I’d love to be part of that journey.
            </p>

            <div className="pt-2 space-y-1 text-white text-[16px]">
              <p className="font-medium text-white">My name is Mofijul Islam.</p>
              <p>I design product visuals.</p>
              <p>And yes, I still get excited over clean layouts and perfectly balanced spacing.</p>
            </div>
          </motion.div>
        </div>

        {/* Section Divider 1: Scroll-driven animated line */}
        <div className="mt-24 md:mt-32">
          <GlobalScrollDivider scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* 2. Experience Section */}
      <section className="relative max-w-[1366px] mx-auto px-6 md:px-[98px] pt-16 md:pt-20 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#888888] text-[16px] font-normal tracking-wide">
            Experience
          </p>

          <h2 className="mt-4 md:mt-5 leading-[1.05] tracking-tight">
            <span className="block text-white text-[42px] sm:text-[54px] md:text-[64px] font-medium">
              Experience isn’t just about time —
            </span>
            <span className="block text-[#5C5C5C] text-[42px] sm:text-[54px] md:text-[64px] font-thin">
              it’s about what you learn along the way.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-20 space-y-14 md:space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="text-[#A6A6A6] text-[18px] font-normal">
                {exp.period}
              </div>

              <h3 className="mt-1 text-white text-[28px] font-bold tracking-tight">
                {exp.role}
              </h3>

              <div className="mt-0.5 text-[#A6A6A6] text-[18px] font-normal">
                {exp.company}/ {exp.location}
              </div>

              <div className="mt-6 md:mt-7 space-y-2 max-w-[880px]">
                {exp.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-7 sm:gap-8 text-white/80 text-[16px] leading-[1.65]"
                  >
                    <span className="text-white/35 text-[14px] select-none shrink-0 mt-0.5">
                      ·
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Divider 2: Scroll-driven animated line */}
        <div className="mt-24 md:mt-32 pb-6 md:pb-10">
          <GlobalScrollDivider scrollYProgress={scrollYProgress} />
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
