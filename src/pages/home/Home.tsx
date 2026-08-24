import Home_Section1 from "./section/Home.Section1"
import Home_Section2 from "./section/Home.Section2"
import Home_Section5 from "./section/Home.Section5"
import Carrossel from "../../components/Carrossel"
import { KeynoteCarroussel } from "../../feature/KeynoteCarroussel"
import { EventLocals } from "../../feature/EventLocals"
import { SponsorsExibition } from "../../feature/SponsorsExibition/SponsorsExibition"
import { SendToActivityPage } from "../../feature"

export default function Home(
    {setCounterCat, counterCat} : any
) {
    return(
        <>
            <Home_Section1
                setCounterCat = {setCounterCat}
                counterCat = {counterCat}
            />
            <Home_Section2
                counterCat = {counterCat}
            />
            <KeynoteCarroussel
                counterCat = {counterCat}
            />
            <Carrossel/>
            <SendToActivityPage/>
            <Home_Section5/>
            <EventLocals/>
            <SponsorsExibition/>
        </>
    )
}