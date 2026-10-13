import { useState } from "react";
import Section from "../Section";
import AcademyEnrollment from "../forms/AcademyEnrollment";
import { addDot } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { Dispatch, SetStateAction } from "react";
import type { Course } from "../../types";


function Card({ course, setEnroll }: { course: Course, setEnroll: Dispatch<SetStateAction<boolean>> }) {
    const [open, setOpen] = useState(false);

    const { name, whoIsItFor, outcome, duration, learningStyle, } = course;

    return (
        <div className="w-full px-3 text-white">
            <div className={`overflow-hidden rounded-xl bg-accent shadow-sm shadow-accent/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/15 ${open
                ? "ring-1 ring-accent/20"
                : ""}`
            }>
                <div className="flex items-center justify-between gap-4 p-4">
                    <h3 className="font-semibold leading-snug">{name}</h3>

                    <button type="button" aria-expanded={open} aria-label={`${open
                        ? "Collapse"
                        : "Expand"} ${name}`} onClick={() => setOpen((prev) => !prev)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cherry"
                    >
                        <FontAwesomeIcon icon={faPlus} className={`transition-transform duration-300 ease-out ${open
                            ? "rotate-45"
                            : "rotate-0"
                            }`}
                        />
                    </button>
                </div>

                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${open
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`} aria-hidden={!open}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-4 border-t border-white/15 px-4 pb-4 pt-4">
                            <div>
                                <h4 className="mb-1 text-sm font-bold text-cherry">Who is it for?</h4>
                                <p className="text-sm leading-relaxed text-white/85">{whoIsItFor}</p>
                            </div>

                            <div>
                                <h4 className="mb-2 text-sm font-bold text-cherry">What you will learn</h4>
                                <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-white/85">
                                    {outcome.map((out) => (
                                        <li key={out}>{addDot(out)}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-lg bg-black/10 p-3">
                                    <p className="text-xs font-semibold text-cherry">Duration</p>
                                    <p className="mt-1 text-sm">{duration}</p>
                                </div>

                                <div className="rounded-lg bg-black/10 p-3">
                                    <p className="text-xs font-semibold text-cherry">Format</p>
                                    <p className="mt-1 text-sm">{learningStyle}</p>
                                </div>
                            </div>

                            <div className="flex justify-end pt-1">
                                <button type="button" onClick={() => setEnroll(true)}
                                    className="rounded-full bg-accent-hover px-5 py-2.5 text-sm font-semibold text-heading transition-colors duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cherry"
                                >Enroll Now<span aria-hidden="true"> →</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function CourseList({ courses }: { courses: Course[] }) {

    const [enroll, setEnroll] = useState(false);

    return (
        <>
            <Section title="Courses" bg="bg-bg">
                <div className="mt-10">
                    {courses.length > 0 ? (
                        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {courses.map((course) => (
                                <div data-aos="fade-up" key={course.name} className="min-w-0">
                                    <Card course={course} setEnroll={setEnroll} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="py-8 text-center text-gray-600">No courses available at the moment. Please check back later.</p>
                    )}
                </div>
            </Section>
            {enroll && <AcademyEnrollment setEnroll={setEnroll} />}
        </>
    )
}