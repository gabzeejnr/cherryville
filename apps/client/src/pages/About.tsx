import { useDocumentMeta } from "../hooks";
import Hero from "../components/Hero";
import { heading, subtitles, pageMeta } from "../data/about.data";
import HowWeAewStructured from "../components/about/HowWeAreStructured";
import Founder from "../components/about/Founder";

export default function About() {

    useDocumentMeta(pageMeta)

    return (
        <>
            <Hero page="About" heading={heading} subtitles={subtitles} />
            <HowWeAewStructured />
            <Founder />
        </>
    );
}