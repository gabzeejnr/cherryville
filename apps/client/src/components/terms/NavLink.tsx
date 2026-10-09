import { goTo } from "../../hooks";
import type { ReactNode } from "react";

function NavLink({
    id,
    className,
    children,
    current,
    label,
    onNavigate,
}: {
    id: string;
    className?: string;
    children: ReactNode;
    current?: boolean;
    label?: string;
    onNavigate?: () => void;
}) {
    return (
        <a href={id === 'top' ? '#' : `#${id}`} className={className} aria-current={current ? 'location' : undefined}
            aria-label={label} onClick={(e) => {
                e.preventDefault();
                goTo(id);
                onNavigate?.();
            }}
        >{children}</a>
    );
}

export { NavLink }