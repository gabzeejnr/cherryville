import Section from "../Section";
import { sectorsServed } from "../../data";
import type { Serve } from "../../types";
import styles from "./Home.module.scss";

function Card({ sector }: { sector: Serve }) {
    const { title, text, icon: Icon } = sector;

    return (
        <article className={styles.sectorCard}>
            <div className={styles.sectorIcon}>
                <Icon color="white" />
            </div>

            <p className={styles.sectorText}>
                <span>{title}: </span>
                {text}
            </p>
        </article>
    );
}

export function SectorsWeServe() {
    return (
        <div className={styles.sectorsSection}>
            <Section className="px-3 md:px-5 py-20" bg={null}>
                <h2 className={`${styles.accentH2} text-center`}>We Work Where Technical Capabilities Carry Weight</h2>
                <p className="text-center text-lg font-medium text-cherry">
                    Different sectors buy training for different reasons. We build the programme around yours.
                </p>
                <div className={styles.sectorGrid}>
                    {sectorsServed.map((sector, i) => (
                        <div data-aos="slide-right" data-aos-delay={i * 300} key={sector.text}>
                            <Card sector={sector} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}