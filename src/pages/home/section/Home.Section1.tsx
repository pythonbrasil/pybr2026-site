import Carrossel from "../../../components/Carrossel"
import "../styles/Home.Section1.css"
import hero from '/hero.png'
import hero_mobile from '/img/page/home/section1/hero_mobile.svg'

export default function Home_Section1() {
    return(<>
    <section className="Home_Section1" id="HOME">
        <img className="hero_desktop" src={hero} alt="" />
        <img className="hero_mobile" src={hero_mobile} alt="" />
    </section>
    <Carrossel/>
    </>)
}