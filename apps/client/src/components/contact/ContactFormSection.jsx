import { Link } from "react-router-dom";
import { AccentButton } from "../Buttons";
import ContactForm from "../forms/ContactForm";
import { phoneNumber, linkedIn as linkedin, socials, footerLinks } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faSearchLocation } from "@fortawesome/free-solid-svg-icons";


const links = [...socials, ...footerLinks[2].links];
const SOCIAL_LINKS = { linkedin }

function whatsappUrl(message) {
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
        message
    )}&type=phone_number&app_absent=0`;
}

function ContactInfoItem({ icon, label, children, href }) {
    const content = (
        <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={icon.icon} color={icon.color} />
            </div>
            <div className="text-white">
                <p className="font-bold text-sm mb-0.5">{label}</p>
                <div className="text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition">
            {content}
        </a>
    ) : (
        content
    );
}

function SocialIconLink({ href, label, children }) {
    return (
        <Link to={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#0f766e] hover:border-[#0f766e]/40 transition"
        >
            {children}
        </Link>
    )
}

export default function ContactFormSection() {
    return (
        <section className="w-full py-20 px-6 lg:px-16 bg-cherry">
            <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

                <div className="w-full">
                    <ContactForm />
                </div>

                <div className="w-full md:max-w-105 md:justify-self-end rounded-2xl p-8 bg-accent shadow-xl h-fit">
                    <div className="space-y-6">

                        <ContactInfoItem href={whatsappUrl("Hello! I'm interested in learning more about Cherryville Limited's programs.")} label="WhatsApp"
                            icon={{icon: faWhatsapp, color: "green"}}
                        >
                            Fastest response
                        </ContactInfoItem>

                        <ContactInfoItem href="mailto:cherryvilletech@gmail.com" label="Email"
                            icon={{icon: faEnvelope, color: "red"}}
                        >
                            cherryvilletech@gmail.com
                        </ContactInfoItem>

                        <ContactInfoItem label="Phone"
                            icon={{icon: faPhone}}
                        >
                            <span className="block font-medium">+234 806 426 5176</span>
                            <span className="block text-xs opacity-75 mt-0.5">Mon-Fri, 9am-5pm WAT</span>
                        </ContactInfoItem>

                        <ContactInfoItem label="Location"
                            icon={{icon: faSearchLocation}}
                        >
                            Lagos, Nigeria
                        </ContactInfoItem>
                    </div>

                    <div className="border-t border-black/10 mt-8 pt-6">
                        <p className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">Connect With Us</p>
                        <div className="flex items-center gap-3">
                            {socials.map(link => (
                                <SocialIconLink key={link.text} href={link.href} label={link.text}>
                                    <FontAwesomeIcon icon={link.icon} className="transition-transform hover:scale-110" />
                                </SocialIconLink>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}