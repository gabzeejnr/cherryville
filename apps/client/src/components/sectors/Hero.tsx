import styles from "../../styles/global.module.scss";

function HighlightText({ text, highlights }: { text: string, highlights: string[] }) {
    
    if (!highlights || !highlights.length) return <span>{text}</span>
    
    const parts = text.split(" ");

    return (
        <p>
            {parts.map((part, index) => {
                const isMatch = highlights.some(high => high.toLowerCase() === part.toLowerCase());

                return isMatch ? (<span key={index} className="text-[#d4f870]">{part} </span>) : <span>{part} </span>
            })}
        </p>
    )
}

export default function Hero({ heading, heroText }: {
    heading: {
        text: string,
        highlights: string[]
    },
    heroText: string
}) {

    const { text, highlights } = heading
    return (
        <section className={styles.hero}>
            <div className="flex flex-col min-h-screen py-10 justify-center items-center">
                <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">

                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <HighlightText text={text} highlights={highlights} />
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">{heroText}</p>

                </main>
            </div>
        </section>
    )
}