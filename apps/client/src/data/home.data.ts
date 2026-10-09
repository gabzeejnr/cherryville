import { TextSearch, Users, GraduationCap, Dome, Activity, Banknote } from "lucide-react";
import { microsoft, amdocs, ey, ibm, infosys, kpmg } from "../libs";
import type { Marquee, Doings, Serve, HoverCardType, TestimonialType } from "../types/home.types";

const marquee: Marquee[] = [
    {
        image: microsoft,
        name: "Microsoft"
    },
    {
        image: amdocs,
        name: "Amdocs"
    },
    {
        image: ey,
        name: "ey"
    },
    {
        image: ibm,
        name: "ibm"
    },
    {
        image: infosys,
        name: "infosys"
    }, {
        image: kpmg,
        name: "kpmg"
    }
]

const doings: readonly Doings[] = [
    {
        title: "Enterprise Training",
        text: "Technical training for your workforce; scoped to your operating environment, delivered by certified trainers, and evidenced with assessment data your executive team can act on.",
        icon: {
            icon: TextSearch,
            bgColor: "teal"
        },
        headingColor: "#132A3E",
        link: {
            text: "Explore Enterprise Training",
            href: "/enterprise-training"
        }
    },
    {
        title: "Talent Solutions",
        text: "Skilled technical people, supplied to your specifications. Embed a specialist in your team, commission talents trained to your standard, or engage a full delivery team for a defined scope.",
        icon: {
            icon: Users,
            bgColor: "green"
        },
        headingColor: "#0E2B1F",
        link: {
            text: "Explore Talent Solutions",
            href: "/talent-solutions"
        }
    },
    {
        title: "Cherryville Academy",
        text: "Career-focused courses for individuals, from complete beginner to advanced practitioner. Every course is built around a job you can name.",
        icon: {
            icon: GraduationCap,
            bgColor: "purple"
        },
        headingColor: "#2A1330",
        link: {
            text: "Browse Courses",
            href: "/academy"
        }
    }
] as const;

const sectorsServed: readonly Serve[] = [
    {
        title: "Oil & Gas",
        text: "turning operational and production data into decisions, and securing the environments that generate it.",
        icon: Activity
    },
    {
        title: "Banking & Financial Services",
        text: "analytics, security operations and the automation of manual back-office work.",
        icon: Banknote
    },
    {
        title: "Government & Public Sector",
        text: "digital capability across large workforces, and data that supports policy.",
        icon: Dome
    },
    {
        title: "NGOs & Development Partners",
        text: "employability programmes and staff capability, measured against your results framework.",
        icon: Users
    }
] as const;

const phases: HoverCardType[] = [
    {
        title: "01",
        text: "Definition",
        background: "#680A30",
        top: "5%",
        right: "-1rem",
    },
    {
        title: "02",
        text: "Delivery",
        background: "#AE154D",
        bottom: "25%",
        left: "-1.5rem",
    },
    {
        title: "03",
        text: "Closure",
        background: "#8F123F",
        bottom: "1%",
        right: "-1rem",
    },
] as const;

const testimonials: TestimonialType[] = [
    {
        quote: "The training was structured around what our team actually needed and gave participants practical skills they could apply immediately.",
        name: "Client Name",
        role: "Learning & Development Manager",
        organisation: "Organisation Name",
        rating: 4
    },
    {
        quote: "Cherryville brought a clear understanding of both the technical requirements and the people who needed to deliver them.",
        name: "Client Name",
        role: "Technical Manager",
        organisation: "Organisation Name",
        rating: 4.5
    },
    {
        quote: "The programme gave our team the confidence and capability to work more effectively with the tools already in our environment.",
        name: "Client Name",
        role: "Operations Lead",
        organisation: "Organisation Name",
        rating: 5
    },
    {
        quote: "This platform completely transformed how our team manages daily workflows. The automation tools saved us countless hours of manual data entry.",
        name: "Sarah Jenkins",
        role: "Director of Operations",
        organisation: "Apex Global Solutions",
        rating: 4
    },
    {
        quote: "The customer support is unmatched. Whenever we encountered a roadblock, their technical team resolved it within minutes. Highly recommended!",
        name: "Marcus Chen",
        role: "Lead Frontend Engineer",
        organisation: "DevStream Interactive",
        rating: 5
    },
    {
        quote: "We saw a 40% increase in user engagement within the first month of integration. The analytics dashboard provides incredibly clear, actionable insights.",
        name: "Elena Rostova",
        role: "VP of Product",
        organisation: "NovaSphere Media",
        rating: 4
    },
    {
        quote: "Scaling our infrastructure used to be a logistical nightmare, but this service made the entire transition seamless and stress-free.",
        name: "David Okafor",
        role: "Chief Technology Officer",
        organisation: "CloudScale Systems",
        rating: 3.5
    },
    {
        quote: "An absolute game-changer for our marketing campaigns. The intuitive interface allowed our design team to launch new landing pages in half the time.",
        name: "Amanda Martinez",
        role: "Head of Growth",
        organisation: "Bloom Digital Marketing",
        rating: 5
    }
]

const testimonialColumns: TestimonialType[][] = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9)
]



export { marquee, doings, sectorsServed, phases, testimonialColumns }