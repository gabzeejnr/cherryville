import api from "../../api/axios";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { courses } from "../../data/academy.data";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Message, EnrollmentResult, EnrollmentForm } from "@cherryville/shared"
import type { LearningStyle as Format, Experience, Course } from "../../types/academy.types";
import styles from "../../styles/global.module.scss";

function Required() {
    return <span className={styles.required} />
}

export default function AcademyEnrollment({ setEnroll, thisCourse }: { setEnroll: Dispatch<SetStateAction<boolean>>, thisCourse: Course["name"] }) {

    const [loading, setLoading] = useState<boolean>(false)

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setLoading(true);


        const form: EnrollmentForm = {
            applicant_name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            course_name: formData.get("course") as string,
            level: formData.get("level") as Experience,
            format: formData.get("format") as Format
        }

        console.log(form);

        try {
            const res = await toast.promise(api.post("/talent/enroll"), {
                loading: "Enrolling user.",
                success: (result) => result.data?.message,
                error: (err) => `Enrollment failed: ${err.response?.data?.error || err.message || "Something went wrong"}`
            });

            const data: Message<EnrollmentResult> = res.data.message;
            console.log(data)


        } catch (err) {
            if (err instanceof Error) {
                console.error("Enrollment failed:", err);
            }
        } finally {
            setLoading(false);
        }
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
                            {courses.sort((a, b) => {
                                if (a.name === thisCourse) return -1;
                                if (b.name === thisCourse) return 1;
                                return 0;
                            })
                                .map(course => <option key={course.name} value={course.name}>{course.name}</option>)}
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
                            <option value="weekday">Weekdays</option>
                            <option value="virtual">Virtual</option>
                        </select>
                    </div>

                    <button type="submit" className={`w-full rounded-md ${loading ? "bg-accent-hover" : "bg-accent"} cursor-pointer px-6 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cherry focus:ring-offset-2`}
                        disabled={loading} aria-disabled={loading}>
                        Submit Enrollment
                    </button>

                </form>
            </div>
        </div>
    )
}