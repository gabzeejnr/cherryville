import { useEffect, useRef, useState } from "react";
import { analytics } from "../../../analytics/events";
import { questions, courses } from "../../../data";
import type { AnswerFinder, Course } from "../../../types";

export default function RecommendCourse() {
    const analyticsStarted = useRef<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [answers, setAnswers] = useState<AnswerFinder>({
        workType: null,
        experience: null,
        timeframe: null,
    });
    const [result, setResult] = useState<Course | null>(null);

    useEffect(function () {
        if (!result) return;
        analytics.courseRecommendationViewed(
            undefined, result
        )
    }, [result])

    function startAnalytics() {
        if (analyticsStarted.current) return;

        analyticsStarted.current = true;
        analytics.formStarted("course_recommendation")
    }

    function resetFinder() {
        setStep(1);
        setAnswers({
            workType: null,
            experience: null,
            timeframe: null,
        });
        setResult(null);
        setSubmitted(false);
    }

    function solve() {
        const scored = courses.map((course): { course: Course; score: number } => {
            let score = 0;

            if (course.workType.includes(answers.workType!)) score++;
            if (course.experience === answers.experience) score++;
            if (
                answers.timeframe === "unknown" ||
                course.timeframe.includes(answers.timeframe!)
            ) {
                score++;
            }

            return { course, score };
        });

        const filteredCourses = scored
            .filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score);

        if (!filteredCourses.length) {
            analytics.noCourseRecommendation()
            setResult(null);
            setSubmitted(true);
            return;
        }

        const max = filteredCourses[0].score;
        const bestMatches = filteredCourses.filter(
            (item) => item.score === max
        );

        const best = bestMatches.reduce((acc, current) =>
            acc.course.fee < current.course.fee ? current : acc
        );

        analytics.formSubmissionSucceeded("course_recommendation");

        setResult(best.course);
        setSubmitted(true);
    }

    const currentQuestion = questions[step - 1];
    const canContinue = currentQuestion
        ? Boolean(answers[currentQuestion.id as keyof AnswerFinder])
        : false;

    return (
        !submitted ? (
            <div data-aos="zoom-in"
                className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-accent/10 bg-white px-5 py-7 shadow-lg sm:px-7 sm:py-8">
                <div className="mb-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Cherryville Academy</p>
                    <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Find Your Course</h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        Discover the course that fits your interests, experience and goals.
                    </p>
                </div>

                <div className="mb-8 flex items-center gap-2" aria-label={`Step ${step} of ${questions.length}`}>
                    {questions.map((question, index) => (
                        <div key={question.id} className={`h-1.5 flex-1 rounded-full transition-colors duration-300
                             ${index + 1 <= step
                                ? "bg-accent"
                                : "bg-gray-200"
                            }`
                        } />
                    ))}
                </div>

                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(step - 1) * 100}%)`, }}>
                        {questions.map((question) => (
                            <div key={question.id} className="mb-8 w-full shrink-0">
                                <h3 className="mb-4 text-lg font-semibold text-heading">{question.question}</h3>

                                <div className="flex flex-col gap-3">
                                    {question.options.map((option) => (
                                        <label key={option.value} className="cursor-pointer">
                                            <input type="radio" name={question.id} value={option.value} onClick={startAnalytics}
                                                checked={
                                                    answers[
                                                    question.id as keyof AnswerFinder
                                                    ] === option.value
                                                } className="peer sr-only" onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                                            />

                                            <div className="rounded-xl border border-gray-200 p-4 text-sm leading-relaxed text-gray-700 transition duration-200 hover:border-accent/50 peer-checked:border-accent peer-checked:bg-cherry peer-checked:text-heading peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent sm:text-base">
                                                {option.label}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                    {step > 1 ? (
                        <button type="button" onClick={() => setStep((prev) => prev - 1)}
                            className="rounded-full border border-accent/30 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-cherry"
                        >Previous</button>
                    ) : (
                        <span />
                    )}

                    {step < questions.length ? (
                        <button
                            type="button"
                            disabled={!canContinue}
                            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
                            onClick={() => setStep((prev) => prev + 1)}
                        >Next →</button>
                    ) : (
                        <button type="button" disabled={!canContinue} onClick={solve}
                            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
                        >Find my course →</button>
                    )}
                </div>
            </div>
        ) : (
            <div className="mx-auto w-full max-w-lg rounded-2xl border border-accent/10 bg-white p-6 text-center shadow-lg sm:p-8">
                {result ? (
                    <>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Your recommended course</p>
                        <h3 className="mt-3 text-xl font-semibold text-heading">{result.name}</h3>
                        <button type="button" className="accent-button" onClick={resetFinder}>
                            Have a different choice?
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold text-heading">No matches found</h2>
                        <p className="mt-2 text-sm text-gray-500">Try different answers to find a suitable course.</p>
                        <button type="button" className="accent-button" onClick={resetFinder}>Try again</button>
                    </>
                )}
            </div>
        )
    );
}
