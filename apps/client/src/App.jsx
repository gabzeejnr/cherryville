import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import RoutePage from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { initPostHog } from "./analytics";
import "./App.css";
import PageViewTracker from "./analytics/PageViewTracker";

export default function App() {

    const handleLoad = () => {
        initPostHog();
    };

    useEffect(function () {
        AOS.init({
            duration: 1000,
            once: false
        })

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad, { once: true });
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, [])

    return (
        <>
            <PageViewTracker />
            <Toaster />
            <RoutePage />
        </>
    )
}