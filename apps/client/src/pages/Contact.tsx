import { useState } from "react";
import { useDocumentMeta, useGoToTopOnLoad } from "../hooks";
import Hero from "../components/Hero";
import backgroundImage from "../assets/images/contact/hero.jpg";
import ContactFormSection from "../components/contact/ContactFormSection";
import WhatHappensNext from "../components/contact/WhatHappensNext";
import RequestAProposal from "../components/forms/RequestAProposal";
import type { Heading } from "../types"


const heading: Heading = {
    title: "Tell us what your people need to be able to do.",
    highlights: ["tell", "us", "able", "to", "do."]
}
const subtitle = "The more precisely you can describe the gap, the more precisely we can price the solution. If you are not yet sure what the gap is, say so, scoping is part of what we do."

export default function Contact() {

    const [isOpen, setIsOpen] = useState(false)

    useDocumentMeta({
        title: "Request a Proposal",
        description: "Tell us what your team needs to be able to do. We respond with a scoped program, timeline and price within two business days."
    })
    useGoToTopOnLoad("contact")

    return (
        <>
            <Hero page="Contact" heading={heading} subtitles={subtitle} backgroundImage={backgroundImage} />
            <WhatHappensNext setIsOpen={setIsOpen} />
            <ContactFormSection />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}