import React from "react";



const INCLUDES = [
  {
    label: "Structured Curriculum",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Live Sessions",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 20c.2-2.3 1.7-4 3.5-4.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Hands-on Projects",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M8 9l-4 4 4 4M16 9l4 4-4 4M13 5l-3 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Career Support",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Community Access",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProgramIncludesSection() {
  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%)",
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-14">
        What Every Program Includes
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {INCLUDES.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <p className="text-sm font-bold text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}