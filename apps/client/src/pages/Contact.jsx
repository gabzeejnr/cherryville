import { useState } from "react";
import { useDocumentMeta, useGoToTopOnLoad } from "../hooks";
import Hero from "../components/contact/Hero";
import ContactFormSection from "../components/contact/ContactFormSection";
import WhatHappensNext from "../components/contact/WhatHappensNext";
import RequestAProposal from "../components/forms/RequestAProposal";

export default function Contact() {

    const [isOpen, setIsOpen] = useState(false)

    useDocumentMeta({
        title: "Request a Proposal",
        description: "Tell us what your team needs to be able to do. We respond with a scoped programme, timeline and price within two business days."
    })
    useGoToTopOnLoad("contact")

    return (
        <>
            <Hero />
            <WhatHappensNext setIsOpen={setIsOpen} />
            <ContactFormSection />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}