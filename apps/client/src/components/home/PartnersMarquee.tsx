import { marquee } from "../../data";
import styles from "./Home.module.scss";

export function Marquee() {

    const images = Array.from({ length: 4 }).flatMap(() => marquee)

    return (
        <section className="w-full py-10 bg-white border-y border-gray-100 overflow-hidden">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 pb-6">TRUSTED BY LEARNERS FROM </p>
            <div className="relative flex overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className={`${styles["marquee-content"]} items-center`}>
                    {[0, 1].map((g) => (
                        <div key={g} className="flex shrink-0 items-center" aria-hidden={g === 1}>
                            {images.map((m, i) => (
                                <img key={`${g}-${i}-${m.name}`} src={m.image} alt={g === 0 ? m.name : ""}
                                    className="max-w-50 h-8 mr-15 shrink-0"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
