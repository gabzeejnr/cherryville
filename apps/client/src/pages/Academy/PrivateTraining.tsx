import Hero from "../../components/Hero";
import HowItWorks from "../../components/academy/private-training/HowItWorks";
import WhoItSuits from "../../components/academy/private-training/WhoItSuits";
import type { Heading } from "../../types";

export default function PrivateTraining() {

    const subtitle = "Some people learn faster without a room. Others cannot commit to a fixed cohort calendar, or need to cover a specific gap rather than a full curriculum. Private training exists for both."
    const heading: Heading = {
        title: "One trainer. One learner",
        highlights: ["one"]
    }

    return (
        <>
            <Hero page="Private Training" heading={heading} subtitles={subtitle} />
            <HowItWorks />
            <WhoItSuits />
        </>
    )
}