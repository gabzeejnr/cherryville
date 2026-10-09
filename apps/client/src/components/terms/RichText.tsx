import { NavLink } from "./NavLink";
import {
    SECTION_IDS, CLAUSE_IDS, clauseId,
    sectionId, LINK, REF
} from "../../libs";
import type { ReactNode } from "react";

function RichText({ text }: { text: string }) {
    const out: ReactNode[] = [];
    let last = 0;

    for (const m of text.matchAll(REF)) {
        const [full, n, sub] = m;
        const start = m.index ?? 0;
        const clauseTarget = sub ? clauseId(`${n}.${sub}`) : null;
        const target =
            clauseTarget && CLAUSE_IDS.has(clauseTarget)
                ? clauseTarget
                : SECTION_IDS.has(sectionId(Number(n)))
                    ? sectionId(Number(n))
                    : null;
        if (!target) continue;

        if (start > last) out.push(text.slice(last, start));
        out.push(
            <NavLink key={start} id={target} className={LINK}>
                {full}
            </NavLink>,
        );
        last = start + full.length;
    }
    out.push(text.slice(last));
    return <>{out}</>;
}

export { RichText }