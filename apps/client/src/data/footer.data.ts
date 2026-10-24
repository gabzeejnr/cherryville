import {
    email, programsEmail, phoneNumber,
    secondNumber, address, linkedIn
} from "./companyData";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { FootLink, Social } from "../types/global.types";
import { courses } from "./academy.data";

const formattedNumber = (number: string) => number.split(/\s+/).join("");
const text = "Hello, I'd like to make enquires on the programs and courses offered."

const socials: Social[] = [
    {
        text: "message",
        icon: faWhatsapp,
        href: `https://api.whatsapp.com/send/?phone=${formattedNumber(phoneNumber).slice(1)}&text=${encodeURIComponent(text)}`
    },
    {
        text: "email",
        icon: faEnvelope,
        href: `mailto:${email.trim()}`
    },
    {
        text: "linkedIn",
        icon: faLinkedin,
        href: linkedIn
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
                id: "email",
                text: email,
                href: `mailto:${email.trim()}`,
                icon: faEnvelope
            },
            {
                id: "email",
                text: programsEmail,
                href: `mailto:${programsEmail.trim()}`,
                icon: faEnvelope
            },
            {
                id: "phone",
                text: phoneNumber,
                href: `tel:${formattedNumber(phoneNumber)}`,
                icon: faPhone
            },
            {
                id: "phone",
                text: secondNumber,
                href: `tel:${formattedNumber(secondNumber)}`,
                icon: faPhone
            },
            {
                id: "location",
                text: address,
                href: null,
                icon: faLocationDot
            }
        ]
    }
]

export { footerLinks, socials };