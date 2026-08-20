import Home_Section1 from "./section/Home.Section1"
import Home_Section2 from "./section/Home.Section2"
import Home_Section5 from "./section/Home.Section5"
import Home_Section7 from "./section/Home.Section7"
import Carrossel from "../../components/Carrossel"
import { KeynoteCarroussel } from "../../feature/KeynoteCarroussel"
import { EventLocals } from "../../feature/EventLocals"
import {ActivitiesCarroussel} from "../../feature/ActivitiesCarroussel"

export default function Home() {
    return(<>
        <Home_Section1/>
        <Home_Section2/>
        <KeynoteCarroussel/>
        <ActivitiesCarroussel/>
        <Carrossel/>
        <Home_Section5/>
        <EventLocals/>
        <Home_Section7/>
    </>)
}