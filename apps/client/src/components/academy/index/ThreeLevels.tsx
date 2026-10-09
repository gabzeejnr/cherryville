import { Link } from "react-router-dom";
import Section from "../../Section";
import { threeLevels } from "../../../data";

export default function ThreeLevels() {
    return (
        <Section>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-center">
                {threeLevels.map(level => (
                    <div className="flex flex-col gap-4 lg:gap-8 h-auto sm:h-70 lg:h-80 shadow-md hover:-translate-y-3 transition-all duration-1000 hover:shadow-lg py-3 px-2 lg:p-6 rounded-2xl bg-white"
                        key={level.title} data-aos="fade-up">
                        <h3 className="flex justify-center text-xl md:text-4xl font-medium mb-4 text-center">{level.title}</h3>
                        <p className="text-center text-base font-medium text-gray-600">{level.text}</p>

                        <div className="flex mt-auto">
                            <Link to={level.title.toLowerCase()} className="w-full">
                                <button className="bg-accent hover:bg-accent-hover transition-colors duration-700 w-full p-2 font-medium text-white rounded-lg cursor-pointer">
                                    Browse {level.title} Courses
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}