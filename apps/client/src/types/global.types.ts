import type { ReactNode, MouseEventHandler, Dispatch, SetStateAction } from "react";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"


interface Navlink {
    label: string,
    link?: string
    children?: {
        label: string,
        link: string
    }[]
}

interface FootLink {
    title: string,
    links: {
        id?: string,
        text: string,
        href: string | null,
        icon?: IconDefinition
    }[]
}

interface Social {
    text: string,
    icon: IconDefinition,
    href: string
}

interface Heading { title: string, highlights?: string[] }
interface HeroType {
    page: string,
    heading: Heading,
    subtitles: string | string[],
    backgroundImage?: string,
    children?: ReactNode
}

interface RequestAProposalButton {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    arrow?: true,
    className?: string
}

interface AccentButton {
    text: string,
    arrow?: true,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    className?: string,
    mt?: `mt-${string}`;
    children?: ReactNode
}

interface ListItem {
    title: string;
    text: string;
}

interface SectionType {
    className?: string,
    title?: string,
    subtitle?: string,
    subtitleArray?: string[],
    bg?: "bg-cherry" | "bg-bg" | "bg-white" | null,
    children?: ReactNode,
    compact?: boolean
}


export type {
    Navlink, FootLink, Social, Heading,
    HeroType, RequestAProposalButton, AccentButton, ListItem,
    SectionType
}