import type { ReactNode, MouseEventHandler, Dispatch, SetStateAction } from "react";
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

type RequestAProposalButton = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    arrow?: true,
    className?: string
}

type AccentButton = {
    text: string,
    arrow?: true,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

type ListItem = {
    title: string;
    text: string;
}

type SectionType = {
    className?: string,
    title?: string,
    subtitle?: string,
    subtitleArray?: string[],
    bg?: "bg-cherry" | "bg-bg" | "bg-white" | null,
    children?: ReactNode
}


export type {
    Navlink, FootLink, Social, Heading,
    HeroType, RequestAProposalButton, AccentButton, ListItem,
    SectionType
}