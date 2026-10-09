import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import type { Dispatch, SetStateAction } from "react";
import styles from "./Home.module.scss";

function MainHero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <main className={styles.main} data-aos="fade-up">
            <span className={styles.eyebrow}>
                Enterprise Capability & Talent
            </span>

            <h1 className={styles.heading}>
                Build the{" "}
                <span>Technical Capability</span>{" "}
                your <strong>Business</strong> Runs On
            </h1>

            <p className={styles.description}>
                Cherryville designs and delivers technical training for
                organizations across oil and gas, banking, government and the
                development sector — and supplies the skilled talent to keep
                the work moving.
            </p>

            <div className={styles.actions}>
                <button type="button"
                    onClick={() => setIsOpen(p => !p)} className="accent-button">
                    <span>Request a Proposal</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <button type="button" className="outline-button text-white">
                    Explore Our Services
                </button>
            </div>
        </main>
    );
}

export function Hero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <MainHero setIsOpen={setIsOpen} />
                </div>
            </div>
        </section>
    );
}