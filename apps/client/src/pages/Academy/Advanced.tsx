import {useDocumentMeta} from "../../hooks";
import Hero from "../../components/academy/advanced/Hero";
import CourseList from "../../components/academy/CourseList";
import CTA from "../../components/academy/CTA";
import WhatToExpect from "../../components/academy/WhatToExpect";
import { advanced } from "../../data/academy.data";

export default function Advanced() {

    useDocumentMeta({
        title: "Advanced Tech & Certification Courses in Nigeria",
        description: "For practitioners. Advanced training in Power BI, Azure architecture, full-stack development, security engineering, data engineering and AI."
    })

    const subtitles: string[] = [
        "These courses assume working knowledge and move quickly. Sessions are structured around problems rather than syllabus coverage, and cohorts are kept small so the discussion stays at the level of the room.",
        "Several tracks map directly to Microsoft certification paths, and facilitators hold the certifications they teach. Where a course leads to an examination, we prepare you for it explicitly rather than leaving it to your own time."
    ]
    return (
        <>
            <Hero />
            <WhatToExpect subtitles={subtitles} />
            <CourseList courses={advanced} />
            <CTA subtitle="Advanced cohorts run to a published calendar and fill early. Register your interest and we will confirm the next start date for your track." button="Register interest"></CTA>
        </>
    )
}