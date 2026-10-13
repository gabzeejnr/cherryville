import { AccentButton } from "../Buttons";
import Section from "../Section";
import type { AcademyCTA } from "../../types";

export default function CTA({ title, subtitle, children, button, onClick }: AcademyCTA) {
    return (
        <Section title={title ?? ""} subtitle={subtitle}>
            <div className="mt-8 flex flex-col items-center gap-5 text-center sm:mt-10">
                {children}

                {button && (
                    <div data-aos="flip-right">
                        <AccentButton text={button} {...(onClick ? { onClick } : {})} />
                    </div>
                )}
            </div>
        </Section>
    )
}