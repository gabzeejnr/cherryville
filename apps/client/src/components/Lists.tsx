import type { ListItem } from "../types"

export function List({ array }: { array: string[] }) {
    if (!array) return null;

    return (
        <ul className="grid gap-4 sm:grid-cols-2">
            {array.map((arr, index) => (
                <li key={`${arr}-${index}`} data-aos="fade-up" className="flex items-center gap-3 rounded-xl border border-accent/10 bg-white/70 p-4 text-base leading-relaxed text-gray-700 transition-colors duration-300 hover:border-accent/30">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{arr.trim()}</span>
                </li>
            ))}
        </ul>
    )
}



export function TitleTextList({ array }: { array: ListItem[] }) {
    if (!array) return null;

    return (
        <ul className="grid gap-4 sm:grid-cols-2">
            {array.map((item, index) => (
                <li key={`${item.title}-${index}`} data-aos="fade-up" className="flex items-start gap-3 rounded-xl border border-accent/10 bg-white/70 p-4 transition-colors duration-300 hover:border-accent/30">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />

                    <div>
                        <h3 className="font-semibold leading-snug text-heading">{item.title.trim()}</h3>

                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text.trim()}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
