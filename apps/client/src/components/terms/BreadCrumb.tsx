import { HEADER_H } from "../../libs";
import { NavLink, Chevron } from "../terms";
import type { Crumb } from "../../types";

function Breadcrumbs({ trail }: { trail: Crumb[] }) {
    return (
        <div className="sticky z-30 border-b border-slate-200 bg-white/95 backdrop-blur" style={{ top: HEADER_H }}>
            <nav aria-label="Breadcrumb" className="mx-auto flex h-12 max-w-360 items-center px-6 lg:px-8">
                <ol className="flex min-w-0 items-center gap-1.5 text-sm text-slate-500">
                    {trail.map((c, i) => {
                        const last = i === trail.length - 1;
                        return (
                            <li key={c.id} className={`flex items-center gap-1.5 ${last ? 'min-w-0' : 'shrink-0 max-sm:hidden'}`}>
                                {i > 0 && <Chevron className="h-4 w-4 shrink-0 text-slate-300 max-sm:hidden" />}
                                <NavLink id={c.id} current={last}
                                    className={`block truncate ${last ? 'font-medium text-slate-900' : 'hover:text-accent hover:underline'
                                        }`}
                                >{c.label}</NavLink>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}

export { Breadcrumbs }