import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function AcademyWhatsapp({ text, className, divText }: { text: string, className?: string, divText:string }) {
    return (
        <Link to={`https://api.whatsapp.com/send/?phone=2348064265176&text=${encodeURIComponent(text)}`}
            hrefLang="utf-8" target="_blank" className={className}>
            <div className="flex items-center gap-2 w-fit p-2 rounded-full bg-green-600">
                <FontAwesomeIcon icon={faWhatsapp} color="white" className="text-2xl" />
                <p className="text-white font-medium">{divText}</p>
            </div></Link>
    )
}