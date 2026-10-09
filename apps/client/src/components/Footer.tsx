import { Link } from "react-router-dom";
import { image } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks, socials } from "../data/footer.data";
import type { FootLink, Social } from "../types/global.types";
import styles from "./FootNav.module.scss";

function SocialLink({ social }: { social: Social }) {
    return (
        <Link to={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.id}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-white/80 transition hover:border-accent hover:bg-accent hover:text-cherry">
            <FontAwesomeIcon icon={social.icon} />
        </Link>
    );
}

function FooterLinks({ title, links }: FootLink) {
    return (
        <div>
            <p className="mb-5 text-xs font-bold tracking-[0.15em] text-accent">{title.toUpperCase()}</p>
            <ul className="space-y-3">
                {links.map(link => (
                    <li key={link.text} className="w-fit">
                        {link.href === null ? (
                            <span className="text-sm text-white">{link.text}</span>
                        ) : (
                            <Link to={link.href} className="flex items-center gap-1.5 text-sm text-white transition hover:text-accent">
                                {link.icon && <FontAwesomeIcon icon={link.icon} />}
                                {link.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className={`${styles.footer} text-white`}>
            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
                <div className="flex flex-col gap-12 py-16 lg:flex-row lg:justify-between lg:gap-20 lg:py-20">
                    <div className="max-w-sm">
                        <Link to="/" className="mb-5 flex w-fit items-center gap-2.5">
                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-cherry">
                                <img src={image} alt="Cherryville" className="h-full w-full object-contain" />
                            </div>
                            <span className="flex flex-col text-lg font-extrabold tracking-tight">
                                CherryVille
                                <span className="-mt-1 text-xs text-accent">Limited</span>
                            </span>
                        </Link>
                        <p className="mb-6 max-w-xs text-sm leading-relaxed text-white">
                            Empowering Growth Through Learning
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map(social => <SocialLink key={social.id} social={social} />)}
                        </div>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 md:gap-16 lg:grid-cols-3">
                        {footerLinks.map(foot => (
                            <FooterLinks key={foot.title} title={foot.title} links={foot.links} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-accent py-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-white">
                        &copy; 2026 Cherryville Limited. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-white/60">
                        <Link to="/privacy" className="transition hover:text-accent">Privacy Policy</Link>
                        <Link to="/terms" className="transition hover:text-accent">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}