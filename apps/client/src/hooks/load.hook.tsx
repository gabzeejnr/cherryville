import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function useGoToTopOnLoad(path: string) {

    const { pathname } = useLocation();
    
    useEffect(function () {
        if (pathname !== `/${path ?? ""}`) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [path])
}

export { useGoToTopOnLoad }