import { useDocumentMeta } from "../../hooks";
import Hero from "../../components/academy/intermediate/Hero";
import WhatToExpect from "../../components/academy/WhatToExpect";
import CourseList from "../../components/academy/CourseList";
import CTA from "../../components/academy/CTA";
import { intermediate } from "../../data/academy.data";

export default function Intermediate() {

    const subtitles: string[] = [
        "Intermediate courses are project-driven. You will build, break and rebuild real work rather than follow along with exercises. Facilitators bring live problems from the organisations we train, so what you practise reflects what employers are actually asking for.",
        "Entry requires demonstrated foundations — either a Cherryville beginner course or an assessment at enrolment. Most run between twelve and sixteen weeks."
    ];

    useDocumentMeta({
        title: "Intermediate Tech Courses in Nigeria | Job-Ready Training",
        description: "Specialise and become employable. Intermediate courses in data analytics, Python, React, C#, Power Platform, networking, security operations and product management."
    })

    return (
        <>
            <Hero />
            <WhatToExpect subtitles={subtitles} />
            <CourseList courses={intermediate} />
            <CTA subtitle="If you are unsure whether your foundations are strong enough, take our free placement assessment. It takes twenty minutes and tells you which level to enrol at." button="Take the placement test" />
        </>
    )
}