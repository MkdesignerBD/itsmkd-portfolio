import aboutPhoto from "../assets/home/about-photo.jpeg";

export default function WelcomeSection() {
  return (
    <section id="about" className="relative bg-black overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-10 pb-16">
        {/* top label */}
        <div className="text-white/90 text-[16px] md:text-[18px]">Welcome</div>

        {/* main heading */}
        <h2 className="mt-6 sm:mt-8 text-white font-medium leading-[1.08] text-[28px] sm:text-[40px] md:text-[54px] tracking-tight">
          You didn’t land on my page by accident.
        </h2>

        {/* ghost line behind */}
        <div className="relative mt-2">
          <div className="select-none pointer-events-none text-[28px] sm:text-[40px] md:text-[54px] leading-[1.08] font-thin text-[#5C5C5C] tracking-tight">
            Maybe this is where your next project begins.
          </div>
        </div>

        {/* content grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-[520px_1fr] gap-8 md:gap-10 items-start">
          {/* left text */}
          <div className="text-white/90 flex flex-col justify-between md:h-[420px]">
            <p className="text-[16px] sm:text-[20px] leading-[1.65]">
              I work with brands and businesses to create product visuals that are not just attractive, but strategic.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              From listing images to enhanced visual content, I focus on clarity, storytelling, and conversion.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              And yes, I enjoy working on different types of design challenges.
            </p>

            <div className="mt-8 md:mt-0">
              <a
                href="/about"
                className="inline-flex items-center justify-center w-full sm:w-[360px] h-[52px] sm:h-[56px] rounded-xl border border-white/35 text-white/90 text-[16px] sm:text-[18px] hover:border-white/60 transition-colors"
              >
                About me
              </a>
            </div>
          </div>

          {/* right image */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-[680px] max-w-full rounded-3xl overflow-hidden bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="w-full h-[380px] sm:h-[440px] md:h-[480px] overflow-hidden">
                <img
                  src={aboutPhoto}
                  alt="Mofijul Islam sketching"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "36% 75%",
                    transform: "scale(1.22)",
                    transformOrigin: "38% 72%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
