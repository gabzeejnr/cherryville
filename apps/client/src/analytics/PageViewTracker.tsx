import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { analytics } from "./events";


export default function PageViewTracker() {
    const location = useLocation();

    useEffect(function () {
        analytics.pageViewed(location.pathname)
    }, [location.pathname]);

    return null
}