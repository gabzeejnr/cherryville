import { RequestAProposalButton } from "../Buttons";
import Section from "../Section";
import type { Dispatch, SetStateAction } from "react";

export function Closing({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <Section title="Tell us what your people need to be able to do."
            subtitle="Send us the capability gap and we will come back with a scoped programme, a timeline and a price.">
            <div className="flex items-center justify-center mt-10">
                <RequestAProposalButton setIsOpen={setIsOpen} />
            </div>
        </Section>
    )
}