import { useDocumentMeta } from "../../hooks";
import Hero from "../../components/academy/beginner/Hero";
import WhatToExpect from "../../components/academy/WhatToExpect";
import CourseList from "../../components/academy/CourseList";
import CTA from "../../components/academy/CTA";
import AcademyWhatsapp from "../../components/academy/Whatsapp";
import { beginner } from "../../data/academy.data";

export default function Beginner() {

    const subtitles: string[] = [
        "Every beginner course runs on the same principles. We teach one thing at a time and check that it landed before moving on. We use plain language and explain every term the first time it appears. Classes are small enough that you can ask the question you are embarrassed to ask.",
        "You will be assessed before you start, so we know where you are beginning from, and again at the end, so you can see exactly how far you moved. Most beginner courses run between eight and twelve weeks, with weekday and weekend options."
    ]

    useDocumentMeta({
        title: "Beginner Tech Courses in Lagos — No Experience Needed",
        description: "Start a career in technology with no prior experience. Beginner courses in Excel, data, web development, design, cybersecurity, cloud and hardware repair."
    })

    return (
        <>
            <Hero />
            <WhatToExpect subtitles={subtitles} />
            <CourseList courses={beginner} />
            <CTA title="Still unsure which one?" subtitle="That is normal, and it is the most common reason people delay starting. Speak to an advisor and we will recommend one course based on what interests you, not a list to choose from.">
                <AcademyWhatsapp divText="Speak to an advisor" text="Hello! I'm interested in learning more about Cherryville Limited's programs." />
            </CTA>
        </>
    )
}