import { X } from "lucide-react";
import { courses } from "../../data/academy.data";
import type { Dispatch, SetStateAction } from "react";
import type { LearningStyle as Format } from "../../types/academy.types";
import styles from "../../styles/global.module.scss";

type Level = "No experience" | "Some experience" | "Working in Tech";

type Form = {
    name: string,
    email: string,
    phone: string,
    course: string,
    level: Level,
    format: Format
}

function Required() {
    return <span className={styles.required} />
}

export default function AcademyEnrollment({ setEnroll }: { setEnroll: Dispatch<SetStateAction<boolean>> }) {

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const form: Form = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            course: formData.get("course") as string,
            level: formData.get("level") as Level,
            format: formData.get("format") as Format
        }

        console.log(form)
    }

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 py-7">
            <div className="relative w-full max-h-150 overflow-y-auto overflow-x-hidden scrollbar-none max-w-2xl px-4 py-8 border border-gray-200 rounded-xl shadow-sm place-self-center bg-white"
                data-aos="zoom-in">
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                        <div className="flex items-center justify-between">
                            Enroll into the Academy
                            <button type="button" className="mr-1 cursor-pointer" onClick={() => setEnroll(false)}>
                                <X />
                            </button>
                        </div>
                    </h2>
                    {/* <p className="mt-2 text-sm text-gray-500">
                        Tell us a little about your organisation and what you need.
                    </p> */}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="name">Full Name</label>
                            <Required />
                        </span>
                        <input type="text" name="name" id="name" placeholder="Enter your full name"
                            required className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry" />
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="email">Email</label>
                            <Required />
                        </span>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="relative block text-sm font-medium text-gray-700">
                            Phone Number
                            <Required />
                        </label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter phone number" required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry"
                        />
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="course">
                                Course
                            </label>
                            <Required />
                        </span>
                        <select name="course" id="course" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry">
                            {courses.map(course => <option key={course.name} value={course.name}>{course.name}</option>)}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="level">
                                Level
                            </label>
                            <Required />
                        </span>
                        <select name="level" id="level" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry">
                            <option disabled>Choose Experience Level</option>
                            <option value="beginner">No experience</option>
                            <option value="intermediate">Some experience</option>
                            <option value="advanced">Working in Tech </option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="format">
                                Format
                            </label>
                            <Required />
                        </span>
                        <select name="format" id="format" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry">
                            <option value="weekend">Weekends</option>
                            <option value="weeekday">Weekdays</option>
                            <option value="virtual">Virtual</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full rounded-md bg-accent cursor-pointer px-6 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cherry focus:ring-offset-2">
                        Submit Enrollment
                    </button>

                </form>
            </div>
        </div>
    )
}