import type { FourSteps, ServiceLines } from "../types/talentSolutions.types";
import type { DocumentMeta, Heading } from "../types";

const subtitles = "When the capability you need is not on your payroll and the market cannot supply it fast enough, we build it or we bring it."

const pageMeta: DocumentMeta = {
    title: "Tech Talent Solutions & Staff Augmentation in Nigeria",
    description: "Embedded technical specialists, trained-to-specification talent, and project delivery teams for organisations across Nigeria."
};
const heading: Heading = {
    title: "Skilled Technical People, Supplied to your Satisfaction",
    highlights: ["skilled", "technical", "satisfaction"]
}

const serviceLines: ServiceLines[] = [
    {
        id: "resource-personnel",
        title: "Resource Personnel & Staff Augmentation",
        text: "Named technical specialists embedded in your project team for a defined period. We manage sourcing, contracting, supervision and performance; you gain the capability without carrying the headcount. Suitable for project peaks, specialist gaps and cover for critical roles."
    },
    {
        id: "recruit-train-deploy",
        title: "Recruit-Train-Deploy",
        text: "We source candidates, train them against your technical specification, assess them, and deploy them job-ready. You define the standard and sign off the curriculum; we build people who meet it. This is how organisations fill roles the open market cannot supply, and how they build a pipeline rather than repeating a search every year."
    },
    {
        id: "project-delivery",
        title: "Project Delivery Teams",
        text: "A constituted team assembled for a defined scope of work — led, managed and accountable to an agreed deliverable rather than to an hourly rate. Appropriate where you need an outcome delivered and would rather not build the management layer around it."
    }
]

const fourSteps: FourSteps[] = [
    {
        title: "Specification",
        text: "we work with your technical lead to define the role, the tooling and the standard a person must meet."
    },
    {
        title: "Sourcing or training",
        text: "we identify people who already meet the standard, or we train to it. Often both."
    },
    {
        title: "Assessment",
        text: "every candidate is assessed against the agreed specification before you meet them."
    },
    {
        title: "Deployment and Support",
        text: "placement, onboarding and an agreed review point. "
    }
]

export { pageMeta, subtitles, heading, serviceLines, fourSteps }