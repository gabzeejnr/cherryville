import { useState } from "react";
import { useDocumentMeta, useSectionId } from "../hooks";
import { pageMeta, subtitle, heading } from "../data";
import Hero from "../components/Hero";
import backgroundImage from "../assets/images/heroes/enterpriseBackground.jpg";
import Introduction from "../components/enterprise-training/Intorduction";
import ServiceLines from "../components/enterprise-training/ServiceLines";
import DeliveryStandard from "../components/enterprise-training/DeliveryStandard";
import DeliveryFormat from "../components/enterprise-training/DeliveryFormat";
import Closing from "../components/enterprise-training/Closing";
import RequestAProposal from "../components/forms/RequestAProposal";
import { RequestAProposalButton } from "../components/Buttons";

export default function EnterpriseTraining() {

    const [isOpen, setIsOpen] = useState(false);

    useDocumentMeta(pageMeta)
    useSectionId()

    return (
        <>
            <Hero subtitles={subtitle} page="Enterprise Training" heading={heading} backgroundImage={backgroundImage}>
                <RequestAProposalButton setIsOpen={setIsOpen} arrow />
            </Hero>
            <Introduction />
            <ServiceLines />
            <DeliveryStandard />
            <DeliveryFormat />
            <Closing setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}