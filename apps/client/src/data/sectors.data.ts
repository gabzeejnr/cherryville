import type { Template } from "../types/sectors.types";

const sectors: Template[] = [
    {
        route: "oil-and-gas",
        heading: {
            text: "Technical capability for the energy sector.",
            highlights: ["technical", "capability", "energy"]
        },
        headingText: "Training and talent for operators, service companies and regulatory bodies working across the Nigerian energy value chain.",
        challenge: "Energy organisations hold enormous volumes of operational, production and compliance data, but the capability to interpret it sits with a small number of people. Reporting cycles depend on their availability. Digital systems arrive faster than the workforce is trained to use them, and operational technology environments carry exposure that conventional IT training does not address. The result is capable engineers working below their potential and decisions taken later than they should be.",
        help: [
            {
                title: "Data analytics and executive reporting",
                text: "Power BI, Excel and Python applied to production, operations and compliance data."
            },
            {
                title: "Cloud and infrastructure",
                text: "Microsoft Azure from foundations through to administration and solution architecture."
            },
            {
                title: "Cybersecurity for operational environments",
                text: "network security, security operations and workforce awareness."
            },
            {
                title: "Digital productivity at scale",
                text: "Microsoft 365, Power Platform and process automation for technical and administrative teams."
            },
            {
                title: "Local capacity development",
                text: "programmes structured to support Nigerian Content capability commitments."
            }
        ],
        engage: "We deliver in-house at your facility, at venues in Lagos, Port Harcourt and Abuja, or virtually. We work directly with operators and regulators, and equally as a delivery partner to contractors and consultancies who require training capability behind an awarded contract. "
    },
    {
        route: "banking",
        heading: {
            text: "Capability for a sector where accuracy is not optional.",
            highlights: ["capability", "sector", "accuracy", "not", "optional."]
        },
        headingText: "Technical training for banks, fintechs and financial institutions where errors are expensive and exposure is constant.",
        challenge: "Financial institutions run on data, yet a great deal of that data still moves through manual spreadsheets maintained by individuals. Reconciliation, reporting and compliance work absorb hours that automation could return. Security capability must keep pace with threats that evolve monthly. Internal academies carry the training mandate but are rarely resourced to cover every technical track at depth, and the gaps tend to appear in exactly the areas that matter most.",
        help: [
            {
                title: "Data analytics and business intelligence",
                text: "Excel, Power BI and SQL for reporting, risk and performance teams."
            },
            {
                title: "Security operations",
                text: "network security, threat monitoring and security awareness across the workforce."
            },
            {
                title: "Process automation",
                text: "Power Platform and Power Automate applied to manual back-office and reconciliation workflows."
            },
            {
                title: "Advanced Excel and financial modelling",
                text: "for treasury, finance and analytics functions."
            },
            {
                title: "Cloud foundations",
                text: "Microsoft Azure for infrastructure and application teams."
            }
        ],
        engage: "Most institutions run an internal academy, and we work as a specialist supplier into it rather than a replacement for it. We take the technical tracks your in-house faculty is not resourced to cover, deliver them to your calendar, and hand back the assessment data for your own records. "
    },
    {
        route: "government",
        heading: {
            text: "Digital capability across the public workforce.",
            highlights: ["capability", "public", "workforce."]
        },
        headingText: "Capacity development for ministries, departments, agencies and regulatory bodies delivering services at scale.",
        challenge: "Public institutions are digitising faster than their workforces are being trained. Systems are procured and deployed, but adoption stalls where staff confidence is low. Data that could inform policy sits unanalysed because the skills to interrogate it are concentrated in a handful of officers. Cybersecurity awareness across a large workforce lags behind the exposure that comes with putting services online. The scale of the workforce is itself the obstacle, training a few hundred people is a different exercise from training a few dozen.",
        help: [
            {
                title: "Workforce digital literacy at scale",
                text: "Microsoft 365 and productivity fundamentals across large, distributed teams.",
            },
            {
                title: "Data for policy and decision-making",
                text: "Excel, Power BI and analytics for planning, monitoring and reporting units."
            },
            {
                title: "Cybersecurity awareness and network security",
                text: "for both general staff and technical teams."
            },
            {
                title: "Digital service tools",
                text: "Power Platform and low-code automation for internal process improvement. "
            },
            {
                title: "Train-the-Trainer",
                text: "building an internal faculty so capability continues after we leave."
            }
        ],
        engage: "We run concurrent cohorts across multiple cities and venues, with the documentation, attendance records and closure reporting that procurement and audit processes require. Programmes are structured to fit budget cycles and to produce the evidence trail your oversight functions expect."
    },
    {
        route: "development",
        heading: {
            text: "Skills programmes that produce evidence, not attendance sheets.",
            highlights: ["Skills", "programmes", "evidence,", "attendance"]
        },
        headingText: "Employability programming and staff capability development for organisations accountable to donors and to the people they serve.",
        challenge: "Development organisations are held to outcomes, but training vendors typically report outputs. A number of participants trained tells a donor almost nothing about whether capability moved or whether anyone became employable. Meanwhile programme staff are asked to manage increasingly data-heavy monitoring requirements without the analytical skills to do it comfortably. Both problems are capability problems, and both are solvable.",
        help: [
            {
                title: "Beneficiary employability programmes",
                text: "technical skills training designed around named job roles and labour market demand."
            },
            {
                title: "Monitoring and evaluation capability",
                text: "data collection, analysis and reporting skills for programme teams."
            },
            {
                title: "Reporting dashboards",
                text: "Power BI and Excel skills that let your team build donor reporting in-house. "
            },
            {
                title: "Curriculuum design",
                text: "frameworks and materials your own delivery partners can run."
            },
            {
                title: "Assessment instruments mapped to your results framework",
                text: "so training data feeds your logframe directly."
            }
        ],
        engage: "Our assessment framework produces pre-, mid- and post-training data on a matched cohort, which is what donor reporting actually requires. We design the instruments alongside your M&E lead at the definition stage rather than retrofitting measurement after delivery."
    }
]

export { sectors }