import { useState } from "react";
import { useDocumentMeta, useGoToTopOnLoad } from "../hooks";
import RequestAProposal from "../components/forms/RequestAProposal";
import Challenge from "../components/sectors/Challenge";
import Engage from "../components/sectors/Engage";
import Hero from "../components/sectors/Hero";
import HowWeHelp from "../components/sectors/HowWehelp";
import type { Template } from "../types/sectors.types";
import { RequestAProposalButton } from "../components/Buttons";

export default function SectorTemplate({
    route,
    heading,
    headingText,
    challenge,
    help,
    engage
}: Template) {

    const title = route;
    const [isOpen, setIsOpen] = useState(false)

    useDocumentMeta({
        title,
        description: ""
    })
    useGoToTopOnLoad(`sectors/${title}`)


    return (
        <div className="bg-cherry pb-10">
            <Hero heading={heading} heroText={headingText} />
            <Challenge challenge={challenge} />
            <HowWeHelp help={help} />
            <Engage engage={engage} />
            <div className="flex justify-center-safe">
                <RequestAProposalButton setIsOpen={setIsOpen} />
            </div>
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </div>
    )
}