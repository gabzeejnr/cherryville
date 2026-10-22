import { email, programsEmail, phoneNumber, secondNumber, address } from "./companyData";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { FootLink, Social } from "../types/global.types";
import { courses } from "./academy.data";

const formattedNumber = (number:string)=> number.split(/\s+/).join("");
const text = "Hello, I'd like to make enquires on the programs and courses offered."

const socials: Social[] = [
    {
        id: "message",
        icon: faWhatsapp,
        link: `https://api.whatsapp.com/send/?phone=${formattedNumber(phoneNumber).slice(1)}&text=${encodeURIComponent(text)}`
    },
    {
        id: "email",
        icon: faEnvelope,
        link: `mailto:${email.trim()}`
    },
    {
        id: "linkedIn",
        icon: faLinkedin,
        link: "https://linkedin.com/company/cherryville-limited"
    }
];

const footerLinks: FootLink[] = [
    {
        title: "Programs",
        links: courses.slice(0, 4).map(c => ({
            text: c.name,
            href: `/academy/courses/${c.slug}`
        }))
    },
    {
        title: "Company",
        links: [
            {
                text: "About Us",
                href: "/about"
            },
            {
                text: "Enterprise Training",
                href: "/enterprise-training"
            },
            {
                text: "Contact",
                href: "/contact"
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                text: email,
                href: `mailto:${email.trim()}`,
                icon: faEnvelope
            },
            {
                text: programsEmail,
                href: `mailto:${programsEmail.trim()}`,
                icon: faEnvelope
            },
            {
                text: phoneNumber,
                href: `tel:${formattedNumber(phoneNumber)}`,
                icon: faPhone
            },
            {
                text: secondNumber,
                href: `tel:${formattedNumber(secondNumber)}`,
                icon: faPhone
            },
            {
                text: address,
                href: null,
                icon: faLocationDot
            }
        ]
    }
]

export { footerLinks, socials };