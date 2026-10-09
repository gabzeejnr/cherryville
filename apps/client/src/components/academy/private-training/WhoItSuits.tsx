import { AccentButton } from "../../Buttons";
import Section from "../../Section";

export default function WhoItSuits() {

    const data: string[] = [
        "Professionals who need a specific competency for a role they already hold. ",
        "Executives who prefer not to learn alongside their own staff. ",
        "Career changers working around full-time employment. ",
        "Anyone who has started a group course before and did not finish it. "
    ]

    return (
        <Section title="Who it Suits" bg="bg-bg">
            <ul className="list-disc list-inside flex flex-col gap-2" data-aos="fade-up">
                {data.map(d => (
                    <div>
                        <div className="ml-5">{d}</div>
                    </div>
                ))}
            </ul>
            <div className="flex flex-col mt-25 md:mt-50 mb-30 md:mb-30 gap-8 items-center-safe justify-center-safe">
                <p className="text-center text-lg font-medium text-gray-600">
                    Every private engagement is governed by a written training agreement setting out scope, schedule, session count and fees before we begin.
                </p>
                <AccentButton text="Book a scoping call" />
            </div>
        </Section>
    )
}