import { Link } from "react-router-dom";
import { useDocumentMeta } from "../../hooks";
import { useGoToTopOnLoad } from "../../hooks";
import Hero from "../../components/Hero";
import backgroundImage from "../../assets/images/academy/hubHero.jpg"
import { academyHeading, subtitle } from "../../data/academy.data";
import CourseFinder from "../../components/academy/index/CourseFinder";
import ThreeLevels from "../../components/academy/index/ThreeLevels";
import WhyCherryville from "../../components/academy/index/WhyCherryville";
import CTA from "../../components/academy/CTA";
import AcademyWhatsapp from "../../components/academy/Whatsapp";
import { AccentButton } from "../../components/Buttons";

export default function Academy() {

    useDocumentMeta({
        title: "Tech Courses in Lagos | Beginner to Advanced",
        description: "Career-focused technical courses for individuals in Nigeria. Start with no experience or specialise at advanced level. Every course is built around a named job role."
    })
    useGoToTopOnLoad("academy");

    return (
        <>
            <Hero page="Academy" heading={academyHeading} subtitles={subtitle} backgroundImage={backgroundImage}>
                <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <AccentButton text="Help Me Choose" className="w-full sm:w-auto" arrow onClick={() =>
                        document.getElementById("course-finder")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                    } />
                    <Link to="/academy/courses" className="outline-button mt-0 w-full border-white/50 text-white hover:border-accent sm:w-auto">
                        Browse all courses
                    </Link>
                </div>
            </Hero>
            <CourseFinder />
            <ThreeLevels />
            <WhyCherryville />
            <CTA subtitle="Speak to an advisor before you enrol. It takes ten minutes and it saves you from paying for the wrong course.">
                <AcademyWhatsapp divText="Speak to an advisor" text="Hello! I'm interested in learning more about Cherryville Limited's programs." />
            </CTA>
        </>
    )
}