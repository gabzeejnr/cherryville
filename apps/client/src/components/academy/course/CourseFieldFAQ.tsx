import Section from "../../Section";
import { courseFaqGroups, fieldFaqs } from "../../../data";

interface CourseFieldFAQProps {
    courseSlug: string;
}

export default function CourseFieldFAQ({ courseSlug }: CourseFieldFAQProps) {
    const keys = courseFaqGroups[courseSlug] ?? [];

    const items = (keys
        .flatMap(key => (fieldFaqs[key] ?? [])
            .map(item => ({ ...item, key }))
        )
    )

    if (items.length === 0) return null;

    return (
        <Section bg="bg-white" compact>
            <section className="px-5! py-12! sm:px-8! lg:px-10!">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#AE154D]">Your field, answered</p>
                <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>

                <div className="divide-y divide-black/10">
                    {items.map((item, index) => <details key={`${item.key}-${index}`} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                            {item.question}
                            <span aria-hidden="true" className="text-xl text-[#AE154D] transition-transform group-open:rotate-45">+</span>
                        </summary>

                        <p className="mt-4 max-w-3xl leading-7 text-black/70">{item.answer}</p>
                    </details>)}
                </div>
            </section>
        </Section>
    )
}