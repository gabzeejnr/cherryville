import { BODY, clauseId } from "../../libs";
import { RichText, NavLink, DataTable } from "../terms";
import type { Clause } from "../../types";


function ClauseView({ clause }: { clause: Clause }) {
    return (
        <div id={clauseId(clause.num)} className="grid scroll-mt-28 grid-cols-[3.25rem_1fr] gap-x-2 py-2">
            <div className="pt-px text-sm font-semibold tabular-nums text-accent">
                <NavLink id={clauseId(clause.num)} className="hover:underline" label={`Link to clause ${clause.num}`}>
                    {clause.num}
                </NavLink>
            </div>
            <div className={clause.note ? 'rounded-md border-l-4 border-accent bg-accent/5 px-4 py-2.5' : ''}>
                <p className={`${BODY} ${clause.note ? 'font-medium text-slate-900' : ''}`}>
                    <RichText text={clause.text} />
                </p>
                {clause.items && (
                    <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-accent">
                        {clause.items.map((item) => (
                            <li key={item} className={BODY}>
                                <RichText text={item} />
                            </li>
                        ))}
                    </ul>
                )}
                {clause.table && <DataTable table={clause.table} />}
            </div>
        </div>
    );
}

export { ClauseView }