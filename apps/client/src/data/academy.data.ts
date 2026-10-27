import type { Heading, Course, Questions, FieldFAQKey, FieldFAQItem } from "../types";


const academyHeading: Heading = {
    title: "Start where you are. Train for a job you can name.",
    highlights: ["start", "train", "job", "you", "name."]
}
const subtitle: string = "Cherryville Academy runs courses for individuals at three levels. You do not need a technical background to begin — you only need to know what kind of work interests you."

const beginnerHeading: Heading = {
    title: "You do not need any experience to start here.",
    highlights: ["do", "not", "experience", "here."]
}
const beginnerSubtitle: string = "These courses assume you have never worked in technology. They begin at the beginning, move at a pace you can follow, and finish with a skill you can be paid for."

const intermediateHeading: Heading = {
    title: "You have the foundations. Now specialise.",
    highlights: ["you", "foundations", "specialise."]
}
const intermediateSubtitle = "These courses take one direction and go deep enough to make you employable in it. Each finishes with work you can put in front of an employer.";

const advancedHeading: Heading = {
    title: "For peple already doing the work.",
    highlights: ["already", "doing", "work"]
}
const advancedSubtitle = "Advanced courses are built for practitioners who need depth, a recognised certification, or the technical range to move into a more senior role."

const privateHeading: Heading = {
    title: "One trainer. One learner",
    highlights: ["one"]
}
const privateSubtitle = "Some people learn faster without a room. Others cannot commit to a fixed cohort calendar, or need to cover a specific gap rather than a full curriculum. Private training exists for both."


