import Section from "../Section";

export default function Positioning() {

    const subArray: string[] = [
        "A recruiter searches the market for someone who already matches your description, and if that person does not exist, the search continues. We take a different route: we train to the standard you define.",
        "That distinction matters most for roles the open market genuinely cannot fill — where the tooling is specific, the domain knowledge is narrow, or the volume required exceeds what is available. Because we are a training company first, building the capability is our ordinary business rather than a last resort. "
    ];

    return (
        <Section title="We are not a Recruitment Agency" subtitleArray={subArray} />
    )
}