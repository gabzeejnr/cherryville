import { useState, useEffect } from "react";
import { STICKY_TOP } from "../libs";

function goTo(id: string) {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
}

function useScrollSpy(ids: string[]) {
    const [active, setActive] = useState('top');

    useEffect(() => {
        const visible = new Set<string>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) visible.add(e.target.id);
                    else visible.delete(e.target.id);
                }
                for (let i = ids.length - 1; i >= 0; i--) {
                    if (visible.has(ids[i])) {
                        setActive(ids[i]);
                        break;
                    }
                }
            },
            { rootMargin: `-${STICKY_TOP + 8}px 0px -80% 0px` },
        );
        for (const id of ids) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
        return () => observer.disconnect();
    }, [ids]);

    return active;
}

export {
    goTo, useScrollSpy
}