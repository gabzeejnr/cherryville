import Section from "../../Section";

export default function HowItWorks() {

    const subtitles: string[] = [
        "We begin with a scoping conversation to establish what you need to be able to do and by when. From that we build a session plan, agree a schedule that fits around your work, and assign a facilitator whose certification matches the subject.",
        "Sessions run in person or virtually, typically two hours at a time, over an agreed programme length. A three-month engagement of thirty-six sessions is common for a full proficiency track; shorter engagements are available where the objective is narrower. "
    ];

    return (
        <Section title="How it Works" subtitleArray={subtitles} />
    )
}