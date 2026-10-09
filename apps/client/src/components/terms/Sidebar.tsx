import { partId, sectionId } from "../../libs";
import { PARTS } from "../../data";
import { Chevron, NavLink } from "../terms";

function Sidebar({
    open, navOpen, query,
    activePart, activeSection, onQuery,
    onToggle, onNavigate,
}: {
    open: Record<string, boolean>;
    navOpen: boolean;
    query: string;
    activePart?: string;
    activeSection?: string;
    onQuery: (q: string) => void;
    onToggle: (id: string) => void;
    onNavigate: () => void;
}) {
    const q = query.trim().toLowerCase();

    return (
        <aside aria-label="Terms navigation"
            className={`fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-72 shrink-0 self-start overflow-y-auto border-r border-slate-200 bg-white p-4 transition-transform lg:sticky lg:top-26 lg:z-20 lg:h-[calc(100vh-104px)] lg:translate-x-0 ${navOpen
                ? 'translate-x-0' : '-translate-x-full'}`}        >
            <input type="search" value={query} onChange={(e) => onQuery(e.target.value)}
                placeholder="Filter sections" aria-label="Filter sections"
                className="mb-4 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />

            {PARTS.map((p) => {
                const sections = q ? p.sections.filter((s) => `${s.n} ${s.title}`.toLowerCase().includes(q)) : p.sections;
                if (!sections.length) return null;
                const isOpen = q ? true : !!open[partId(p.id)];
                const partActive = activePart === partId(p.id);

                return (
                    <div key={p.id} className="mb-1">
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => onToggle(partId(p.id))}
                                aria-expanded={isOpen}
                                aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${p.label}`}
                                className="rounded p-1 text-slate-400 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            ><Chevron className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} /></button>
                            <NavLink id={partId(p.id)} onNavigate={onNavigate}
                                className={`flex-1 rounded px-2 py-1.5 text-sm font-semibold ${partActive
                                    ? 'text-accent'
                                    : 'text-slate-800 hover:bg-cherry'}`
                                }>{p.label} — {p.title}
                            </NavLink>
                        </div>

                        {isOpen && (
                            <ul className="ml-3 mt-1 border-l border-slate-200">
                                {sections.map((s) => {
                                    const active = activeSection === sectionId(s.n);
                                    return (
                                        <li key={s.n}>
                                            <NavLink id={sectionId(s.n)} onNavigate={onNavigate} current={active}
                                                className={`-ml-px block border-l-2 py-1.5 pl-4 pr-2 text-[13px] leading-5 ${active
                                                    ? 'border-accent bg-accent/5 font-medium text-accent'
                                                    : 'border-transparent text-slate-600 hover:border-accent hover:text-accent hover:underline'
                                                    }`}
                                            >{s.n}. {s.title}</NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );
            })}
        </aside>
    );
}

export { Sidebar }