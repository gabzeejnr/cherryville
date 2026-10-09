import React from "react";



export default function ProgramsCTASection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#fdf2e9" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0f2e2a" }}>
          Not Sure Which Program is Right for You?
        </h2>
        <p className="text-gray-500 mb-9 leading-relaxed">
          Book a free consultation with our advisors to find your perfect learning path.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white transition"
            style={{ backgroundColor: "#0f766e" }}
          >
            Book a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border transition hover:bg-black/5"
            style={{ borderColor: "#0f2e2a", color: "#0f2e2a" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Chat with an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}