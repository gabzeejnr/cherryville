import type { SectionType } from "../types";

export default function Section({ className, bg, title, subtitle, subtitleArray, children, compact = false }: SectionType) {
    return (
        <section className={`min-h-screen 2xl:min-h-[70dvh] overflow-hidden px-3 flex flex-col justify-center-safe md:px-10 py-20 ${bg === null ? null : bg ?? "bg-white"} ${className}`}>
            <div className="flex flex-col gap-4 lg:gap-1 2xl:gap-3">
                {title && <h2 className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">{title}</h2>}
                {subtitleArray
                    ? subtitleArray.map((sub, i) => (<p key={sub} className={`text-center text-lg font-medium text-black ${i > 0 ? "mt-7" : ""}`}>{sub.trim()}</p>))
                    : (subtitle
                        ? <p className="text-center text-lg font-medium text-black">{subtitle.trim()}</p>
                        : null
                    )
                }
            </div>
            <div>{children}</div>
        </section>
    )
}