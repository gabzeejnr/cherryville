import Hero from "../../components/Hero";
import {
    privateHeading as heading,
    privateSubtitle as subtitle
} from "../../data";
import backgroundImage from "../../assets/images/heroes/privateTraining.jpg";
import HowItWorks from "../../components/academy/private-training/HowItWorks";
import WhoItSuits from "../../components/academy/private-training/WhoItSuits";

export default function PrivateTraining() {


    return (
        <>
            <Hero page="Private Training" heading={heading} subtitles={subtitle} backgroundImage={backgroundImage} />
            <HowItWorks />
            <WhoItSuits />
        </>
    )
}