import Home_Section1 from "./section/Home.Section1"
import Home_Section2 from "./section/Home.Section2"
import Home_Section5 from "./section/Home.Section5"
import Carrossel from "../../components/Carrossel"
import { KeynoteCarroussel } from "../../feature/KeynoteCarroussel"
import { EventLocals } from "../../feature/EventLocals"
import {ActivitiesCarroussel} from "../../feature/ActivitiesCarroussel"
import { SponsorsExibition } from "../../feature/SponsorsExibition/SponsorsExibition"

export default function Home() {
    return(<>
        <Home_Section1/>
        <Home_Section2/>
        <KeynoteCarroussel/>
        <Carrossel/>
        <Home_Section5/>
        <EventLocals/>
        <SponsorsExibition/>
    </>)
}