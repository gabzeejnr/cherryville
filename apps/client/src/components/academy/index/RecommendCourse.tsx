import { useState } from "react";
import { questions, courses } from "../../../data";
import type { AnswerFinder, Course } from "../../../types";

export default function RecommendCourse() {

    const [submitted, setSubmitted] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [answers, setAnswers] = useState<AnswerFinder | {
        workType: "",
        experience: "",
        timeframe: ""
    }>({
        workType: "",
        experience: "",
        timeframe: ""
    });
    const [result, setResult] = useState<Course | null>(null)

    function solve() {
        if (answers.workType === "") return;

        const scored = courses.map((course): { course: Course, score: number } => {

            let score: number = 0;

            if (course.workType.includes(answers.workType)) score++;
            if (course.experience === answers.experience) score++;
            if (answers.timeframe === "unknown" || course.timeframe.includes(answers.timeframe)) score++;

            return { course, score }

        })

        const filteredCourses = scored.filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score)

        if (!filteredCourses.length) {
            setResult(null);
            setSubmitted(true);
            return;
        };

        const max = filteredCourses[0].score;
        let toReturn: Course;
        const bestMatches = filteredCourses.filter(item => item.score === max);

        const best = bestMatches.reduce((acc, current) => {

            if (acc.course.fee < current.course.fee) {
                return current
            }
            return acc

        }, bestMatches[0]);

        toReturn = best.course;

        console.log(toReturn);
        setResult(toReturn);
        setSubmitted(true);
    }

    return (
        !submitted ? (
            <div>
                <div className="relative w-full max-h-150 overflow-y-auto overflow-x-hidden scrollbar-none max-w-lg px-4 py-8 border border-gray-200 rounded-xl shadow-sm place-self-center bg-white" data-aos="zoom-in">
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-900">Find Your Course</h2>
                        <p className="mt-2 text-sm text-gray-500">Discover the course that fits your interests, experience and goals.</p>
                    </div>
                    <div className="mb-8 flex items-center-safe gap-2">
                        {[1, 2, 3].map(item => (<div key={item} className={`h-1 flex-1 rounded-full ${item <= step ? "bg-accent" :
                            "bg-gray-200"}`}
                        />))}
                    </div>
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}>
                            {questions.map(que => (<div key={que.id} className="mb-10 w-full shrink-0">
                                <h2 className="mb-4">{que.question}</h2>
                                <div className="flex flex-col gap-2">
                                    {que.options.map(q => <label key={q.value}>
                                        <input type="radio" name={que.id} value={q.value} className="peer sr-only" required
                                            onChange={(e) => setAnswers(prev => ({ ...prev, [que.id]: e.target.value }))} />
                                        <div className="rounded-xl border border-gray-200 p-4 py-3 transition peer-checked:border-accent peer-checked:bg-cherry">{q.label}</div>
                                    </label>)}
                                </div>
                            </div>))}
                        </div>
                    </div>
                    <div className="flex justify-between px-4 text-white">
                        {step > 1
                            ? <button type="button" className="bg-accent p-2 rounded-sm cursor-pointer"
                                onClick={() => setStep(p => p - 1)}>Previous</button>
                            : <span />
                        }
                        {step !== 3
                            ? <button type="button" className="bg-accent p-2 rounded-sm cursor-pointer"
                                onClick={() => { setStep(p => p + 1) }}>Next</button>
                            : <button type="button" className="bg-accent p-2 rounded-sm cursor-pointer"
                                onClick={solve}>Find my course</button>
                        }
                    </div>
                </div>
            </div>
        ) : (
            <div>
                {(result !== null) && <div>
                    {result && <div>{result.name}</div>}
                    <div className="mt-5 flex justify-center-safe">
                        <button type="button" className="bg-accent p-2 rounded-sm cursor-pointer text-white"
                            onClick={() => {
                                setStep(1);
                                setSubmitted(false);
                            }}>Have a different choice?</button>
                    </div>
                </div>}
                {(result === null || !result) && <div className="flex flex-col gap-3 items-center-safe">
                    <p>No matches found... Click the button to try again</p>
                    <button type="button" className="bg-accent p-2 rounded-sm cursor-pointer text-white"
                        onClick={() => {
                            setStep(1);
                            setSubmitted(false);
                        }}>Try Again</button>
                </div>}
            </div>
        )
    )
}