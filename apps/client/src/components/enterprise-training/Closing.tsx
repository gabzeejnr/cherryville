import type { Dispatch, SetStateAction } from "react";
import { RequestAProposalButton } from "../Buttons";

export default function Closing({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={`bg-cherry h-screen`}>
            <div className="py-10 px-5 flex h-full flex-col gap-6 items-center justify-center text-center">
                <h2 className="leading-10 lg:leading-15 font-bold text-3xl">Send us the <span className="text-accent">capability</span> gap. We will return a <span className="text-accent">scoped programme</span>, a delivery <span className="text-accent">timeline</span> and a price, not a <span className="text-accent">brochure.</span></h2>
                <div>
                    <RequestAProposalButton setIsOpen={setIsOpen} />
                </div>
            </div>
        </section>
    )
}