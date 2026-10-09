import { useState } from "react";
import { useDocumentMeta, useGoToTopOnLoad, useSectionId } from "../hooks";
import { pageMeta, subtitles, heading } from "../data/talentSolutions.data";
import { RequestAProposalButton } from "../components/Buttons";
import Hero from "../components/Hero";
import backgroundImage from "../assets/images/hero1-bg.jpg";
import Positioning from "../components/talent-solutions/Positioning";
import ServiceLines from "../components/talent-solutions/ServiceLines";
import Engagement from "../components/talent-solutions/Engagement";
import RequestAProposal from "../components/forms/RequestAProposal";
import CTA from "../components/talent-solutions/CTA";

export default function TalentSolutions() {

    const [isOpen, setIsOpen] = useState(false)

    useDocumentMeta(pageMeta)
    useGoToTopOnLoad("talent-solutions");
    useSectionId();

    return (
        <>
            <Hero page="Talent Solutions" subtitles={subtitles} heading={heading}
                backgroundImage={backgroundImage} >
                <RequestAProposalButton setIsOpen={setIsOpen} arrow />
            </Hero>
            <Positioning />
            <ServiceLines />
            <Engagement />
            <CTA setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}