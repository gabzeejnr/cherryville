import Section from "../../../components/Section";
import { AccentButton } from "../../../components/Buttons";
import type { Course as CourseType } from "../../../types";

interface CourseCTAProps {
    course: CourseType;
}

export default function CourseCTA({ course }: CourseCTAProps) {
    return (
        <Section bg={null} compact className="px-5! py-10! sm:px-8! lg:px-10!">
            <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] bg-[#171315] px-7 py-12 text-white sm:px-12 sm:py-14 lg:px-14">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Ready when you are</p>

                        <h2 className="max-w-xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">Take the next step in your career.</h2>

                        <p className="mt-4 max-w-lg leading-7 text-white/70">Start building practical skills with {course.name}.</p>
                    </div>

                    <div className="shrink-0">
                        <AccentButton text="Enroll in this course" arrow />
                    </div>
                </div>
            </div>
        </Section>
    )
}