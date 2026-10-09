export default function Challenge({ challenge }: { challenge: string }) {
    return (
        <section className="px-3 md:px-8 lg:px-20 py-20 bg-cherry flex flex-col gap-5 min-h-screen justify-center">
            <h2>The Challenge</h2>
            <p className="text-wrap">{challenge}</p>
        </section>
    )
}