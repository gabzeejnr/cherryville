import { sectionId } from "../../libs";
import { NavLink, Definitions, ClauseView, ContactCard } from "../terms";
import type { Section } from "../../types";

function SectionView({ section }: { section: Section }) {
    return (
        <section id={sectionId(section.n)} className="scroll-mt-28 pt-10">
            <h3 className="group flex items-baseline gap-2 text-xl font-semibold text-slate-900">
                <span className="tabular-nums text-accent">{section.n}.</span>
                <span>{section.title}</span>
                <NavLink
                    id={sectionId(section.n)}
                    label={`Link to section ${section.n}`}
                    className="text-slate-300 opacity-0 transition-opacity hover:text-accent focus:opacity-100 group-hover:opacity-100"
                >
                    #
                </NavLink>
            </h3>
            <div className="mt-3">
                {section.definitions && <Definitions items={section.definitions} />}
                {section.clauses?.map((c) => <ClauseView key={c.num} clause={c} />)}
                {section.contact && <ContactCard contact={section.contact} />}
            </div>
        </section>
    );
}

export { SectionView }