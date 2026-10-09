import Section from "../../Section";
import RecommendCourse from "./RecommendCourse";

export default function CourseFinder() {
    return (
        <Section title="Not sure where to start? Answer three questions.">
            <div className="mt-6">
                <RecommendCourse />
            </div>
        </Section>
    )
}