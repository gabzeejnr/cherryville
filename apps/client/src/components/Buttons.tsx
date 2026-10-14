import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import type { AccentButton, RequestAProposalButton } from "../types";

export function RequestAProposalButton({ setIsOpen, arrow, className }: RequestAProposalButton) {
    return (
        <button type="button" onClick={() => setIsOpen(p => !p)} data-aos="flip-right"
            className={`accent-button cursor-pointer ${className}`}
        >Request a Proposal {arrow && <FontAwesomeIcon icon={faArrowRight} />}</button>
    )
}

export function AccentButton({ text, onClick, arrow }: AccentButton) {
    return (
        <button data-aos="flip-right" className="accent-button cursor-pointer"
            onClick={onClick}>{text} {arrow && <FontAwesomeIcon icon={faArrowRight} />}</button>
    )
}

export function FormButton(){}