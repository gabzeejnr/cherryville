import { Link } from "react-router-dom";
import Section from "../Section";
import imageCover from "../../assets/images/home/method-image.jpg";
import { phases } from "../../data";
import type { HoverCardType } from "../../types";
import styles from "./Home.module.scss";


function HoverCard({ background, title, text, top, bottom, left, right, aos }: HoverCardType) {
    return (
        <div className={styles.phaseCard} style={{ background, top, bottom, left, right }} data-aos={aos}>
            <span className={styles.phaseNumber}>{title}</span>
            <span className={styles.phaseText}>{text}</span>
        </div>
    )
}

export function HowWeWork() {
    return (
        <Section>
            <div className={styles.methodSection}>
                <div className={styles.methodContent}>
                    <span className={styles.eyebrow}>OUR DELIVERY STANDARD</span>

                    <h2 className={styles.methodHeading}>A method, not a menu.</h2>

                    <div className={styles.methodCopy}>
                        <p>
                            Every Cherryville programme runs through three
                            governed phases: Definition, Delivery and Closure,
                            with formal assurance gates between them.
                        </p>

                        <p>
                            We agree on the capability gap before designing
                            anything, measure progress while the programme is
                            live, and close with evidence rather than a
                            certificate ceremony.
                        </p>

                        <p>
                            It takes more work at the start. It is also why
                            our programmes are designed to hold up long after
                            the training ends.
                        </p>
                    </div>

                    <Link to={{
                        pathname: "/enterprise-training",
                        hash: "#delivery-standard",
                    }} className="accent-button" data-aos="flip-left">
                        See how we deliver
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className={styles.methodVisual}>
                    <img src={imageCover} alt="Professionals collaborating in a modern working environment"
                        className={styles.methodImage} loading="lazy"
                    />

                    {phases.map((phase) => (
                        <HoverCard aos="fade-up"
                            key={phase.text}
                            {...phase}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}