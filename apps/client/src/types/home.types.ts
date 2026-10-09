import type { LucideIcon } from "lucide-react";

type Marquee = {
    image: string,
    name: string
}

type Doings = {
    title: string,
    text: string,
    icon: {
        icon: LucideIcon,
        bgColor: string,
        color?: string
    },
    headingColor: string,
    link: {
        text: string,
        href: string
    }
}

type Serve = {
    title: string,
    text: string,
    icon: LucideIcon
}

type HoverCardType = {
    background: string;
    title: string;
    text: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string,
    aos?: string
};

type TestimonialType = {
    quote: string,
    name: string,
    role: string,
    organisation: string,
    rating: number,
    avatar?: string
}

export type { Marquee, Doings, Serve, HoverCardType, TestimonialType }