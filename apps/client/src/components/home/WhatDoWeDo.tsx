import { Link } from "react-router-dom";
import { doings } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import type { Doings } from "../../types";
import styles from "./Home.module.scss";

function Card({ doing }: { doing: Doings }) {
    const { link, text, title } = doing;
    const Icon = doing.icon.icon;
    const { color, bgColor } = doing.icon;

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <div className={styles.iconWrap} style={{ background: bgColor }}>
                    <Icon color={color ?? "white"} />
                </div>

                <span className={styles.cardTitle}>{title}</span>
            </div>

            <div className={styles.cardBody}>
                <p className={styles.cardText}>{text}</p>

                <Link to={link.href} className={styles.cardLink} style={{
                    "--link-color": bgColor
                } as React.CSSProperties}>
                    {link.text}
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    );
}

export function WhatDoWeDo() {

    return (
        <section className="px-3 md:px-10 py-20 bg-cherry">
            <h2 className="flex justify-center text-3xl md:text-4xl font-medium mb-4">What We Do</h2>
            <div className="mt-10 md:mt-15 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {doings.map(d => <div data-aos="fade-up" key={d.text}>
                    <Card doing={d} />
                </div>)}
            </div>
        </section>
    )
}