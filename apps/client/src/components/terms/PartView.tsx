import { partId } from "../../libs";
import { SectionView } from "../terms";
import type { Part } from "../../types";

function PartView({ part }: { part: Part }) {
    return (
        <section id={partId(part.id)} className="scroll-mt-28 pt-16">
            <div className="border-b border-slate-200 pb-4">
                <p className="text-sm font-semibold text-accent">{part.label}</p>
                <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{part.title}</h2>
            </div>
            {part.sections.map((s) => (
                <SectionView key={s.n} section={s} />
            ))}
        </section>
    );
}

export { PartView }