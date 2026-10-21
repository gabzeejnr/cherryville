import Section from "../../Section";
import Image from "../../../assets/images/academy/learningPath.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBullseye,
    faPlantWilt,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

function Card({
    title,
    text,
    icon,
}: {
    title: string;
    text: string;
    icon: IconDefinition;
}) {
    return (
        <article className="flex min-h-37.5 flex-col items-start justify-center gap-3 rounded-2xl bg-accent p-5 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-6">
            <FontAwesomeIcon icon={icon} className="text-2xl text-cherry" />

            <h3 className="font-heading text-lg font-bold">{title}</h3>

            <p className="text-sm leading-relaxed text-white/80">{text}</p>
        </article>
    );
}

export default function LearningPath() {
    const paths = [
        {
            title: "Beginner",
            text: "Build foundations and develop essential skills.",
            icon: faPlantWilt,
        },
        {
            title: "Intermediate",
            text: "Apply what you know to practical work.",
            icon: faChartLine,
        },
        {
            title: "Advanced",
            text: "Refine your expertise and master your craft.",
            icon: faBullseye,
        },
    ];

    return (
        <Section title="Find your Learning Path" bg="bg-cherry"
            subtitle="Whether you're starting out or advancing your expertise, there's a place for you." compact
        >
            <div className="mx-auto mt-10 grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
                <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Your journey starts here
                    </p>

                    <h3 className="max-w-xl font-heading text-2xl font-bold leading-tight text-[#171516] sm:text-3xl">
                        The right training for wherever you are.
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-[#5E4A52]">
                        Choose a starting point that matches your experience, build
                        practical capabilities, and progress toward your career goals.
                    </p>

                    <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {paths.map((path) => (
                            <Card
                                key={path.title}
                                title={path.title}
                                text={path.text}
                                icon={path.icon}
                            />
                        ))}
                    </div>
                </div>

                <figure className="relative w-full lg:justify-self-end">
                    <div className="absolute -bottom-3 -left-3 h-2/3 w-2/3 rounded-[28px] bg-accent/10" />

                    <div className="relative aspect-4/5 max-h-135 w-full overflow-hidden rounded-[28px] bg-[#F0DDE3]">
                        <img src={Image} alt="Learner developing practical skills at a laptop" className="h-full w-full object-cover" />
                    </div>

                    <figcaption className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                            Cherryville Academy
                        </p>
                        <p className="mt-1 font-heading text-lg font-bold text-[#171516]">
                            Learn today. Grow tomorrow.
                        </p>
                    </figcaption>
                </figure>
            </div>
        </Section>
    )
}