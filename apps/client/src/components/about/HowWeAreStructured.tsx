import Section from "../Section";

export default function HowWeAewStructured() {
    return (
        <Section title="Certified facilitators, engaged to the programme"
            subtitle="Every Cherryville facilitator is a Microsoft Certified Trainer. Facilitators are engaged on contract to each programme, which lets us scale the bench to the size of the work and assign trainers whose certification matches the subject rather than whoever is on staff that month.">
            <div className="mt-10 md:mt-20 flex flex-col gap-4 lg:gap-8">
                <h2 className="flex justify-center text-xl md:text-3xl font-medium mb-4 text-center">Controlled Internal Standards</h2>

                <p className="text-center text-lg font-medium text-gray-600">
                    Our delivery is governed by two internal standards. The first defines the programme lifecycle — Definition, Delivery and Closure and the assurance gates between them. The second defines the assessment instruments applied before, during and after every programme. These are not aspirational documents; no programme proceeds past a gate without clearing it.
                </p>
            </div>
        </Section>
    )
}