// ================================================================================================
// COURSES ======================================
// ================================================================================================
const beginner: Course[] = [
    {
        name: "Digital Foundations & Office Productivity",
        slug: "digital-foundations-office-productivity",
        whoIsItFor: "People with little or no computer experience, and anyone whose job has become digital faster than their skills have.",
        workType: ["organising"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Produce professional documents, spreadsheets and presentations",
            "manage email and calendars and organise files with confidence",
            "Work confidently and comfortably with Microsoft 365."
        ],
        jobTitle: "Office Administrator",
        duration: "6 weeks",
        fee: 150_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625478/DU_Df6kxzO8N2KzhvmPHgwKYAcGW-0yd2LwVaBK-CAZkWHk2FRU4p-CyD7loibw2qohSfAD12LFdNuZ7DPLWvzl8blzatOM7Wd1UBMYc7PAOLez6pNrYjyutEnoHr_7vLx3kaPvjoobCmFn8s069IT85kXAaJ4CZkzFkpeb72Pc_fhcel0.jpg"
    },
    {
        name: "Microsoft Excel Essentials",
        slug: "microsoft-office-essentials",
        whoIsItFor: "Anyone whose job involves numbers, records or reporting, at any level and in any sector.",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build and check formulas without introducing errors",
            "Organise, filter and summarise large sets of records",
            "Produce clear charts and reports a supervisor can rely on "
        ],
        jobTitle: "Excel Specialist",
        duration: "6 weeks",
        fee: 150_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625237/Hxl7jNYPSIk3Iz3B64rO6DoLjNaP_e5u55IqaU0TVGRK_3lVleIyYdQs4vRfx4GXy3TYu2mhEX_wy4FewoXeas5NNdI90qTFBhGxA2KAxn7b42X73Ljk9X7gbUW0ATwe7UevbqSWBocisNRVfh27WGohkn4hA0IZ2LQ4GKCe742LUEHVjJngW_m0H_tWOehi_rfo9qn.jpg"
    },
    {
        name: "Introduction to Data Analysis",
        slug: "introduction-to-data-analysis",
        whoIsItFor: "Beginners who enjoy patterns and numbers, and who want to know why something happened rather than only that it did.",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Clean raw data so it can be trusted",
            "Summarise what the data shows in tables and charts",
            "Present a clear, defensible conclusions from a dataset."
        ],
        jobTitle: "Junior Data Analyst",
        duration: "6 weeks",
        fee: 150_000,

    },
    {
        name: "Web Development Foundations (HTML, CSS, JavaScript)",
        slug: "web-development-foundations-html-css-javascript",
        whoIsItFor: "Beginners who want to build things and see the result of their work immediately.",
        workType: ["design", "hands-on"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build responsive multi-page websites from scratch",
            "Style layouts that work properly on both phone and desktop",
            "Publish a live website you can show to an employer"
        ],
        jobTitle: "Junior Web Developer",
        duration: "6 weeks",
        fee: 150_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625526/qO-LFLEFV-v4Xldiqs46da9nsYw4U1uC9m9EXrEMnoycMlO50iIGaM7FPMFQuActgKEtJagRn-t_d2C4QKJr_1DFAwgGT4mgPrc1KVpmmVROSK568cafjUXRmFqqE3KNK6KoNQ72CEpC4Ime_Gsnhkeb_NnBWdlcH7OmpikPF8_GsFpeXyQ6w976RRck_ILq_p5uajp.jpg"
    },
    {
        name: "Product Design Foundations (UI/UX)",
        slug: "product-design-foundations-uiux",
        whoIsItFor: "Beginners with an eye for how things look and the patience to understand how people behave.",
        workType: ["design"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Run basic user research and turn findings into design decisions",
            "Produce wireframes and a clickable prototype in Figma",
            "Present a portfolio piece that explains your reasoning "
        ],
        jobTitle: "Junior UI/UX Designer",
        duration: "6 weeks",
        fee: 150_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792881616/f521ef1c-118b-48d3-b848-17b4b8c65136_ae21lw.jpg"
    },
    {
        name: "Cybersecurity Fundamentals",
        slug: "cybersecurity-fundamentals",
        whoIsItFor: "Beginners considering a career in security, and anyone responsible for keeping an organisation’s information safe",
        workType: ["security"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Explain how a network works and where it is exposed",
            "Recognise and respond to the most common attack methods",
            "Apply practical security controls and safe working habits"
        ],
        jobTitle: "Junior Cybersecurity Analyst",
        duration: "6 weeks",
        fee: 150_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625280/CGI7nx8Y52Kkdn0Vhc9Dy9p3ljSUw9kiXSpqlmoZpvgXk6OYkryuv6FHcdaRBTU8wr2HkIiH4k4ZLVB8ssOxiMzZZjdKQR9dunSaCn3j2QePhmvu9MIeOMDziphoeCZN-cJMlWIyy9TWj2LFtflVFVt-act22-y2rSnLMgWkHOFsOtWnkzv0Ne4Fj-UUGNNZ_sjk1v1.jpg"
    },
    {
        name: "Cloud Computing Fundamentals (Microsoft Azure AZ-900)",
        slug: "cloud-computing-fundamentals-microsoft-azure-az-900",
        whoIsItFor: "Beginners who want a recognised first certification, and IT support staff moving towards cloud work.",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Explain core cloudconcepts and Azure services with confidence",
            "Understand Azure pricing, support and governance models",
            "Sit the AZ-900 examination properly prepared "
        ],
        jobTitle: "Junior Cloud Support Specialist",
        duration: "6 weeks",
        fee: 150_000
    }
];
const intermediate: Course[] = [
    {
        name: "Data Analytics with Excel & Power BI",
        slug: "data-analytics-with-excel-power-bi",
        whoIsItFor: " Learners with solid Excel foundations aiming for analyst, reporting or business intelligence roles.",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Model data correctly across related tables",
            "Write DAX measures that answer real business questions",
            "Build and publish dashboards stakeholders actually use"],
        jobTitle: "Data Analyst",
        duration: "10 weeks",
        fee: 250_000
    },
    {
        name: "Python for Data Analysis",
        slug: "python-for-data-analysis",
        whoIsItFor: "Analysts and graduates comfortable with data who want technical depth and greater speed.",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Manipulate and clean large datasets with pandas",
            "Produce statistical summaries and clear visualisations",
            "Automate repetitive analysis that would take hours by hand"
        ],
        jobTitle: "Python Data Analyst",
        duration: "8 weeks",
        fee: 200_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625306/NceHHjntOT13guzhefKXIDQ9Tiz2xNh_XBccLlaX8uHQxo0TlfQOQjxUfYXnQ1JgrIWd51PiAdjfZz2oP-ngEkhxcrlss_lPI8sOE8rqZWFjKXNtVOdUpC32BOdjsWuhbiBwXprHUGmTPcTbF7tT4hAYGXAtWfHSJQWAqD8H75mlDJRMwddPNIMKRy2eq1Fj_ay1v9p.jpg"
    },
    {
        name: "Frontend Development with React",
        slug: "frontend-development-with-react",
        whoIsItFor: "Developers with working HTML, CSS and JavaScript who want to be employable as frontend engineers",
        workType: ["design", "hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build component-based applications in React",
            "Manage application state and consume live APIs ",
            "Deploy a production application to a live environment"
        ],
        jobTitle: "Frontend Developer",
        duration: "10 weeks",
        fee: 250_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1793104759/8f00f296-3513-41ec-b5bb-1d66d233f0c2_c9dvcp.png"
    },
    {
        name: "Backend Development with C# and .NET",
        slug: "backend-development-with-c-and-net",
        whoIsItFor: "Developers with programming foundations who want enterprise backend skills with strong local demand.",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build and secure REST APIs in .NET",
            "Design and query relational databases properly",
            "Deploy a working backend services to a live environment."
        ],
        jobTitle: "Backend Developer",
        duration: "12 weeks",
        fee: 300_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1793104737/06e7c719-54da-4710-bc7c-57c26fe4183c_pwwwr6.png"
    },
    {
        name: "Microsoft Power Platform (Power Apps & Power Automate)",
        slug: "microsoft-power-platform-power-apps-power-automate",
        whoIsItFor: "Analysts, operations staff and IT officers who want to automate manual work and build internal tools.",
        workType: ["organising", "hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build working business applications without conventional coding",
            "Automate approval, notification and reporting workflows",
            "Connect applications securely to organisational data sources"
        ],
        jobTitle: "Power Platform Developer",
        duration: "8 weeks",
        fee: 180_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792626895/VlZB8ybJCk5eVhOpuGEBBKCHLfQR7GaBrZmEgApxF7AHiT0ilfFaCXqk4vEfi4vbcciG65bx6BHRmya1TiJsPttXBwCXY9kCJwEgumxtgFIA7oTW7KUVYjoLL30-Xngu_LcXNQLLeqoLbb5hWlnNw6fY__PJk3Ehrr8R6CjsCi71-gcJMvUcDMaatI_3s6fB_yygjsx.jpg"
    },
    {
        name: "Network & Systems Administration",
        slug: "network-systems-administration",
        whoIsItFor: "IT support staff and graduates moving into infrastructure and systems roles. ",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Configure and troubleshoot networks, administer users and servers, and support organisational infrastructure."],
        jobTitle: "Systems Administrator",
        duration: "8 weeks",
        fee: 250_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792882891/5ac5cc81-5ec8-47e8-9a66-a2c1000d2344_mxz9ky.jpg"
    },
    {
        name: "Cybersecurity Operations",
        slug: "cybersecurity-operations",
        whoIsItFor: "Those with security foundations targeting a security operations centre analyst role.",
        workType: ["organising"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Monitor systems and interpret security alerts accurately ",
            "Investigate and escalate an incident to established procedure ",
            "Work to the disciplines of a security operations team "
        ],
        jobTitle: "Security Operations Centre Analyst",
        duration: "8 weeks",
        fee: 20_0000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625615/j2VFvPuMXxNoBo8etWZN1Xi6YEWz28rP0Vrg8y2vlSQfH83SsQ77lh6ZSUVvoBsaE_tgQhSWO5xOuifJoWRxAbSiJ6HtB7zgjb75xqmrjLZOFsAyQfT8MufSVzH0PzW8TEscCFpbDh3gCfDquXwn5hn_bi2Pr8e8yZX1KBd0C_xCI8wj51OCoAigFHXOwLxl_iebh2p.jpg"
    },
    {
        name: "Product Management",
        slug: "product-management",
        whoIsItFor: "Professionals moving into product roles from analysis, design, engineering or operations.",
        workType: ["organising"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Turn a business problem into a defined product requirement ",
            "Prioritise a roadmap and manage a full delivery cycle ",
            "Work effectively with engineering and design teams "
        ],
        jobTitle: "Product Manager",
        duration: "10 weeks",
        fee: 250_000
    }
];
const advanced: Course[] = [
    {
        name: "Advanced Excel & Financial Modelling",
        slug: "advanced-excel-financial-modelling",
        whoIsItFor: "Finance, treasury and analysis professionals whose models inform real decisions.",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build structured, auditable financial models",
            "Run scenario and sensitivity analysis with confidence ",
            "Automate recurring reporting work "
        ],
        jobTitle: "Financial Analyst",
        duration: "8 weeks",
        fee: 30_0000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625652/8JDiad5qP-ngUW7exEZLrJhyD7rUZttdtca4CZ3TLi4d8Nxt0P7aXuk9GXkXrCQuYWIb6PD_m9LS2cS2wHfMloe67rbF8Zm-m0t9G7T7vq9ZQcx0cwXPDeWQTFsHQewpR6ewjmhEfzB9qAhnjy-0M1KNMSuoxs5D8kDZvoUYPItbV-xCu7S55U9dfHwqsGFQ_k47zby.jpg"
    },
    {
        name: "Advanced Power BI (DAX, Data Modelling & Deployment)",
        slug: "advanced-power-bi-dax-data-modelling-deployment",
        whoIsItFor: "Analysts already producing Power BI reports who need enterprise-grade capability.",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Write and debug complex DAX with confidence ",
            "Design performant models over large data volumes",
            "Deploy and secure reports across an organisation "
        ],
        jobTitle: "Business Intelligence Developer",
        duration: "8 weeks",
        fee: 300_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792626553/jK3g-5dtZtDTk8pSAQ1ylAqdb0bRxwqU7k52gFYODItdaYxMyot9kxEYj7WTGHSybkD9xBU4IAcbz5hlFUd1JaZ48CZQIICEu38iZXjizbiJJmuG50WbNCQXnCewpgJuQX65WiLqCP0Kuv-pzV6N-B5mtYY0LQDure-pn1hepCcDh1lszRe3dkJxnEPmI7VT_q6dgkc.jpg"
    },
    {
        name: "Azure Administrator & Solutions Architect (AZ-104, AZ-305)",
        slug: "azure-administrator-solutions-architect-az-104-az-305",
        whoIsItFor: "Practising IT and cloud professionals pursuing associate and expert-level Microsoft certification.",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Administer a production Azure environment end to end ",
            "Design solutions against business and compliance requirements ",
            "Sit both certification examinations properly prepared "
        ],
        jobTitle: "Azure Solutions Architect",
        duration: "10 weeks",
        fee: 300_000
    },
    {
        name: "Full-Stack Development with C# and Blazor",
        slug: "full-stack-development-with-c-and-blazor",
        whoIsItFor: "Developers with either frontend or backend experience who want full-stack range.",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Build complete applications across frontend and backend ",
            "Implement authentication, authorisation and data access",
            "Deploy and maintain an application in production"
        ],
        jobTitle: "Full-Stack Developer",
        duration: "12 weeks",
        fee: 450_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625707/1x4UU5f3cGDP5OKnymnzBowuc8DC3wQGilpY3GaaVnjcpYdlpkM6q7lF5hySdy5Ofhi9GQjZGuUP5V1S5fQqKxN1u_HLaEZdBNtvAuKU1rR1q7uVAFI9guyIo1rh4ZlcrtBACF9RrrR8H26X8Nclxts1v5vAs5eZPco3Qi5R2-DkqWBZttwogcRbKrS7nreH_bhmjr8.jpg"
    },
    {
        name: "Advanced Cybersecurity & Network Security",
        slug: "advanced-cybersecurity-network-security",
        whoIsItFor: "Security and network professionals moving into engineering and architecture responsibility.",
        workType: ["security", "hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Design and harden a defensible network architecture ",
            "Conduct vulnerability assessment and interpret the findings ",
            "Lead a structured incident response "
        ],
        jobTitle: "Cybersecurity Engineer",
        duration: "10 weeks",
        fee: 350_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625732/PIMycVfTdxWK-ljq_cOwLL4Xo830c3Q0V7QJNQ7GV2bnRKmGzoM9TWUht_3ATLVtuY2JDj5QqWJyOb5qVBBLq4oxTZh7HwJXD-jY0GO-GGLyvl3so3990K2jb0FHU8OUIrYQpAQY-xpeNqHVCfINnNgOY4nLx0ZqqOQiHg7x992csdYkBHUshwsbsNud4Tiw_sqthzt.jpg"
    },
    {
        name: "Data Engineering (SQL, Pipelines & Warehousing)",
        slug: "data-engineering-sql-pipelines-warehousing",
        whoIsItFor: "Analysts and developers moving into data engineering roles.",
        workType: ["numbers", "hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Write and optimise advanced SQL against large datasets ",
            "Design and build reliable data pipelines",
            "Model a data warehouse that analysts can work in."],
        jobTitle: "Data Engineer",
        duration: "12 weeks",
        fee: 450_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792882676/58d59e1a-b8bf-4eb5-adbd-77f6ab2e307c_vbpyak.jpg"
    },
    {
        name: "Data Centre Analysis & Infrastructure Management",
        slug: "data-centre-analysis-infrastructure-management",
        whoIsItFor: "Infrastructure and facilities technical staff in banking, energy and public sector environments.",
        workType: ["numbers", "hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: [
            "Analyse capacity, availability and performance data",
            "Plan infrastructure capacity against projected demand",
            "Report infrastructure health to technical and executive audiences"
        ],
        jobTitle: "Data Centre Infrastructure Analyst",
        duration: "8 weeks",
        fee: 350_000
    },
    {
        name: "AI & Generative AI for Professionals",
        slug: "ai-generative-ai-for-professionals",
        whoIsItFor: "Analysts, managers and technical professionals who want dependable working use of AI tools.",
        workType: ["numbers", "organising"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: [
            "Apply generative AI tools reliably to real professional work",
            "Recognise where these tools fail and design around it",
            "Build repeatable AI-assisted workflows for your team"
        ],
        jobTitle: "AI Workflow Specialist",
        duration: "8 weeks",
        fee: 300_000,
        image: "https://res.cloudinary.com/mmbgzzzw/image/upload/v1792625740/x26MXUlx-D_bUP0fEONGiO6RLq6akzvdy2BbaxCKugZ1xfqXj6cCgkuQKd0_PpXpirvEnZ-C5uTfH5OHWZEvH2ZN1LNsqWjTmIwXgoOeg4SlS8auWde82A4Ms08iI-Lr3Y_ZIxBNCXni5JZCxzpOf8S-MD6qTmHdIIlhNMceLdzd-GGhN9IEHJoMy81IzK7z_wjjlc6.jpg"
    }
];
const courses: Course[] = [...beginner, ...intermediate, ...advanced];
const courseFaqGroups: Record<string, FieldFAQKey[]> = {
    "introduction-to-data-analysis": ["data-analytics"],
    "microsoft-office-essentials": ["data-analytics"],
    "data-analytics-with-excel-power-bi": ["data-analytics"],
    "python-for-data-analysis": ["data-analytics"],
    "advanced-excel-financial-modelling": ["data-analytics"],
    "advanced-power-bi-dax-data-modelling-deployment": ["data-analytics"],
    "data-engineering-sql-pipelines-warehousing": ["data-engineering"],
    "product-management": ["product-management"],
    "ai-generative-ai-for-professionals": ["artificial-intelligence"]
};

