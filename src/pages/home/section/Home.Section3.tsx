import "../styles/Home.Section3.css"
import key_dot_1 from "/img/page/home/section3/key_dot_1.png"
import key_dot_2 from "/img/page/home/section3/key_dot_2.png"
import key_dot_3 from "/img/page/home/section3/key_dot_3.png"
import key_dot_4 from "/img/page/home/section3/key_dot_4.png"
import Carrossel from "../../../components/Carrossel"
import SimpleSwiper from "../../../components/SimpleSwiper"
import Slide from "../../../components/slide"

export default function Home_Section3() {
    return(<>
        <section className="Home_Section3" id="KEYNOTES">
            <div className="Home_Section3_carrossel_keynotes">
                <h4>Keynotes</h4>
                <SimpleSwiper
                  slides={[<Slide />, <Slide />, <Slide />, <Slide />]}
                  dots={[key_dot_1, key_dot_2, key_dot_3, key_dot_4]}
                />
            </div>
        </section>
        <Carrossel/>
    </>)
}