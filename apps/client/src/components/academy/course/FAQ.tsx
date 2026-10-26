import { useState } from "react";
import Section from "../../Section";
import type { Course } from "../../../types";

interface CourseTierFAQProps {
    course: Course;
}

const questions = [
    { key: "forMe", label: "Is this course for me?" },
    {
        key: "learnAndBuild",
        label: "What will I learn and build?",
    },
    { key: "next", label: "What comes next?" },
] as const;

export default function CourseFAQ({ course }: CourseTierFAQProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    if (!course.faq) return null;

    return (
        <Section bg="bg-cherry" compact className="px-5! sm:px-8! lg:px-10!">
            <section className="mx-auto w-full max-w-4xl py-12 sm:py-16">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">YOUR LEARNING JOURNEY</p>

                <h2 className="font-heading text-3xl font-bold tracking-tight text-[#171516] sm:text-4xl">Is this course right for you?</h2>

                <p className="mt-4 mb-8 leading-7 text-[#5E4A52]">Find out what to expect and where your learning can take you next.</p>

                <div className="space-y-3">
                    {questions.map((item, index) => {
                        const isOpen = activeIndex === index;
                        const answer = course.faq?.[item.key];
                        if (!answer) return null;

                        return (
                            <article key={item.key} className="overflow-hidden rounded-2xl border border-[#DED8D9] bg-white">
                                <button type="button" aria-expanded={isOpen} aria-controls={`tier-faq-${item.key}`}
                                    onClick={() => setActiveIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                >
                                    <span className="font-semibold leading-6 text-[#171516]">{item.label}</span>

                                    <span aria-hidden="true" className={`shrink-0 text-xl text-accent transition-transform ${isOpen
                                        ? "rotate-45"
                                        : ""
                                        }`
                                    }>+</span>
                                </button>

                                <div id={`tier-faq-${item.key}`} hidden={!isOpen} className="px-5 pb-5 sm:px-6 sm:pb-6">
                                    <p className="text-sm leading-7 text-[#5E4A52]">{answer}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </Section>
    )
}