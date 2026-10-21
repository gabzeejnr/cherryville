import { useState } from "react";
import styles from "../../styles/global.module.scss";

function Required() {
    return <span className={styles.required} />
}

export default function CotactForm() {

    const [loading, setLoading] = useState<boolean>(false)

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        setLoading(true);
        e.preventDefault();
        alert("Go back");
        setLoading(false);
        return;
    }

    return (
        <div className="relative w-full max-h-150 overflow-y-auto overflow-x-hidden scrollbar-none max-w-2xl px-4 py-8"
            data-aos="zoom-in">
            <div className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="flex justify-between gap-4">
                    <div className="space-y-2 flex-1">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="name">Full Name</label>
                            <Required />
                        </span>
                        <input type="text" name="name" id="name" placeholder="Enter your full name"
                            required className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>

                    <div className="space-y-2 flex-1">
                        <span className="relative block text-sm font-medium text-gray-700">
                            <label htmlFor="email">Email Address</label>
                            <Required />
                        </span>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label>
                    <input type="tel" name="organization" id="organization" placeholder="Your company or organization"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                </div>

                <div className="space-y-2">
                    <span className="relative block text-sm font-medium text-gray-700">
                        <label htmlFor="message">
                            Message
                        </label>
                        <Required />
                    </span>
                    <textarea name="message" id="message" rows={5} placeholder="Tell us how we can help..."
                        className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                </div>

                <button type="submit" className={`w-full flex items-center justify-center gap-2 rounded-md ${loading ? "bg-accent-hover" : "bg-accent"} cursor-pointer px-6 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
                    disabled={loading} aria-disabled={loading}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Send Message</span>
                </button>

            </form>
        </div >
    )
}