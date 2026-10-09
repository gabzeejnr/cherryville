import { Link } from "react-router-dom";
import Section from "../Section";
import { classroom } from "../../libs";

export function AcademyTeaser() {
    return (
        <Section bg="bg-cherry">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                    <h2>
                        Not here on behalf of an organisation?
                    </h2>

                    <p
                        className="max-w-xl text-base font-medium leading-relaxed text-text sm:text-lg"
                        data-aos="zoom-in"
                    >
                        Cherryville Academy runs courses for individuals at
                        every level, including people who have never worked
                        in tech before. Tell us what interests you, and we
                        will point you to one course, not a catalogue.
                    </p>

                    <div data-aos="flip-left">
                        <Link
                            to="/academy"
                            className="accent-button"
                        >
                            Find your course
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl sm:p-4"
                    data-aos="slide-left"
                >
                    <img
                        src={classroom}
                        alt="Learners participating in a classroom training session"
                        loading="lazy"
                        className="aspect-4/3 w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}