import Section from "../Section";
import founder from "../../assets/images/about/founder.jpeg";
import styles from "./About.module.scss";

export default function Founder() {
    return (
        <Section bg="bg-cherry">
            <div className="flex flex-col items-center justify-center md:flex-row gap-10 lg:px-20">
                <div className="overflow-hidden">
                    <div className={`${styles.imageHolder}`} data-aos="slide-right">
                        <img src={founder} alt="Gabriel Osho Profile" className={styles.image} />
                    </div>
                </div>
                <div className="flex-1" data-aos="fade-up">
                    <h2 className="font-bold md:text-lg lg:text-xl">Gabriel A. Osho — Founder & Principal</h2>

                    <div className="mt-7 flex flex-col gap-5 text-sm lg:text-[17px]">

                        <p className="text-[15px]">
                            Gabriel Osho is the Founder and Principal of Cherryville Limited, a Lagos-based EdTech and capacity development company dedicated to <strong>Empowering Growth Through Learning</strong>. Under his leadership, Cherryville partners with organizations in oil and gas, banking, government and the non-profit sector to deliver practical, outcome-driven technology training, and to connect businesses with skilled tech talent ready to contribute from day one.
                        </p>

                        <p className="text-[15px]">
                            Gabriel brings a rare blend of program management, operations analysis, data analytics and compliance experience to the work of building capability. Before founding Cherryville, he spent four years at The Bulb Africa, where he served as Program Manager and Operations Analyst, Data Analyst and Training Facilitator, and Compliance and Debt Recovery Officer. In that time he managed more than eight concurrent training programs, oversaw delivery of the national 3MTT program across its first two cohorts, and helped produce over 1,000 trained candidates, more than half of whom secured employment. His career began in data analytics at Enov8 Tech Hub.
                        </p>


                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:px-20 mt-5">
                <p className="text-[15px]">
                    A graduate of Meteorology and Climate Science from the Federal University of Technology, Akure, Gabriel is himself proof that a career in technology is open to anyone willing to learn. That conviction shapes everything Cherryville does: training is measured not by attendance, but by the confidence, capability and career outcomes it creates.
                </p>
                <p className="text-[15px]">
                    Today, Gabriel's focus is on building Cherryville into a trusted workforce partner for Nigerian organizations, one that closes the gap between training and real-world performance, and turns learning into measurable growth for both people and businesses.
                </p>
            </div>
        </Section>
    )
}