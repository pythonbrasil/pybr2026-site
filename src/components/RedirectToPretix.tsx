import { useEffect } from "react"

const PRETIX_URL = "https://talks.python.org.br/pybr26/schedule/";

export const RedirectToPretix = () => {
    useEffect(() => {
        window.location.replace(PRETIX_URL)
    }, []);

    return <></>
};