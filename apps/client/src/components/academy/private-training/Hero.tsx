import styles from ".././../../styles/global.module.scss"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
                <div className="flex flex-col min-h-[50dvh] py-10 justify-center items-center">

                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <span className="text-[#d4f870]">One</span> trainer. <span className="text-[#d4f870]">One</span> learner. <span className="text-[#d4f870]">Your schedule.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">
                        Some people learn faster without a room. Others cannot commit to a fixed cohort calendar, or need to cover a specific gap rather than a full curriculum. Private training exists for both.
                    </p>

                </div>
            </main>
        </section>
    )
}