const fieldFaqs: Partial<Record<FieldFAQKey, FieldFAQItem[]>> = {
    "data-analytics": [
        {
            question: "What is Data Analytics?",
            answer: "Collecting, cleaning and examining data to answer business questions, then presenting the findings as dashboards and reports that people can act on. "
        },
        {
            question: "What jobs can I aim for?",
            answer: "Data analyst and reporting or dashboard roles. With Advanced skills, senior analyst positions or freelance analytics work. "
        },
        {
            question: "Do I need a mathematics or technical background?",
            answer: "No. Beginner starts from zero. You need to be comfortable with basic arithmetic and using a computer. Statistics is introduced at Advanced."
        },
        {
            question: "What will I be able to do after the course?",
            answer: "Clean and analyze real datasets with Excel, SQL, Power BI and Python, build dashboards, and explain your findings in plain language to non-technical people."
        },
        {
            question: "Is data analytics in demand?",
            answer: "Banks, telecoms, retailers, energy companies and government bodies all rely on data to make decisions. [Add a sourced Nigerian or African demand statistic.]"
        }
    ],
    "data-engineering": [
        {
            question: "What is data engineering?",
            answer: "Building and maintaining the systems that collect, move, store and prepare data so analysts, managers and AI models can use it."
        },
        {
            question: "What jobs can I aim for?",
            answer: "Data engineer, pipeline and ETL developer, and cloud data roles."
        },
        {
            question: "Do I need a mathematics or technical background?",
            answer: `No advanced mathematics is required. Beginner teaches Python and SQL from the foundations. Logical thinking and patience with detail matter most.`
        },
        {
            question: "What will I be able to do after the course?",
            answer: "Build automated pipelines, schedule them with Airflow, model a warehouse, stream data with Kafka and run it all on the cloud."
        },
        {
            question: "Is data engineering in demand?",
            answer: "Every analytics and AI project needs reliable data underneath it."
        }
    ],
    "product-management": [],
    "artificial-intelligence": []
}

