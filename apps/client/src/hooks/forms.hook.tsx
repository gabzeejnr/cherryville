import { useEffect, useRef } from "react";
import { analytics } from "../analytics/events";


function useFormAnalytics(isOpen: boolean, formName: string) {
    const wasOpened = useRef<boolean>(false);

    useEffect(function () {
        if (!isOpen || wasOpened.current) return;
        wasOpened.current = isOpen;
        analytics.formStarted("request_proposal")
    }, [isOpen, formName])

    useEffect(() => {
        if (!isOpen) wasOpened.current = false;
    }, [isOpen])
}

export { useFormAnalytics }