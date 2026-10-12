import { deliveryFormat } from "../../data/enterpriseTraining.data"
import { TitleTextList } from "../Lists"

export default function DeliveryFormat() {
    return (
        <section className="px-3 md:px-5 py-20 bg-cherry">
            <h3 className="">Our Delivery Format</h3>
            <div className="pl-6">
                <TitleTextList array={deliveryFormat} />
            </div>
            <div className="mt-10 text-gray-500 font-medium">We run concurrent cohorts across multiple cities where the workforce is distributed, and scale the facilitator bench to the size of the programme. </div>
        </section>
    )
}