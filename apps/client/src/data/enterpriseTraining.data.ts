import type { ServiceLines, DocumentMeta, Heading } from "../types";

const pageMeta: DocumentMeta = {
    title: "Corporate Technical Training in Nigeria",
    description: "Cohort-based technical training, custom curriculum design, capability assessment and white-label delivery for organisations across Nigeria."
};

const subtitle = "We design and deliver technical programmes for workforces that need to do more with the systems and data they already own and we prove what changed.";
const heading:Heading = {
    title: "Training your Organisation can Measure",
    highlights: ["training", "organisation", "measure"]
}

const serviceLines: readonly ServiceLines[] = [
    {
        id: "technical-capability-development",
        title: "Technical Capability Development",
        text: "Structured cohort-based training that raises the technical capability of your existing workforce. Programs are scoped to your operatig environment, delivered in person or virtually by Microsoft Certified Trainers, and governed end to end by our programme lifecycle standard from definintion through delivery to a formal closure."
    },
    {
        id: "custom-curriculum-design",
        title: "Custom Curriculum Design",
        text: "Curriculum, facilitator manuals, participant workbooks, competency framework and assessment instruments, built to your specifications. Commission the design alone and run it with your own trainers, or have Cherryville deliver it for you. What we build is yours to own and reuse."
    },
    {
        id: "measurement-and-reporting",
        title: "Measurement & Reporting",
        text: "Training you can evidence. We assess capability before, during, and after delivery analyse the matched cohort, and report the movement to your executive team inn terms they can act on. When your board asks what the investment produced, you will have an answer with data behind it."
    },
    {
        id: "partner-and-white-label",
        title: "Partner & White - Label Delivery",
        text: "A delivery aim for consultancies and contractors who have won the work and need the training capability behind it. We deliver under your brand, to your standards, under full confidentiality. Your client relationship remains entirely yours."
    }
]

const deliveryStandard: readonly { title: string, text: string[] }[] = [
    {
        title: "Definition",
        text: ["We establish the capability gap, agree measurable objectives with your sponsors and design the curriculum and assessment instruments against them."]
    },
    {
        title: "Delivery",
        text: ["Facilitation by certified trainers, with attendance, participation and graded assessment captured throughout. Mid-programme data lets us correct course while the cohort is still in the room."]
    },
    {
        title: "Closure",
        text: [
            "Post-training assessment, matched-cohort analysis against the baseline, a formal report to your sponsors, and recommendations for what should follow.",
            "Assessment runs on a standard instrument set applied at three points; before, midway and at the end, so the gain we report is a comparison, not an impression. "
        ] as const
    }
]

const deliveryFormat: { title: string, text: string }[] = [
    {
        title: "In-house",
        text: "at your facility, using your systems and your data where permitted. "
    },
    {
        title: "Off-site",
        text: "at conference and hotel venues, with logistics coordinated by Cherryville. "
    },
    {
        title: "Virtual",
        text: "instructor-led, with the same assessment framework applied. "
    },
    {
        title: "Blended",
        text: "virtual foundations followed by intensive in-person practice."
    }
]

export { pageMeta, subtitle, heading, serviceLines, deliveryStandard, deliveryFormat }