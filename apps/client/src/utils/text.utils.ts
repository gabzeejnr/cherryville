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

export { addDot, getInitials }