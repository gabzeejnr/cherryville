import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import RoutePage from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import PageViewTracker from "./analytics/PageViewTracker";

export default function App() {

    useEffect(function () {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, [])

    return (
        <>
            <PageViewTracker />
            <Toaster />
            <RoutePage />
        </>
    )
}