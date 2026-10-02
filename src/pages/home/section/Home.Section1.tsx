import { useEffect } from "react"
import Carrossel from "../../../components/Carrossel"
import "../styles/Home.Section1.css"
import hero from '/hero.png'
import hero_mobile from '/img/page/home/section1/hero_mobile.svg'

export default function Home_Section1(
    {setCounterCat, counterCat} : any
) {

    useEffect(() => {
        console.error(`Clica no banner ${counterCat < 20 ? `mais ${20-counterCat} vezes` : ''}e veja o que acontece!`);
    },[counterCat])

    return(
        <>
            <section 
                className="Home_Section1"
                id="HOME"
                onClick={() => setCounterCat(counterCat+1)}
            >
                <img className="hero_desktop" src={hero} alt="" />
                <img className="hero_mobile" src={hero_mobile} alt="" />
            </section>
            <Carrossel/>
        </>
    )
}