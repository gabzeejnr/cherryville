import Section from "../Section"
import { deliveryFormat } from "../../data/enterpriseTraining.data"
import { TitleTextList } from "../Lists"

export default function DeliveryFormat() {
    return (
        <Section title="Our Delivery Format" className="px-3 md:px-5 py-20 bg-cherry">
            <div>
                <TitleTextList array={deliveryFormat} />
            </div>
            <div className="mt-10 text-gray-500 font-medium">We run concurrent cohorts across multiple cities where the workforce is distributed, and scale the facilitator bench to the size of the programme. </div>
        </Section>
    )
}