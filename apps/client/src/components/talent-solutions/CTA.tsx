import type { Dispatch, SetStateAction } from "react";
import Section from "../Section";
import { RequestAProposalButton } from "../Buttons";

export default function CTA({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <Section bg="bg-bg" subtitle="Tell us the role and the standard it has to meet. We will tell you whether to hire, to train, or to do both.">
            <div className="flex justify-center-safe mt-10">
                <RequestAProposalButton setIsOpen={setIsOpen} />
            </div>
        </Section>
    )
}