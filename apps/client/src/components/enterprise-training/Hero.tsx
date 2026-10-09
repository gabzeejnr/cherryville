import type { Dispatch, SetStateAction } from "react";
import styles from "./Enterprise.module.scss";

export default function Hero({ setIsOpen }: { setIsOpen:  Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={styles.hero}>
            <div className="flex flex-col min-h-screen py-10 justify-center items-center">
                <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <span className="text-[#D4F870]">Training</span> Your <span className="text-[#d4f870]">Organisation</span> Can <span className="text-[#d4f870]">Measure</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                        We design and deliver technical programmes for workforces that need to do more with the systems and data they already own and we prove what changed.
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