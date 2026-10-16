import { useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import type { Dispatch, SetStateAction } from "react";
import type { ProposalForm } from "@cherryville/shared"
import styles from "../../styles/global.module.scss";


function Required() {
    return <span className={styles.required} />
}

export default function RequestAProposal({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    const [loading, setLoading] = useState<boolean>(false)

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            const form: ProposalForm = {
                name: formData.get("name") as string,
                organisation: formData.get("organisation") as string,
                email: formData.get("email") as string,
                phone: formData.get("phone") as string,
                sector: formData.get("sector") as ProposalForm["sector"],
                services: formData.getAll("services") as ProposalForm["services"],
                number: Number(formData.get("number")),
                timeframe: formData.get("timeframe") as ProposalForm["timeframe"],
                message: formData.get("message") as string
            }

            await toast.promise(api.post("/enterprise/request-proposal", form), {
                loading: "Sending Proposal",
                success: (res) => res.data?.message,
                error: (err) => `Enrollment failed: ${err.response?.data?.error || err.message || "Something went wrong"}`
            });

            setIsOpen(false);

        } catch (err) {
            console.error("Something went wrong.")
        }
    }

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 py-7">
            <div className="relative w-full max-h-150 overflow-y-auto overflow-x-hidden scrollbar-none max-w-2xl px-4 py-8 border border-gray-200 rounded-xl shadow-sm place-self-center bg-white"
                data-aos="zoom-in">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        <div className="flex items-center justify-between">
                            Request a Proposal
                            <button type="button" className="mr-1 cursor-pointer" onClick={() => setIsOpen(false)}>
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Tell us a little about your organisation and what you need.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="name">
                                Full Name
                            </label>
                            <Required />
                        </span>
                        <input type="text" name="name" id="name" placeholder="Enter your full name"
                            required className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry" />
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="organisation">
                                Organisation
                            </label>
                            <Required />
                        </span>
                        <input type="text" name="organisation" id="organisation" required
                            placeholder="Enter name of organisation"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry"
                        />
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="email">
                                Work Email
                            </label>
                            <Required />
                        </span>
                        <input type="email" name="email" id="email" placeholder="Enter work email" required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter phone number" required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry"
                        />
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="sector">
                                Sector
                            </label>
                            <Required />
                        </span>
                        <select name="sector" id="sector" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry">
                            <option value="" aria-disabled="true">Choose a Sector</option>
                            <option value="oil-and-gas">Oil and Gas</option>
                            <option value="banking-and-finance">Banking and Financial Services</option>
                            <option value="government">Government and Public Sector</option>
                            <option value="ngo">NGO and Development</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <fieldset className="space-y-3">
                        <legend className="block text-sm font-medium text-gray-700">What do you need?</legend>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" name="services" value="staff-training" className="h-4 w-4 accent-cherry" />
                                Staff Training
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" name="services" value="curriculum-design" className="h-4 w-4 accent-cherry" />
                                Curriculum Design
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" name="services" value="assessment-reporting" className="h-4 w-4 accent-cherry" />
                                Assessment Reporting
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" name="services" value="technical-talent" className="h-4 w-4 accent-cherry" />
                                Technical Talent
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" name="services" value="partner-delivery" className="h-4 w-4 accent-cherry" />
                                Partner Delivery
                            </label>
                        </div>
                    </fieldset>

                    <div className="space-y-2">
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                            Approximate Number of People
                        </label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            min="1"
                            max="50"
                            defaultValue={1}
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">
                            Target Timeframe
                        </label>
                        <select name="timeframe" id="timeframe" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry">
                            <option value="one-month">Within One Month</option>
                            <option value="one-three-months">One to Three Months</option>
                            <option value="more-than-3-months">Three Months or More</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="message">
                                Message
                            </label>
                            <Required />
                        </span>
                        <textarea name="message" id="message" rows={5} defaultValue="I would like to..."
                            placeholder="Tell us more about what you need..."
                            className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cherry focus:ring-1 focus:ring-cherry"
                        />
                    </div>

                    <button type="submit" className="w-full rounded-md bg-accent cursor-pointer px-6 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cherry focus:ring-offset-2"
                        disabled={loading} aria-disabled={loading}>
                        Submit Request
                    </button>

                </form>
            </div>
        </div>
    )
}