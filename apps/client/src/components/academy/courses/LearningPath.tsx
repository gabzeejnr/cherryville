import Section from "../../Section";


function Card({ title, text }: { title: string, text: string }) {
    return (
        <div className="rounded-3xl h-15 w-20 bg-accent-dark flex flex-col gap-1 justify-center">
            <span>{title}</span>
            <p>{text}</p>
        </div>
    )
}

export default function LearningPath() {

    const test = [
        {
            title: "Beginner",
            text: "Build foundations"
        },
        {
            title: "Intermediate",
            text: "Apply your skills"
        },
        {
            title: "Advanced",
            text: "Master your craft"
        }
    ]
    return (
        <Section title="Find your Learning Path" bg="bg-cherry"
            subtitle="Whether you are starting out or advancing your expertise, there's a place for you">
            <div className="flex">
                <p>Whether you are starting out or advancing your expertise, there's a place for you</p>
                <div className="flex gap-3 md:gap-6">
                    {test.map(t => <Card key={t.title} title={t.title} text={t.text} />)}
                </div>
            </div>
        </Section>
    )
}