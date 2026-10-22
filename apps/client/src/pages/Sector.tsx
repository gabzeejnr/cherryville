import { useState } from "react";
import { useDocumentMeta, useGoToTopOnLoad, useFormAnalytics } from "../hooks";
import RequestAProposal from "../components/forms/RequestAProposal";
import Challenge from "../components/sectors/Challenge";
import Engage from "../components/sectors/Engage";
import Hero from "../components/Hero";
import HowWeHelp from "../components/sectors/HowWehelp";
import type { Template } from "../types/sectors.types";

export default function SectorTemplate({
    route,
    heading,
    subtitle,
    challenge,
    help,
    engage
}: Template) {

    const page = route.split("-").filter(Boolean).map(s => (s === "and"
        ? s
        : s.charAt(0).toUpperCase() + s.slice(1)
    )).join(" ");
    const [isOpen, setIsOpen] = useState(false);

    useDocumentMeta({
        title: page,
        description: ""
    })
    useGoToTopOnLoad(`sectors/${route}`)
    useFormAnalytics(isOpen, "request_proposal");


    return (
        <div className="bg-cherry pb-10">
            <Hero page={`${page} sector`} heading={heading} subtitles={subtitle} />
            <Challenge challenge={challenge} />
            <HowWeHelp help={help} />
            <Engage engage={engage} setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </div>
    )
}