export default function Engage({ engage }: { engage: string }) {
    return (
        <section className="px-3 md:px-8 lg:px-20 py-20 bg-cherry flex flex-col gap-5 min-h-screen justify-center">
            <h2>How we Engage</h2>
            <p className="">{engage}</p>
        </section>
    )
}