import { deliveryStandard } from "../../data/enterpriseTraining.data";
import { TitleText } from "../Cards";

export default function DeliveryStandard() {
    return (
        <section id="delivery-standard" className="px-3 md:px-5 py-20 bg-cherry">
            <h3 className="flex justify-center text-3xl font-bold text-center mb-5">How a Cherryville programme runs</h3>
            <p className="gray-subheading">Our programs are governed by a acntrolled internal standard with the three phases and four assurance gates. Nothing moves forward until the gate is cleared.</p>

            <div className="grid gap-6 py-10 grid-cols-1 md:grid-cols-3">
                {deliveryStandard.map(del => <TitleText key={del.title} bg="bg-white" title={del.title} text={del.text} />)}
            </div>
        </section>
    )
}