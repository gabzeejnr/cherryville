import type { Dispatch, SetStateAction } from "react";
import styles from "../../styles/global.module.scss";

export default function Hero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {

    return (
        <section className={styles.hero}>
            <div className="flex flex-col min-h-screen py-10 justify-center-safe">
                <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <span className="text-[#D4F870]">Skilled Technical</span> People, Supplied to Your <span className="text-[#d4f870]">Satisfaction</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                        When the capability you need is not on your payroll and the market cannot supply it fast enough, we build it or we bring it.
                    </p>

                    <div className="flex flex-col sm:flex-row mt-5 items-center gap-4 w-full sm:w-auto">
                        <button type="button" onClick={() => setIsOpen(prev => !prev)}
                            className="bg-accent px-4 inline-flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer w-full">
                            <span className="min-w-fit">Request a Proposal</span><span>&rarr;</span>
                        </button>
                    </div>
                </main>
            </div>
        </section>
    )
}