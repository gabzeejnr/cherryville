import Section from "../../../components/Section";
import { AccentButton } from "../../../components/Buttons";
import { List } from "../../../components/Lists";
import type { Course as CourseType } from "../../../types";

interface CourseDetailsProps {
    course: CourseType;
    setEnroll: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CourseDetails({ course, setEnroll }: CourseDetailsProps) {
    const fee = `₦${course.fee.toLocaleString("en-NG")}`;

    return (
        <Section bg="bg-white" compact className="px-5! sm:px-8! lg:px-10!">
            <div className="mx-auto grid w-full max-w-7xl gap-12 border-t border-[#DED8D9] pt-12 lg:grid-cols-[1fr_340px] lg:gap-20 lg:pt-16">
                <div>
                    <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        <span className="h-px w-8 bg-accent" />
                        01 — Outcomes
                    </p>

                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#171516] sm:text-4xl">
                        What you'll learn
                    </h2>

                    <div className="mt-8">
                        <List array={course.outcome} />
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
                        <article className="rounded-2xl bg-cherry p-6 sm:p-7">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
                                02 — Who it's for
                            </p>
                            <p className="text-[16px] leading-7 text-[#171414]">
                                {course.whoIsItFor}
                            </p>
                        </article>

                        <article className="rounded-2xl border border-[#DED8D9] bg-[#FAF8F6] p-6 sm:p-7">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
                                03 — Career path
                            </p>
                            <p className="font-heading text-2xl font-semibold text-[#171516]">
                                {course.jobTitle}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-[#5F5A5B]">
                                Develop practical skills relevant to this role through structured learning.
                            </p>
                        </article>
                    </div>
                </div>

                <aside className="h-fit rounded-2xl border border-[#AE154D59] bg-white p-6 shadow-(--shadow) lg:sticky lg:top-8 sm:p-7">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#5E4A52]">
                        Course fee
                    </p>

                    <p className="mt-2 wrap-break-word font-heading text-4xl font-extrabold tracking-tight text-accent-dark">
                        {fee}
                    </p>

                    <div className="my-6 h-px bg-[#DED8D9]" />

                    <dl className="space-y-4 text-sm">
                        <div className="flex items-start justify-between gap-4">
                            <dt className="text-[#5E4A52]">Duration</dt>
                            <dd className="text-right font-semibold">{course.duration}</dd>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <dt className="text-[#5E4A52]">Experience level</dt>
                            <dd className="text-right font-semibold">
                                {course.experience.capitalize()}
                            </dd>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <dt className="text-[#5E4A52]">Recommended role</dt>
                            <dd className="max-w-[60%] text-right font-semibold">
                                {course.jobTitle}
                            </dd>
                        </div>
                    </dl>

                    <AccentButton
                        text="Enroll now" onClick={() => setEnroll(true)}
                        className="mt-7 flex w-full justify-center"
                    />
                </aside>
            </div>
        </Section>
    )
}