import { email, programsEmail, phoneNumber, secondNumber, address } from "./companyData";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { FootLink, Social } from "../types/global.types";

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
        link: "mailto:cherryvilletech@gmail.com"
    },
    {
        id: "linkedIn",
        icon: faLinkedin,
        link: "https://linkedin.com/company/cherryville-limited"
    },
    {
        id: "x",
        icon: faTwitter,
        link: "https://x.com/gabzeejnr"
    }
];

const footerLinks: FootLink[] = [
    {
        title: "Programs",
        links: [
            {
                text: "Data Analytics & Data Science",
                href: `/academy`
            },
            {
                text: "Product Management",
                href: `/academy`
            },
            {
                text: "Artificial Intelligence Fundamentals",
                href: `/academy`
            },
            {
                text: "Business Analysis",
                href: `/academy`
            }
        ]
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