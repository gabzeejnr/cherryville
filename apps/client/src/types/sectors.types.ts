import type { Heading } from "./index";

type Template = {
    route: "oil-and-gas" | "banking" | "government" | "development",
    heading: Heading,
    subtitle: string,
    challenge: string,
    help: {
        title: string,
        text: string
    }[],
    engage: string
}

export type { Template }