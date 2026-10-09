import Section from "../../Section";
import { whyCherryville } from "../../../data";

export default function WhyCherryville() {
    return (
        <Section bg="bg-bg" title="Why Cherryville?">
            <ul className="list-disc list-inside grid gap-2 pl-2">
                {whyCherryville.map(why => <li>{why.trim()}</li>)}
            </ul>
        </Section>
    )
}