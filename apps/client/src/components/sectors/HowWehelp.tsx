import {TitleTextList} from "../Lists"

export default function HowWeHelp({ help }: {
    help: {
        title: string,
        text: string
    }[]
}) {

    const ignoredWords: readonly string[] = ["and", "of", "for", "with", "at"];

    return (
        <section className="px-3 md:px-8 lg:px-15 py-20 bg-cherry flex flex-col gap-5 min-h-screen justify-center">
            <span className="text-2xl font-bold">How We Help</span>
                <TitleTextList array={help} />
        </section>
    )
}