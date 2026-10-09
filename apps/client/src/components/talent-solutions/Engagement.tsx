import Section from "../Section";
import { fourSteps } from "../../data/talentSolutions.data";

export default function Engagement() {
    return (
        <Section title="How Engagement Works" subtitle="Four Steps">
            <div className="mt-5 md:mt-10">
                <ul className="flex flex-col gap-4 list-disc pl-5">
                    {fourSteps.map(step => (
                        <li key={step.title}>
                            <h3 className="inline-block font-bold">{step.title}:</h3>
                            <span className="text-[15px] font-medium"> {step.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10 text-base font-medium text-gray-900">
                <p>Contracting is flexible: fixed-term placement, contract-to-hire, or direct transfer to your payroll at an agreed point. We will tell you which structure suits the requirement rather than defaulting to the one that pays us longest.</p>
            </div>
        </Section>
    )
}