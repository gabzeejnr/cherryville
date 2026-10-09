import { useEffect } from "react";
import RoutePage from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

export default function App() {

    useEffect(function () {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, [])

    return (
        <>
            <RoutePage />
        </>
    )
}