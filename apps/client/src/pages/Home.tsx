import { useState } from 'react';
import { useDocumentMeta, useGoToTopOnLoad } from '../hooks';
import { Hero, Marquee, WhatDoWeDo, SectorsWeServe, HowWeWork, Testimonials, AcademyTeaser, Closing } from "../components/home";
import RequestAProposal from '../components/forms/RequestAProposal';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    useDocumentMeta({
        title: "Corporate Tech Training & Talent Solutions in Nigeria",
        description: "Technical training and skilled tech talent for organisations in oil and gas, banking, government and the development sector. Delivered by Microsoft Certified Trainers."
    })
    useGoToTopOnLoad("");

    return (
        <>
            <Hero setIsOpen={setIsOpen} />
            <Marquee />
            <WhatDoWeDo />
            <SectorsWeServe />
            <HowWeWork />
            <Testimonials />
            <AcademyTeaser />
            <Closing setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}