const questions: Questions[] = [
    {
        id: "workType",
        question: "What kind of work do you enjoy most?",
        options: [
            {
                label: "Working with numbers and finding patterns",
                value: "numbers"
            },
            {
                label: "Designing things people use",
                value: "design"
            },
            {
                label: "Building and fixing things with my hands",
                value: "hands-on"
            },
            {
                label: "Organising people and projects",
                value: "organising"
            },
            {
                label: "Keeping systems safe",
                value: "security"
            }
        ]
    },
    {
        id: "experience",
        question: "How much experience do you have with technology?",
        options: [
            {
                label: "I am starting from scratch",
                value: "beginner"
            },
            {
                label: "I am comfortable with a computer but not with tech work",
                value: "intermediate"
            },
            {
                label: "I already work in tech and want to go deeper",
                value: "advanced"
            }
        ]
    },
    {
        id: "timeframe",
        question: "When do you want to be working in this field?",
        options: [
            {
                label: "Within six months",
                value: "6 months"
            },
            {
                label: "Within a year",
                value: "1 year"
            },
            {
                label: "I am exploring for now",
                value: "unknown"
            }
        ]
    }
]


const threeLevels: {
    title: "Beginner" | "Intermediate" | "Advanced",
    text: string
}[] = [
        {
            title: "Beginner",
            text: "For people with no technical background at all. We assume nothing, we avoid jargon, and we take you to the point where you can do useful paid work."
        },
        {
            title: "Intermediate",
            text: "For practitioners already working in the field who need depth, certification, or a route into a more senior role."
        },
        {
            title: "Advanced",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor in sit faucibus risus lorem leo maximus amet arcu in est."
        }
    ]
