import { Link } from "react-router-dom";
import fallback from "../assets/images/home/method-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Clock } from "../assets/svg/courses";
import { addDot } from "../utils";
import type { Course as Default } from "../types/index";

function TitleText({ id, title, text, bg }: {
    id?: string,
    title: string,
    text: string[],
    bg?: "bg-cherry" | "bg-white" | "bg-accent"
}) {
    return (
        <div id={id} className={`title-text-card ${bg ?? ""}`}>
            <div>
                <h3 className="">{title}</h3>
                {text.map(t => <p key={t}>{t}</p>)}
            </div>
        </div>
    )
}

function CourseCard({
    name,
    level,
    description,
    duration,
    fee,
    image,
    slug
}: {
    name: Default["name"];
    level: Default["experience"];
    duration: Default["duration"];
    fee: Default["fee"];
    description: Default["outcome"][0];
    slug: Default["slug"];
    image?: Default["image"];
}) {
    return (
        <article className="group mb-6 flex h-full flex-col overflow-hidden rounded-2xl border border-cherry bg-white p-4 shadow-[0_2px_12px_rgba(104,10,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(104,10,48,0.12)]">
            <div className="aspect-16/10 w-full overflow-hidden rounded-xl bg-cherry">
                <img src={image ?? fallback} alt={name} loading="lazy"
                    className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <span className="mt-5 w-fit rounded-full bg-[#FDF2E9] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#680A30]">
                {level}
            </span>

            <h3 className="mb-2 mt-3 text-xl font-bold leading-snug text-accent">{name}</h3>

            <p className="text-[15px] leading-relaxed text-[#6B6266]">{addDot(description)}</p>

            <div className="mb-5 mt-5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm text-[#6B6266]"><Clock />{duration}</span>
                <span className="text-lg font-bold text-[#AE154D]">₦{fee.toLocaleString("en-NG")}</span>
            </div>

            <Link to={slug} className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border-2 border-accent bg-transparent px-4 py-3.5 text-base font-semibold text-accent transition-colors duration-200 hover:bg-[#AE154D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AE154D] focus-visible:ring-offset-2">
                View course details
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
        </article>
    )
}

function AnotherCourseCard({ image, name, description, slug }: {
    name: Default["name"];
    description: Default["outcome"][0];
    slug: Default["slug"];
    image?: Default["image"];
}) {
    return (
        <article className="group h-full pt-2.5 pb-5 px-2.5 bg-cherry border-accent border rounded-xl">
            <Link to={slug} className="block mb-5 relative w-full aspect-250/120 overflow-hidden rounded-xl">
                <img src={image ?? "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792882507/e5c90e6e-353b-4768-8861-a23b3d4b73b0_gxg7qi.jpg"} alt={`${name}-image`} className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2.5 left-2.5 py-1 px-2.5 rounded-lg font-medium text-white text-xs bg-accent">Now Open</div>
            </Link>
            <div className="p-0 sm:px-2.5 flex flex-col ">
                <Link to={slug} className="text-center font-bold transition-colors duration-500 group-hover:text-accent">{name}</Link>
                <div className="text-center sm:text-start flex flex-col gap-4">
                    <p className="text-center">{addDot(description)}</p>
                </div>
            </div>
        </article>
    )
}

export { TitleText, CourseCard, AnotherCourseCard }