import Section from "../Section";
import { serviceLines } from "../../data/talentSolutions.data";
import { TitleText } from "../Cards";

export default function ServiceLines() {
    return (
        <Section bg="bg-bg">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLines.map(s => <div data-aos="fade-up" key={s.title}>
                    <TitleText title={s.title} text={[s.text]} id={s.id} />
                </div>)}
            </div>
        </Section>
    )
}