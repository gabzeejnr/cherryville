import { useEffect } from "react";


export default function useSectionId(): void {
    useEffect(() => {
        const id = window.location.hash.slice(1);

        if (id) {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);
}

export { useSectionId }