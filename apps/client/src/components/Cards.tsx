export function TitleText({ id, title, text, bg }: {
    id?: string,
    title: string,
    text: string[],
    bg?: "bg-cherry" | "bg-white" | "bg-accent"
}) {
    return (
        <div id={id} className={`flex items-center-safe rounded-xl ${bg ?? "bg-cherry"} p-6 md:p-8 border-accent border-l-4 border-r-2 hover:-translate-y-2`}>
            <div>
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading text-gray-700">{text}</p>
            </div>
        </div>
    )
}