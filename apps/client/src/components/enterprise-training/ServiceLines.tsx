import Section from "../Section";
import { serviceLines } from "../../data/enterpriseTraining.data"
import { TitleText } from "../Cards";


export default function ServiceLines() {
    return (
        <Section title="Service Lines" bg="bg-bg">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLines.map(service => <TitleText key={service.id} id={service.id} title={service.title} text={[service.text]} />)}
            </div>
        </Section>
    )
}