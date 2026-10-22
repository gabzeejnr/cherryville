function addDot(text: string) {
    const t = text.trim();
    const l = t.length;
    let p: string;

    if (t.charAt(l - 1) === ".") {
        p = t
    } else {
        p = t + "."
    }

    return p
}

function getInitials(name: string) {

    return (
        name.split(" ")
            .map(n => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()
    )

}

function generateSlug(name: string): string {
    return (name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    )
}

function generateRandom( length: number) {
    const numbers = `0123456789`;
    const uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    const lowercase = uppercase.split("").map(c => c.toLowerCase()).join("");
    const all = [...numbers, ...uppercase, ...lowercase].join("")

    setInterval(() => {
        let string: string = "";
        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * all.length - 1) + 1;
            string += all.charAt(random)
        }

        console.log(string)
    }, 10);

}


export { addDot, getInitials, generateSlug }