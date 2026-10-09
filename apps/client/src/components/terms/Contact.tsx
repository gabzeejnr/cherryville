import { BODY, LINK } from "../../libs";
import type { ContactData } from "../../types";

function ContactCard({ contact }: { contact: ContactData }) {
    return (
        <div className="mt-4 rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">{contact.company}</p>
            <p className={BODY}>{contact.address}</p>
            <dl className="mt-4 space-y-2 text-[15px]">
                {contact.rows.map((r) => (
                    <div key={r.label} className="flex flex-col sm:flex-row sm:gap-4">
                        <dt className="w-52 shrink-0 font-medium text-slate-500">{r.label}</dt>
                        <dd className="flex flex-wrap gap-x-4">
                            {r.values.map((v) => (
                                <a key={v.href} href={v.href} className={LINK}>
                                    {v.text}
                                </a>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export {ContactCard}