export function TitleText({ id, title, text, bg }: {
    id?: string,
    title: string,
    text: string[],
    bg?: "bg-cherry" | "bg-white" | "bg-accent"
}) {
    return (
        <div id={id} className={`title-text-card ${bg ?? ""}`}>
            <div>
                <h3 className="">{title}</h3>
                {text.map(t => <p key={t}>{t}</p>)}
            </div>
        </div>
    )
}