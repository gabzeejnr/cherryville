import { useState } from "react";
import Section from "../Section";
import { academyFAQs } from "../../data";

export default function AcademyFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <Section bg="bg-white" compact className="px-5! sm:px-8! lg:px-10!">
            <section className="mx-auto w-full max-w-5xl py-12 sm:py-16">
                <div className="mb-9 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">GOOD TO KNOW</p>
                    <p className="mt-4 leading-7 text-[#5E4A52]">A few things you may want to know before beginning your learning journey.</p>
                </div>

                <div className="space-y-3">
                    {academyFAQs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        const answerId = `academy-faq-answer-${index}`;

                        return (
                            <article key={faq.question} className={`overflow-hidden rounded-2xl border transition-colors ${isOpen
                                ? "border-[#AE154D59] bg-[#FDF8FA]"
                                : "border-[#DED8D9] bg-white"
                                }`
                            }>
                                <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                >
                                    <span className="font-semibold leading-6 text-[#171516]">{faq.question}</span>
                                    <span aria-hidden="true" className={`shrink-0 text-xl font-normal text-accent transition-transform ${isOpen
                                        ? "rotate-45"
                                        : ""
                                        }`
                                    }>+</span>
                                </button>

                                <div id={answerId} hidden={!isOpen} className="px-5 pb-5 sm:px-6 sm:pb-6">
                                    <p className="max-w-3xl text-sm leading-7 text-[#5E4A52]">{faq.answer}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </Section>
    )
}
