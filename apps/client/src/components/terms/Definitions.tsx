import { RichText } from "./RichText";
import { BODY } from "../../libs";
import type { Definition } from "../../types";

function Definitions({ items }: { items: Definition[] }) {
    return (
        <dl className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200">
            {items.map((d) => (
                <div key={d.term} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-accent">“{d.term}”</dt>
                    <dd className={BODY}>
                        <RichText text={d.text} />
                    </dd>
                </div>
            ))}
        </dl>
    );
}

export { Definitions }