import "./KeynoteCarroussel.css"
import SimpleSwiper from "../../components/SimpleSwiper"
import Slide from "./slide"
import KeynotesInfos from "../../../config/KeynotesInfos.yaml?raw"
import { parse } from "yaml";


const Keynotes = parse(KeynotesInfos).allKeynotes;

export function KeynoteCarroussel() {
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
                    dots={
                        Keynotes.map((Keynote : any) => (
                            Keynote.dot_photo
                        ))
                    }
                />
            </div>
        </section>
    </>)
}