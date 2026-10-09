import styles from ".././../../styles/global.module.scss"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
                <div className="flex flex-col min-h-[50dvh] py-10 justify-center items-center">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6b9d88]/40 bg-[#163833]/60 backdrop-blur-sm text-[#a5e076] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4f870] inline-block" />
                        <span className={`${styles.typing}`}>INTERMEDIATE'S ACADEMY</span>
                    </div>

                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <span className="text-[#d4f870]">You</span> have the <span className="text-[#d4f870]">foundations.</span> Now <span className="text-[#d4f870]">specialise.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                        These courses take one direction and go deep enough to make you employable in it. Each finishes with work you can put in front of an employer.
                    </p>

                </div>
            </main>
        </section>
    )
}