import Hero from "../../components/Hero";
import HowItWorks from "../../components/academy/private-training/HowItWorks";
import WhoItSuits from "../../components/academy/private-training/WhoItSuits";
import {
    privateHeading as heading,
    privateSubtitle as subtitle
} from "../../data";

export default function PrivateTraining() {


    return (
        <>
            <Hero page="Private Training" heading={heading} subtitles={subtitle} />
            <HowItWorks />
            <WhoItSuits />
        </>
    )
}