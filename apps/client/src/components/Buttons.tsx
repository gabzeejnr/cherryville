import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import type { Dispatch, SetStateAction } from "react";

export function RequestAProposalButton({ setIsOpen, arrow, className }: {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    arrow?: true,
    className?: string
}) {
    return (
        <button type="button" onClick={() => setIsOpen(p => !p)} data-aos="flip-right"
            className={`accent-button cursor-pointer ${className}`}
        >Request a Proposal {arrow && <FontAwesomeIcon icon={faArrowRight} />}</button>
    )
}

export function AccentButton({ text, onClick, arrow }: {
    text: string,
    arrow?: true,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <button data-aos="flip-right" className="accent-button cursor-pointer"
            onClick={onClick}>{text} {arrow && <FontAwesomeIcon icon={faArrowRight} />}</button>
    )
}