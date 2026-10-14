import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import type { AccentButton, RequestAProposalButton } from "../types";
import type { ReactNode } from "react";

export function RequestAProposalButton({ setIsOpen, arrow, className }: RequestAProposalButton) {
    return (
        <button type="button" onClick={() => setIsOpen(p => !p)} data-aos="flip-right"
            className={`accent-button cursor-pointer ${className}`}
        >Request a Proposal {arrow && <FontAwesomeIcon icon={faArrowRight} />}</button>
    )
}

export function AccentButton({ text, onClick, arrow }: AccentButton) {
    return (
        <button data-aos="flip-right" className="accent-button cursor-pointer" onClick={onClick}>
            {text} {arrow && <FontAwesomeIcon icon={faArrowRight} />}
        </button>
    )
}

export function FormButton({ loading, text, loadingText }: { loading: boolean, text: string, loadingText: string }) {
    return (

        <button type="submit" aria-busy={loading}
            disabled={loading} className={`w-full rounded-md px-6 py-3 font-medium text-white flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cherry focus:ring-offset-2 ${loading
                ? "bg-accent/60 cursor-not-allowed opacity-80"
                : "bg-accent cursor-pointer hover:opacity-90 active:scale-[0.99]"
                }`}
        >
            {loading && (
                <span aria-hidden="true"
                    className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                />
            )}

            <span aria-live="polite" aria-atomic="true">
                {loading ? loadingText : text}
            </span>
        </button>
    )
}