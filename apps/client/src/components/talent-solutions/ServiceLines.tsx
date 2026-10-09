import Section from "../Section";
import { serviceLines } from "../../data/talentSolutions.data";
import type { ServiceLines } from "../../types/talentSolutions.types";

function Card({ service }: { service: ServiceLines }) {
    return (
        <div id={service.id} className="flex flex-col gap-5 bg-cherry p-4 shadow-lg rounded-2xl sm:max-h-80 md:max-h-75 md:pb-5 lg:h-70 justify-center-safe">
            <h3 className="font-semibold text-lg flex-1 pt-3 md:py-4 px-3">{service.title}</h3>
            <p className="text-[15px] flex-4 sm:flex-5 font-normal">{service.text}</p>
        </div>
    )
}

export default function ServiceLines() {
    return (
        <Section bg="bg-bg">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLines.map(s => <div data-aos="fade-up" key={s.title}>
                    <Card service={s} />
                </div>)}
            </div>
        </Section>
    )
}