import { motion } from "framer-motion";
import aboutPhoto from "../assets/home/about-photo.jpeg";

export default function WelcomeSection() {
  return (
    <section id="about" className="relative bg-black overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-10 pt-10 pb-16">
        {/* top label */}
        <div className="text-white/90 text-[18px]">Welcome</div>

        {/* main heading */}
        <h2 className="mt-8 text-white font-medium leading-[1.05] text-[48px] md:text-[54px]">
          You didn’t land on my page by accident.
        </h2>

        {/* ghost line behind */}
        <div className="relative mt-2">
          <div className="select-none pointer-events-none text-[48px] md:text-[54px] leading-[1.05] font-thin text-[#5C5C5C]">
            Maybe this is where your next project begins.
          </div>
        </div>

        {/* content grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[520px_1fr] gap-10 items-start">
          {/* left text */}
          <div className="text-white/90 flex flex-col justify-between md:h-[420px]">
            <p className="text-[20px] leading-[1.55]">
              I work with brands and businesses to create product
              <br />
              visuals that are not just attractive, but strategic.
              <br />
              <br />
              From listing images to enhanced visual content, I focus
              <br />
              on clarity, storytelling, and conversion.
              <br />
              <br />
              And yes, I enjoy working on different types of design
              <br />
              challenges.
            </p>

            <div className="mt-8 md:mt-0">
              <a
                href="/about"
                className="inline-flex items-center justify-center w-[360px] h-[56px] rounded-xl border border-white/35 text-white/90 text-[18px] hover:border-white/60 transition-colors"
              >
                About me
              </a>
            </div>
          </div>

          {/* right image */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className="md:justify-self-end"
          >
            <div className="w-[680px] max-w-full rounded-3xl overflow-hidden bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <img
                src={aboutPhoto}
                alt=""
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
