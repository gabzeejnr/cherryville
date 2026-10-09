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
            <div>
                <ul className="list-disc lg:pl-10">
                    {help.map(h => {

                        const { title, text } = h;
                        let parsedTitle: string[] = [""];
                        const split = title.trim().split(" ");

                        for (const s of split) {
                            if(ignoredWords.includes(s.toLowerCase())){
                                parsedTitle.push(s);
                            } else {
                                parsedTitle.push(s.charAt(0).toUpperCase() + s.slice(1))
                            }
                        }

                        return <li>
                            <span className="font-semibold">{parsedTitle.join(" ")}:</span> <span>{text}</span>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}