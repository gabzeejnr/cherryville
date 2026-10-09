import { email, phoneNumber, address } from "./companyData";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { FootLink, Social } from "../types/global.types";


const socials: Social[] = [
    {
        id: "message",
        icon: faWhatsapp,
        link: "https://somekindofwhatsappurl.com"
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
                text: phoneNumber,
                href: `tel:${phoneNumber.split(" ").join("")}`,
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