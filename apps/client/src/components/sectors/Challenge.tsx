import Section from "../Section";
import { List } from "../Lists"

export default function Challenge({ challenge }: { challenge: string }) {
    return (
        <Section title="The Challenge" bg="bg-cherry" className="px-3 md:px-8 lg:px-20 py-20 bg-cherry flex flex-col gap-5 min-h-screen justify-center">
            <List array={challenge.split(".").filter(Boolean)} />
        </Section>
    )
}