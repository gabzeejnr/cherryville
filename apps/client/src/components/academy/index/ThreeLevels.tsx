
import { Link } from "react-router-dom";
import Section from "../../Section";
import { threeLevels } from "../../../data";

export default function ThreeLevels() {
    return (
        <Section bg="bg-cherry">
            <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {threeLevels.map((level) => (
                    <div key={level.title} data-aos="fade-up"
                        className="flex h-full flex-col gap-4 rounded-2xl bg-white px-4 py-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:p-6 lg:gap-6"
                    >
                        <h3 className="mb-2 text-center text-2xl font-medium text-heading md:text-3xl">{level.title}</h3>

                        <p className="text-center text-base leading-relaxed text-gray-600">{level.text}</p>

                        <div className="mt-auto pt-2">
                            <Link to={level.title.toLowerCase()}
                                className="flex w-full items-center justify-center rounded-lg bg-accent p-3 text-center font-medium text-white transition-colors duration-300 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                            >Browse {level.title} Courses</Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
