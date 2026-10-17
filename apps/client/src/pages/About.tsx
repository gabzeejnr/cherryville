import { useDocumentMeta } from "../hooks";
import Hero from "../components/Hero";
import backgroundImage from "../assets/images/about/aboutHero.jpg";
import { heading, subtitles, pageMeta } from "../data/about.data";
import HowWeAewStructured from "../components/about/HowWeAreStructured";
import Founder from "../components/about/Founder";

export default function About() {

    useDocumentMeta(pageMeta)

    return (
        <>
            <Hero page="About" heading={heading} subtitles={subtitles} backgroundImage={backgroundImage} />
            <HowWeAewStructured />
            <Founder />
        </>
    );
}