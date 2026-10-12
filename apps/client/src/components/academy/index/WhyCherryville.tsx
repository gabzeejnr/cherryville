import Section from "../../Section";
import { whyCherryville } from "../../../data";
import { List } from "../../Lists";


export default function WhyCherryville() {
    return (
        <Section bg="bg-bg" title="Why Cherryville?">
            <List array={whyCherryville} />
        </Section>
    );
}
