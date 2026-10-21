import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faClock,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import Section from "../../../components/Section";
import { AccentButton } from "../../../components/Buttons";
import type { Course as CourseType } from "../../../types";

interface CourseHeroProps {
    course: CourseType;
}

export default function CourseHero({ course }: CourseHeroProps) {
    const fee = `₦${course.fee.toLocaleString("en-NG")}`;

    return (
        <Section bg={null} compact className="px-5! pt-8! sm:px-8! lg:px-10!">
            <div className="mx-auto w-full max-w-7xl">
                <header className="border-b border-[#DED8D9] pb-6">
                    <Link to="/academy/courses" className="inline-flex items-center gap-2 text-sm font-medium text-[#5E4A52] transition-colors hover:text-accent">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        All courses
                    </Link>
                </header>

                <div className="grid items-center gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16">
                    <div className="lg:col-span-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-cherry px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-dark">
                            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                            {course.experience} level
                        </span>

                        <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-accent sm:text-5xl lg:text-6xl">
                            {course.name}
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5F5A5B]">
                            {course.whoIsItFor}
                        </p>

                        <dl className="mt-9 grid grid-cols-3 divide-x divide-[#DED8D9] border-y border-[#DED8D9]">
                            <div className="py-5 pr-3 sm:pr-5">
                                <dt className="font-mono text-[10px] uppercase tracking-wider text-[#5E4A52] sm:text-[11px]">
                                    Duration
                                </dt>
                                <dd className="mt-2 flex flex-wrap items-center gap-2 font-heading text-sm font-semibold sm:text-lg">
                                    <FontAwesomeIcon icon={faClock} className="text-accent" />
                                    {course.duration}
                                </dd>
                            </div>

                            <div className="px-3 py-5 sm:px-5">
                                <dt className="font-mono text-[10px] uppercase tracking-wider text-[#5E4A52] sm:text-[11px]">
                                    Level
                                </dt>
                                <dd className="mt-2 flex flex-wrap items-center gap-2 font-heading text-sm font-semibold sm:text-lg">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-accent" />
                                    {course.experience}
                                </dd>
                            </div>

                            <div className="py-5 pl-3 sm:pl-5">
                                <dt className="font-mono text-[10px] uppercase tracking-wider text-[#5E4A52] sm:text-[11px]">
                                    Fee
                                </dt>
                                <dd className="mt-2 font-heading text-sm font-semibold sm:text-lg">
                                    {fee}
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <AccentButton text="Enroll in this course" arrow />

                            <Link to="/academy/courses" className="mt-8 text-sm font-medium text-[#5E4A52] underline-offset-4 hover:text-accent hover:underline">
                                Compare courses
                            </Link>
                        </div>
                    </div>

                    <figure className="lg:col-span-6">
                        <div className="relative">
                            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-cherry sm:translate-x-4 sm:translate-y-4" />

                            <div className="relative aspect-4/3 overflow-hidden rounded-[28px] bg-[#ECEAE8]">
                                {course.image ? (
                                    <img src={course.image} alt={course.name} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-linear-to-br from-[#FDF2E9] via-[#F5E4E4] to-[#E8C9D3] p-8 text-center">
                                        <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-accent/70" />
                                        <span className="font-heading text-xl font-semibold text-accent-dark">Cherryville Academy</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </Section>
    )
}