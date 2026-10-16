import Hero from "../../components/Hero";
import {
    privateHeading as heading,
    privateSubtitle as subtitle
} from "../../data";
import backgroundImage from "../../assets/images/heroes/privateTraining.jpg";
import HowItWorks from "../../components/academy/private-training/HowItWorks";
import WhoItSuits from "../../components/academy/private-training/WhoItSuits";
import { useGoToTopOnLoad } from "../../hooks";

export default function PrivateTraining() {

    useGoToTopOnLoad("academy/private-training");
    
    return (
        <>
            <Hero page="Private Training" heading={heading} subtitles={subtitle} backgroundImage={backgroundImage} />
            <HowItWorks />
            <WhoItSuits />
        </>
    )
}