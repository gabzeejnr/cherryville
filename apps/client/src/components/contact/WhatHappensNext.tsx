import { RequestAProposalButton } from "../Buttons";
import Section from "../Section";
import type { Dispatch, SetStateAction } from "react";

export default function WhatHappensNext({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {

    const NEXT: string[] = [
        "We acknowledge your enquiry within two business days.",
        "We arrange a scoping conversation with the relevant lead in your organisation. ",
        "We return a written proposal setting out objectives, structure, duration, assessment approach and price."
    ]

    return (
        <Section>
            <div className="flex justify-center-safe">
                <RequestAProposalButton setIsOpen={setIsOpen} />
            </div>

            <div className="mt-15 md:mt-30" />

            <h2 className="flex justify-center text-2xl md:text-3xl font-medium mb-4 text-center">What Happens Next</h2>

            <div className="mt-15 md:mt-10" />

            <ul className="list-disc list-inside">
                {NEXT.map(next => <li key={next}>{next}</li>)}
            </ul>

        </Section>
    )
}