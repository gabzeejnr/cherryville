import type { JSX } from "react/jsx-runtime";

type FocusArea = {
    label: string,
    title: string,
    description: string,
    headerBg: string,
    iconBg: string,
    icon: JSX.Element,
}

const FOCUS_AREAS: FocusArea[] = [
    {
        label: "TECHNICAL GROWTH",
        title: "Digital Skills",
        description:
            "Technical skills that open doors and accelerate careers in the modern economy",
        headerBg: "#132a3e",
        iconBg: "#2f8fe0",
        icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="0.5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "OPERATIONAL IMPACT",
        title: "Business Excellence",
        description: "Operational excellence that lifts whole organizations to new heights",
        headerBg: "#0e2b1f",
        iconBg: "#1fa971",
        icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "WORKFORCE DEVELOPMENT",
        title: "Career Readiness",
        description: "Workforce development that turns potential into peak performance",
        headerBg: "#2a1330",
        iconBg: "#c23fa0",
        icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

function FocusCard({ area }: { area: FocusArea }) {
    return (
        <div className="rounded-2xl overflow-hidden border-2 border-black/10 shadow-xl bg-white flex flex-col">
            <div className="px-7 pt-8 pb-10" style={{ backgroundColor: area.headerBg }}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: area.iconBg }}>
                        {area.icon}
                    </div>
                    <span className="text-[10px] tracking-[0.15em] font-semibold text-white/60 mt-1 uppercase">
                        {area.label}
                    </span>
                </div>
                <h3 className="text-white text-2xl font-semibold tracking-tight">{area.title}</h3>
            </div>

            <div className="px-7 py-8 flex-1">
                <p className="text-gray-700 text-base font-semibold leading-relaxed">{area.description}</p>
            </div>
        </div>
    );
}

export default function OurFocusSection() {
    return (
        <section
            className="w-full min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center"
            style={{ backgroundColor: "#fdf2e9" }}
        >
            <div className="text-center mb-14">
                <p className="text-xs font-bold tracking-[0.2em] text-[#0e2625] mb-4">
                    OUR FOCUS
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                    What We Focus On
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Growth doesn't happen by accident. It happens when learning is structured, practical, and connected to real-world needs.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 w-full">
                {FOCUS_AREAS.map((area) => (
                    <FocusCard key={area.title} area={area} />
                ))}
            </div>
        </section>
    );
}
