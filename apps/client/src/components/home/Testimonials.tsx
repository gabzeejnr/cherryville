import Section from "../Section";
import { getInitials } from "../../utils";
import { testimonialColumns } from "../../data";
import type { FC } from "react";
import type { TestimonialType } from "../../types";
import styles from "./Home.module.scss";


const Star: FC<{ filled: boolean }> = ({ filled }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true"
        className={`h-6 w-6 ${filled ? "fill-[#FDF2E9]" : "fill-[#FDF2E9]/25"}`}
    >
        <path d="M12 2.5l2.94 6.1 6.56.9-4.8 4.6 1.2 6.6L12 17.6l-5.9 3.1 1.2-6.6-4.8-4.6 6.56-.9L12 2.5z" />
    </svg>
);

function TestimonialCard({ quote, name, role, organisation, rating, avatar }: TestimonialType) {

    return (
        <figure className={`${styles.testimonialCard} flex w-full max-w-sm flex-col gap-5 rounded-3xl p-3`}>
            <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} filled={i < rating!} />
                ))}
            </div>

            <blockquote className={`${styles.quote} text-sm leading-snug`}>
                &ldquo;{quote}&rdquo;
            </blockquote>

            <figcaption className="flex items-center gap-3">
                {avatar ? (
                    <img src={avatar} alt={name} className={`${styles.avatar} h-10 w-10 rounded-full object-cover`} />
                ) : (
                    <span className={`${styles.avatar} ${styles.avatarFallback} flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold`}>
                        {getInitials(name)}
                    </span>
                )}
                <div className="flex flex-col">
                    <span className="font-semibold">{name}</span>
                    <span className="text-sm opacity-70">
                        {role}, {organisation}
                    </span>
                </div>
            </figcaption>
        </figure>
    );
}

export function Testimonials() {
    return (
        <Section bg="bg-cherry" title="Capability That Makes a Difference" subtitle="The measure of a training programme is what people can do differently when it ends.">

            <div className="flex flex-col items-center md:hidden gap-3 mt-10">
                {testimonialColumns.slice(0, 1).map((column, index) => (
                    <div key={index} className="space-y-2">
                        {column.map((testimonial, i) => (
                            <div key={`${testimonial.name}-${String(i + 100)}`} className="w-fit h-fit" data-aos="fade-up" data-aos-delay={i * 200}>
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="hidden md:flex justify-center gap-3 mt-20">
                {testimonialColumns.map((column, index) => (
                    <div key={index} className={`space-y-1 ${index !== 1 ? "pt-10" : ""}`}>
                        {column.map((testimonial, i) => (
                            <div key={`${testimonial.name}-${String(i + 200 + index)}`} className="w-fit h-fit" data-aos="fade-up" data-aos-delay={i * 200 * index}>
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </Section>
    )
}