import { Fragment } from "react/jsx-runtime";
import type { Heading, HeroType } from "../types";
import styles from "../styles/global.module.scss";

function HighlightText({ heading }: { heading: Heading }) {

    const { title, highlights } = heading;
    if (!highlights || !highlights.length) return <span>{title}</span>
    const parts = title.split(" ");

    return (
        <p>
            {parts.map((part, index) => {
                const isMatch = highlights.some(high => high.toLowerCase() === part.toLowerCase());

                return isMatch ? <span key={index} className="text-accent">{part} </span> : <Fragment key={index}>{part} </Fragment>
            })}
        </p>
    )

}

export default function Hero({ page, heading, subtitles, children, backgroundImage }: HeroType) {

    if (!page || !heading.title) return <></>

    return (
        <section className={backgroundImage ? styles.hero : styles.backupHero}>
            {backgroundImage
                ? <>
                    <div className={styles.background} style={
                        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined
                    } />
                    <div className={styles.overlay} />
                </>
                : null
            }

            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">

                <div className="flex flex-col min-h-[50dvh] py-10 justify-center items-center">

                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cherry backdrop-blur-md sm:text-xs">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cherry" />
                        <span className={styles.typing}>{page}</span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        <HighlightText heading={heading} />
                    </h1>

                    {subtitles ?
                        Array.isArray(subtitles)
                            ? subtitles.length && subtitles.map(sub =>
                                <p key={sub.slice(0, 10)} className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">{sub}</p>
                            )
                            : <p className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">{subtitles}</p>
                        : null
                    }

                    {children &&
                        <div className="flex flex-col sm:flex-row mt-5 items-center gap-4 w-full sm:w-auto">{children}</div>
                    }

                </div>

            </main>
        </section>
    )
}