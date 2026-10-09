import { useEffect } from "react";
import { addDot } from "../utils";
import type { DocumentMeta } from "../types";


function useDocumentMeta({ title, description }: DocumentMeta) {

    if (!title?.trim().length) {

    }

    const c = "-.;, ";
    const r = new RegExp(`[${c}]`);
    const pt: string[] = [];

    const p = title?.split(r);

    const s: string[] = ["and", "in", "of", "on"];

    p?.forEach((t) => {
        if (s.includes(t.toLowerCase())) {
            pt.push(t)
        } else {
            const push = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
            pt.push(push);
        }
    });

    useEffect(function () {

        if (!title.length || !title) {
            document.title = "Cherryville Limited"
        } else {
            document.title = `${pt.join(" ")} | Cherryville Limited`;
        }

        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;

        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }

        meta.content = addDot(description);

    }, [title, description])
}

export { useDocumentMeta }