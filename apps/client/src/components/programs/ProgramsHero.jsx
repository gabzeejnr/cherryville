import React from "react";



export default function ProgramsHero() {
  return (
    <section
      className="w-full py-24 px-6 relative overflow-hidden flex flex-col items-center text-center"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#d4f870] mb-6 text-center">
          OUR PROGRAMS
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6 text-center">
          Programs Designed for <span className="text-[#d4f870]">Growth</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed text-center">
          Industry-aligned programs built around one idea: learn what the
          market needs and practice until you're ready.
        </p>
      </div>
    </section>
  );
}