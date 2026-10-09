import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

export default function ScrollToTop() {

    useEffect(function () {

    }, [])

    return (
        <button type="button" className="bottom-10 z-100 flex items-center-safe gap-0.5"
            onClick={() => { scrollTo({ top: 0, behavior: "smooth" }) }}>
            <div className="p-1 bg-gray-300 rounded-full">
                <ArrowUp />
            </div>
            <div>Scroll to Top!</div>
        </button>
    )
}