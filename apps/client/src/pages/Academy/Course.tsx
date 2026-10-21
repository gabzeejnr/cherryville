import { useParams, Link } from "react-router-dom";
import { courses } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClock, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Section from "../../components/Section";
import { AccentButton } from "../../components/Buttons";
import { List } from "../../components/Lists";

export default function Course() {
    const { slug } = useParams<{ slug: string }>();
    const course = courses.find((course) => course.slug === slug);

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

    const fee = `₦${course.fee.toLocaleString("en-NG")}`;

    return (
        <main className="min-h-screen px-5 pb-16 pt-8 text-[#171414] tracking-[0.18px] sm:px-8 lg:px-10 bg-cherry">
            <div className="mx-auto max-w-7xl">
                <header className="flex items-center justify-between border-b border-[#DED8D9] pb-6">
                    <Link to="/academy/courses" className="inline-flex items-center gap-2 text-sm font-medium text-[#5E4A52] transition-colors hover:text-accent">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        All courses
                    </Link>
                </header>

                <section className="grid items-center gap-12 pt-14 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white">
                            <span className="size-2 rounded-full bg-cherry animate-pulse" />
                            {course.experience} level
                        </span>

                        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-accent">{course.name}</h1>

                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5F5A5B]">{course.whoIsItFor}</p>

                        <dl className="mt-10 grid grid-cols-3 divide-x divide-[#DED8D9] border-y border-[#DED8D9]">
                            <div className="py-5 pr-5">
                                <dt className="font-mono text-[11px] uppercase tracking-wider text-[#5E4A52]">Duration</dt>
                                <dd className="mt-2 flex items-center gap-2 font-heading text-lg font-semibold text-[#171516]">
                                    <FontAwesomeIcon icon={faClock} className="text-sm text-accent" />
                                    {course.duration}
                                </dd>
                            </div>
                            <div className="px-5 py-5">
                                <dt className="font-mono text-[11px] uppercase tracking-wider text-[#5E4A52]">Level</dt>
                                <dd className="mt-2 flex items-center gap-2 font-heading text-lg font-semibold text-[#171516]">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-sm text-accent" />
                                    {course.experience}
                                </dd>
                            </div>
                            <div className="py-5 pl-5">
                                <dt className="font-mono text-[11px] uppercase tracking-wider text-[#5E4A52]">Fee</dt>
                                <dd className="mt-2 font-heading text-lg font-semibold text-[#171516]">{fee}</dd>
                            </div>
                        </dl>

                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <AccentButton text="Enroll in this course" arrow />
                            <Link to="/academy/courses" className="mt-8 text-sm font-medium text-[#5E4A52] underline-offset-4 hover:text-accent hover:underline">
                                Compare other courses
                            </Link>
                        </div>
                    </div>

                    <figure className="lg:col-span-6">
                        <div className="relative">
                            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-cherry" />
                            <div className="relative aspect-4/3 overflow-hidden rounded-[28px] bg-[#ECEAE8]">
                                {course.image && (
                                    <img src={course.image} alt={course.name} className="h-full w-full object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </figure>
                </section>


                <Section bg={null} className="min-h-0! overflow-visible! px-0! py-0!">
                    <div className="mt-24 grid gap-16 border-t border-[#DED8D9] pt-16 lg:grid-cols-[1fr_340px] lg:gap-20">
                        {/* Main course information */}
                        <div>
                            <p className="mb-6 inline-flex items-center gap-[0.65rem] text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                                01 — Outcomes
                            </p>

                            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#171516] sm:text-4xl">
                                What you'll learn
                            </h2>

                            <div className="mt-10">
                                <List array={course.outcome} />
                            </div>

                            <div className="mt-20 grid gap-8 sm:grid-cols-2">
                                <div className="rounded-2xl bg-cherry p-7">
                                    <p className="mb-6 inline-flex items-center gap-[0.65rem] text-xs font-semibold uppercase tracking-[0.16em] text-accent-dark">
                                        02 — Who it's for
                                    </p>

                                    <p className="text-[17px] leading-7 text-[#171414]">
                                        {course.whoIsItFor}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#DED8D9] bg-white p-7">
                                    <p className="mb-6 inline-flex items-center gap-[0.65rem] text-xs font-semibold uppercase tracking-[0.16em] text-accent-dark">
                                        03 — Career path
                                    </p>

                                    <p className="font-heading text-2xl font-semibold text-[#171516]">
                                        {course.jobTitle}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sticky course summary */}
                        <aside className="h-fit rounded-2xl border border-[#AE154D59] bg-white p-7 shadow-(--shadow) lg:sticky lg:top-20">
                            <p className="font-mono text-[11px] uppercase tracking-wider text-[#5E4A52]">
                                Course fee
                            </p>

                            <p className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-accent-dark">
                                {fee}
                            </p>

                            <dl className="mt-7 space-y-4 text-sm">
                                <div className="flex justify-between gap-4">
                                    <dt className="text-[#5E4A52]">Duration</dt>
                                    <dd className="font-semibold text-[#171516]">
                                        {course.duration}
                                    </dd>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <dt className="text-[#5E4A52]">Experience</dt>
                                    <dd className="font-semibold text-[#171516]">
                                        {course.experience}
                                    </dd>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <dt className="text-[#5E4A52]">Recommended role</dt>
                                    <dd className="text-right font-semibold text-[#171516]">
                                        {course.jobTitle}
                                    </dd>
                                </div>
                            </dl>

                            <AccentButton
                                text="Enroll now"
                                className="mt-7 flex w-full justify-center"
                            />
                        </aside>
                    </div>
                </Section>


                <section className="mt-24 overflow-hidden rounded-[28px] bg-cherry px-7 py-14 text-white sm:px-14">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="text-black">
                            <p className="mb-6 inline-flex items-center gap-[0.65rem] text-xs font-semibold uppercase tracking-[0.16em]">
                                Ready when you are
                            </p>
                            <h2 className="max-w-xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                                Take the next step in your career.
                            </h2>
                            <p className="mt-4 max-w-lg">
                                Start building practical skills with {course.name}.
                            </p>
                        </div>

                        <button type="button" className="shrink-0 accent-button rounded-full bg-cherry px-7 py-4 font-semibold text-accent-dark transition-colors hover:bg-white">
                            Enroll now
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}