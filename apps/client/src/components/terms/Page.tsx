import { sectionId, STICKY_TOP } from "../../libs";
import { NavLink } from "../terms";
import type { Part } from "../../types";


function OnThisPage({ part, activeSection }: { part: Part; activeSection?: string }) {
    return (
        <nav aria-label="On this page" className="hidden w-60 shrink-0 xl:block">
            <div style={{ top: STICKY_TOP }}
                className="sticky max-h-[calc(100vh-104px)] overflow-y-auto py-10 pr-6">
                <p className="mb-3 text-sm font-semibold text-slate-900">On this page</p>
                <ul className="border-l border-slate-200">
                    {part.sections.map((s) => {
                        const active = activeSection === sectionId(s.n);
                        return (
                            <li key={s.n}>
                                <NavLink
                                    id={sectionId(s.n)}
                                    current={active}
                                    className={`-ml-px block border-l-2 py-1 pl-3 text-[13px] leading-5 ${active
                                        ? 'border-accent font-medium text-accent'
                                        : 'border-transparent text-slate-500 hover:border-accent hover:text-accent'
                                        }`}
                                >
                                    {s.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export { OnThisPage }