import type { ReactNode } from "react";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"


type Navlink = {
    label: string,
    link?: string
    children?: {
        label: string,
        link: string
    }[]
}

type FootLink = {
    title: string,
    links: {
        text: string,
        href: string | null,
        icon?: IconDefinition
    }[]
}

type Social = {
    id: string,
    icon: IconDefinition,
    link: string
}

type Heading = { title: string, highlights?: string[] }
type HeroType = {
    page: string,
    heading: Heading,
    subtitles: string | string[],
    backgroundImage?: string,
    children?: ReactNode
}


export type { Navlink, FootLink, Social, Heading, HeroType }