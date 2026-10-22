import { RequestAProposalButton } from "../Buttons";
import Section from "../Section";

export default function Engage({ engage, setIsOpen }: { engage: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return <Section bg="bg-cherry" title="How we Engage" className="px-3 md:px-8 lg:px-20 py-20 bg-cherry flex flex-col gap-5 min-h-screen justify-center"
        subtitleArray={engage.split(".")}
    >
        <div className="flex justify-center">
            <RequestAProposalButton setIsOpen={setIsOpen} />
        </div>
    </Section>
}