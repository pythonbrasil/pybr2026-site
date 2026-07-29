import "./KeynoteCarroussel.css"
import key_dot_1 from "/img/page/home/section3/key_dot_1.png"
import key_dot_2 from "/img/page/home/section3/key_dot_2.png"
import key_dot_3 from "/img/page/home/section3/key_dot_3.png"
import key_dot_4 from "/img/page/home/section3/key_dot_4.png"
import SimpleSwiper from "../../components/SimpleSwiper"
import Slide from "./slide"
import KeynotesInfos from "../../../config/KeynotesInfos.yaml?raw"
import { parse } from "yaml";


const Keynotes = parse(KeynotesInfos).allKeynotes;

export function KeynoteCarroussel() {
    console.log(Keynotes[0].biography_text[0].pt)

    return(<>
        <section className="Home_Section3" id="KEYNOTES">
            <div className="Home_Section3_carrossel_keynotes">
                <h4>Keynotes</h4>
                <SimpleSwiper
                    slides={
                        Keynotes.map((Keynote : any) => (
                            <Slide 
                                name={Keynote.name}
                                biography={Keynote.biography_text[0].pt}
                                foto={Keynote.photo}
                                githubUrl={Keynote.github_url}
                                instagramUrl={Keynote.instagram_url}
                                linkedinUrl={Keynote.linkedin_url}
                                siteUrl={Keynote.site_url}
                            />
                        ))
                    }
                    dots={[key_dot_1, key_dot_2, key_dot_3, key_dot_4]}
                />
            </div>
        </section>
    </>)
}