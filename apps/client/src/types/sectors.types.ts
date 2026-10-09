type Template = {
    route: "oil-and-gas" | "banking" | "government" | "development",
    heading: {
        text: string,
        highlights: string[]
    },
    headingText: string,
    challenge: string,
    help: {
        title: string,
        text: string
    }[],
    engage: string
}

export type { Template }