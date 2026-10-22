import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGoToTopOnLoad } from "../../hooks";
import { courses } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../components/academy/course/Hero";
import Details from "../../components/academy/course/Details";
import CTA from "../../components/academy/course/CTA";
import AcademyEnrollment from "../../components/forms/AcademyEnrollment";

export default function Course() {
    const { slug } = useParams<{ slug: string }>();
    const course = courses.find(course => course.slug === slug);
    const [enroll, setEnroll] = useState<boolean>(false)
    useGoToTopOnLoad(`academy/courses/${slug}`);

    if (!course) {
        return (
            <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8">
                <p className="mb-6 inline-flex items-center gap-[0.65rem] text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    404
                </p>
                <h1 className="font-heading text-4xl font-bold text-[#171516]">Course not found</h1>
                <p className="mt-3 max-w-md text-[#5E4A52]">
                    This course may have been moved or is no longer available.
                </p>
                <Link
                    to="/academy/courses"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Browse all courses
                </Link>
            </main>
        );
    }

    return (
        <main className="text-[#171414] tracking-[0.18px] bg-cherry">
            <div className="mx-auto max-w-7xl">
                <Hero course={course} setEnroll={setEnroll} />
                <Details course={course} setEnroll={setEnroll} />
                <CTA course={course} setEnroll={setEnroll} />
            </div>

            {enroll && <AcademyEnrollment setEnroll={setEnroll} thisCourse={course.name} />}
        </main>
    );
}