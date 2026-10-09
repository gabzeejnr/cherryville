import type { Course, Questions } from "../types/academy.types";

const beginner: Course[] = [
    {
        name: "Digital Foundations & Office Productivity",
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
        fee: 140_000
    },
    {
        name: "Microsoft Excel Essentials",
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
        fee: 140_000
    },
    {
        name: "Introduction to Data Analysis",
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
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Web Development Foundations (HTML, CSS, JavaScript)",
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
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Product Design Foundations (UI/UX)",
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
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Cybersecurity Fundamentals",
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
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Cloud Computing Fundamentals (Microsoft Azure AZ-900)",
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
        fee: 140_000
    }
];
const intermediate: Course[] = [
    {
        name: "Data Analytics with Excel & Power BI",
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
        fee: 20_0000
    },
    {
        name: "Frontend Development with React",
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
        fee: 250_000
    },
    {
        name: "Backend Development with C# and .NET",
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
        fee: 30_0000
    },
    {
        name: "Microsoft Power Platform (Power Apps & Power Automate)",
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
        fee: 180_000
    },
    {
        name: "Network & Systems Administration",
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
        fee: 250_000
    },
    {
        name: "Cybersecurity Operations",
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
        fee: 20_0000
    },
    {
        name: "Product Management",
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
        fee: 30_0000
    },
    {
        name: "Advanced Power BI (DAX, Data Modelling & Deployment)",
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
        fee: 30_0000
    },
    {
        name: "Azure Administrator & Solutions Architect (AZ-104, AZ-305)",
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
        fee: 30_0000
    },
    {
        name: "Full-Stack Development with C# and Blazor",
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
        fee: 450_000
    },
    {
        name: "Advanced Cybersecurity & Network Security",
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
        fee: 350_000
    },
    {
        name: "Data Engineering (SQL, Pipelines & Warehousing)",
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
        fee: 450_000
    },
    {
        name: "Data Centre Analysis & Infrastructure Management",
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
        fee: 30_0000
    }
];
const courses: Course[] = [
    ...beginner, ...intermediate, ...advanced
]
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

export {
    questions, courses, beginner,
    intermediate, advanced, threeLevels,
    whyCherryville
}