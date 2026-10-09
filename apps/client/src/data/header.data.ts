import { serviceLines as enterprises } from "./enterpriseTraining.data";
import { serviceLines as talents } from "./talentSolutions.data";
import type { Navlink } from "../types/global.types";

export const NAV_LINKS: Navlink[] = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Enterprise Training",
        children: enterprises.map(enterprise => ({
            label: enterprise.title,
            link: `/enterprise-training#${enterprise.id}`
        }))
    },
    {
        label: "Talent Solutions",
        children: talents.map(talent => ({
            label: talent.title,
            link: `/talent-solutions#${talent.id}`
        }))
    },
    {
        label: "Academy",
        children: [
            {
                label: "Hub",
                link: "/academy"
            },
            {
                label: "Beginner",
                link: "/academy/beginner"
            },
            {
                label: "Intermediate",
                link: "/academy/intermediate"
            },
            {
                label: "Advanced",
                link: "/academy/advanced"
            },
            {
                label: "Private Training",
                link: "/academy/private-training"
            }
        ]
    },
    {
        label: "About Us",
        link: "/about"
    }
];