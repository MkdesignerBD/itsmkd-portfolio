import { useState } from "react";

function ProcessCard({ s }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative bg-[#e9e9e9] hover:bg-white rounded-[28px] sm:rounded-[34px] min-h-[400px] sm:h-[520px] p-7 sm:p-10 flex flex-col justify-between overflow-hidden border border-black/[0.04] hover:border-[#ff7a2f]/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08),0_0_40px_rgba(255,122,47,0.25)] cursor-pointer"
    >
      {/* Interactive cursor spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[34px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 122, 47, 0.18), transparent 70%)`,
        }}
      />

      {/* Top ambient warm glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#ff7a2f]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 text-black/85 h-[110px]">
        <div className="text-[22px] font-medium transition-colors duration-300 group-hover:text-[#ff7a2f]">
          {s.no}
        </div>
        <div className="mt-2 text-[26px] leading-[1.1] font-medium transition-colors duration-300 group-hover:text-black">
          {s.title}
        </div>
      </div>

      <div className="flex-1" />

      <div className="relative z-10 h-[160px]">
        <p className="text-[16px] leading-[1.55] text-black/55 group-hover:text-black/80 transition-colors duration-300 whitespace-pre-line">
          {s.text}
        </p>
      </div>
    </div>
  );
}

export default function WorkProcessSection() {
  const steps = [
    {
      no: "01.",
      title: "Understand",
      text: "I begin by understanding your\nproduct, brand, and goals.\nThis step ensures clarity\nbefore any design decisions\nare made.",
    },
    {
      no: "02.",
      title: "Explore",
      text: "I research, plan, and define\nthe visual direction. This\nhelps shape a clear structure\nand creative approach.",
    },
    {
      no: "03.",
      title: "Design",
      text: "Ideas turn into visuals.\nI focus on clarity, balance,\nand purposeful design\nthroughout the process.",
    },
    {
      no: "04.",
      title: "Refine & Deliver",
      text: "I refine details based on\nfeedback and finalize\neverything with care.\nClean, organized files are\ndelivered, ready to use.",
    },
  ];

  return (
    <section id="workprocess" className="bg-[#f4f4f4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <p className="text-[16px] md:text-[18px] text-black/70">Work Process</p>

        <h2 className="mt-6 leading-[1.08]">
          <span className="block text-[28px] sm:text-[40px] md:text-[54px] font-medium text-black/75 tracking-tight">
            Good design doesn’t happen by accident.
          </span>
          <span className="block text-[28px] sm:text-[40px] md:text-[54px] font-light text-black/35 tracking-tight">
            Here’s how I approach every project.
          </span>
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s) => (
            <ProcessCard key={s.no} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
