import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import styles from "../../../styles/global.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="flex flex-col min-h-[50dvh] py-10 justify-center-safe">
                <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <span className="text-accent">Start</span> where <span className="text-accent">you are. Train</span> for a <span className="text-accent">job you can</span> name.
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                        Cherryville Academy runs courses for individuals at three levels. You do not need a technical background to begin — you only need to know what kind of work interests you.
                    </p>

                    <div className="flex flex-col sm:flex-row mt-5 items-center gap-4 w-full sm:w-auto">
                        <button type="button"
                            className="bg-accent px-4 inline-flex items-center justify-center gap-2 py-3 rounded-full cursor-pointer w-full">
                            <span className="min-w-fit">Help me Choose</span><FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <button type="button"
                            className="bg-heading-secondary px-4 inline-flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer w-full">Browse All Courses</button>
                    </div>
                </main>
            </div>
        </section>
    )
}