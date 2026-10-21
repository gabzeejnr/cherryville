import Hero from "../../components/Hero";
import backgroundImage from "../../assets/images/academy/coursesHero.jpg";
import CourseList from "../../components/academy/courses/CourseList";
import LearningPath from "../../components/academy/courses/LearningPath";
import type { Heading } from "../../types";

const heading: Heading = {
    title: "Learn skills. Build your future.",
    highlights: ["learn", "build", "future."]
}

const subtitle = "Practical training designed to help you grow your skills, advance your career, and solve real workplace challenges."

export default function Courses() {
    return (
        <>
            <Hero page="Courses" heading={heading} subtitles={subtitle} backgroundImage={backgroundImage}></Hero>
            <LearningPath />
            <CourseList />
        </>
    )
}