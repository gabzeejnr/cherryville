import { useEffect, useState } from 'react';
import { useScrollSpy, useGoToTopOnLoad } from '../hooks';
import { Breadcrumbs, NavLink, OnThisPage, PartView, Sidebar } from '../components/terms';
import { DOC, PARTS } from "../data";
import { sectionId, SECTION_IDS, clauseId, CLAUSE_IDS, partId } from '../libs';
import type { Crumb } from "../types";

const ROOT: Crumb = { label: 'Terms', id: 'top' };


const TRAILS: Record<string, Crumb[]> = { top: [ROOT] };
const ORDER: string[] = ['top'];

for (const p of PARTS) {
    const pTrail = [ROOT, { label: `${p.label} — ${p.title}`, id: partId(p.id) }];
    TRAILS[partId(p.id)] = pTrail;
    ORDER.push(partId(p.id));

    for (const s of p.sections) {
        const sTrail = [...pTrail, { label: `${s.n}. ${s.title}`, id: sectionId(s.n) }];
        TRAILS[sectionId(s.n)] = sTrail;
        SECTION_IDS.add(sectionId(s.n));
        ORDER.push(sectionId(s.n));

        for (const c of s.clauses ?? []) {
            TRAILS[clauseId(c.num)] = [...sTrail, { label: `Clause ${c.num}`, id: clauseId(c.num) }];
            CLAUSE_IDS.add(clauseId(c.num));
            ORDER.push(clauseId(c.num));
        }
    }
}

export default function TermsPage() {
    const activeId = useScrollSpy(ORDER);
    const trail = TRAILS[activeId] ?? [ROOT];
    const activePart = trail[1]?.id;
    const activeSection = trail[2]?.id;

    const [navOpen, setNavOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState<Record<string, boolean>>({ [partId(PARTS[0].id)]: true });

    useEffect(() => {
        if (activePart) setOpen((o) => (o[activePart] ? o : { ...o, [activePart]: true }));
    }, [activePart]);

    
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }, []);

    useGoToTopOnLoad("terms")

    const tocPart = PARTS.find((p) => partId(p.id) === activePart) ?? PARTS[0];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-700 antialiased">
            <header className="sticky top-0 z-40 h-14 bg-accent text-white shadow-sm">
                <div className="mx-auto flex h-full max-w-360 items-center gap-3 px-4 lg:px-8">
                    <button type="button" onClick={() => setNavOpen((p) => !p)} aria-label="Toggle navigation"
                        aria-expanded={navOpen} className="-ml-1 rounded p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <NavLink id="top" className="text-lg font-bold tracking-wide">
                        Cherryville
                    </NavLink>
                    <span className="h-5 w-px bg-white/30" aria-hidden="true" />
                    <span className="text-sm font-medium text-white/90">Legal</span>
                    <span className="ml-auto rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{DOC.version}</span>
                </div>
            </header>

            <Breadcrumbs trail={trail} />

            {navOpen && (
                <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={() => setNavOpen(false)}
                    className="fixed inset-x-0 bottom-0 top-14 z-30 bg-slate-900/40 lg:hidden"
                />
            )}

            <div className="mx-auto flex max-w-360">
                <Sidebar
                    open={open}
                    navOpen={navOpen}
                    query={query}
                    activePart={activePart}
                    activeSection={activeSection}
                    onQuery={setQuery}
                    onToggle={(id) => setOpen((o) => ({ ...o, [id]: !o[id] }))}
                    onNavigate={() => setNavOpen(false)}
                />

                <main className="min-w-0 flex-1 px-6 py-10 lg:px-12">
                    <article className="mx-auto max-w-3xl">

                        <div id="top" className="scroll-mt-28">
                            <p className="text-sm font-semibold text-accent">{DOC.company}</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{DOC.title}</h1>
                            <p className="mt-3 text-lg leading-8 text-slate-600">{DOC.subtitle}</p>
                            <p className="mt-1 text-sm italic text-slate-500">{DOC.tagline}</p>

                            <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200">
                                <table className="min-w-full text-left text-sm">
                                    <thead className="bg-cherry text-accent">
                                        <tr>
                                            <th scope="col" className="w-48 border-b border-slate-200 px-4 py-2.5 font-semibold">Field</th>
                                            <th scope="col" className="border-b border-slate-200 px-4 py-2.5 font-semibold">Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {DOC.facts.map(([k, v]) => (
                                            <tr key={k}>
                                                <th scope="row" className="px-4 py-2.5 font-medium text-accent">{k}</th>
                                                <td className="px-4 py-2.5 text-slate-700">{v}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {PARTS.map((p) => (
                            <PartView key={p.id} part={p} />
                        ))}

                        <footer className="mt-16 border-t border-slate-200 pt-6 text-sm text-slate-500">{DOC.footer}</footer>
                    </article>
                </main>

                <OnThisPage part={tocPart} activeSection={activeSection} />
            </div>
        </div>
    );
}
