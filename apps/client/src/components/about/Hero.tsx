import styles from "../../styles/global.module.scss";

export default function Hero() {

    return (
        <section className={styles.hero}>
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
                <div className="flex flex-col min-h-[50dvh] py-10 justify-center items-center">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cherry/40 bg-[#163833]/60 backdrop-blur-sm text-cherry text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cherry animate-bounce inline-block" />
                        <span className={`${styles.typing}`}>ABOUT</span>
                    </div>

                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        A <span className="text-accent">training company</span> built around <span className="text-accent">outcomes.</span>
                    </h1>

                    <div className="flex flex-col gap-4 md:gap-7">
                        <p className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">
                            Cherryville Limited (RC 9150439) is a Lagos-based education technology and capacity development company. We exist to close the distance between what organisations need their people to do and what those people are currently equipped to do.
                        </p>

                        <p className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">
                            We work at both ends of that problem. For organisations, we design and deliver technical programmes and supply skilled people. For individuals, we run courses that lead to named roles rather than to certificates alone. The two sides feed each other: training the organisations that hire tells us precisely what the people we teach need to be able to do.
                        </p>
                    </div>

                </div>
            </main>
        </section>
    )
}