const whyCherryville: string[] = [
    "Every facilitator is a Microsoft Certified Trainer.",
    "Every course is built around a named job role, not a technology for its own sake. ",
    "You are assessed at the start, midway and at the end, so your progress is measured rather than assumed. ",
    "We train the same organisations our graduates want to work for, which is how we know what those employers are actually asking for. "
];

const academyFAQs = [
    {
        question: "Do I have to take the levels in order?",
        answer:
            "No. If you already have the skills, a short skills check can place you at Intermediate or Advanced. If you're unsure, start one level lower.",
    },
    {
        question: "Can I pay in instalments?",
        answer:
            "Yes. Instalment plans are available on request. Organizations enrolling 10 or more learners can also request group rates.",
    },
    {
        question: "Will I receive a certificate?",
        answer:
            "Yes. You'll receive a Cherryville Academy certificate of completion for every tier you complete.",
    },
    {
        question: "Where do I get help during the course?",
        answer:
            "Start with your facilitator, or contact the Academy team on WhatsApp at 07048288168 or 08064265176, or email programs@cherryvillelimited.africa.",
    },
    {
        question: "What if I cannot find my answer?",
        answer:
            "Use the Ask Us option to message the Academy team. We'll help you find the right answer and recommend the next step for your learning goals.",
    },
];

export {
    academyHeading, subtitle,
    beginnerHeading, beginnerSubtitle,
    intermediateHeading, intermediateSubtitle,
    advancedHeading, advancedSubtitle,
    privateHeading, privateSubtitle,
    questions, courses, beginner,
    intermediate, advanced, threeLevels,
    whyCherryville, academyFAQs, courseFaqGroups,
    fieldFaqs
}