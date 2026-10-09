import { AccentButton } from "../Buttons";
import Section from "../Section";

export default function CTA({
    title,
    subtitle,
    children,
    button,
    onClick
}: {
    title?: string,
    subtitle: string,
    children?: React.ReactNode,
    button?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <Section title={title ?? ""} subtitle={subtitle}>
            <div className="flex justify-center-safe mt-10">
                {children && children}
                {button && <div data-aos="flip-right">
                    <AccentButton text={button} onClick={onClick!} />
                </div>}
            </div>
        </Section>
    )
}