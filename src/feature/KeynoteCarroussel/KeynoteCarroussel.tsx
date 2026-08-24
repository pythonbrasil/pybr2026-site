import "./KeynoteCarroussel.css"
import SimpleSwiper from "../../components/SimpleSwiper"
import Slide from "./slide"
import KeynotesInfos from "../../../config/KeynotesInfos.yaml?raw"
import { parse } from "yaml";
import { useTranslation } from "react-i18next";

const Keynotes = parse(KeynotesInfos).allKeynotes;

type Lang = 'br' | 'en' | 'es'

export function KeynoteCarroussel(
    {counterCat} : any
) {
    const { i18n } = useTranslation();
    const lang = i18n.language as Lang
    const lang_number = {
        br: 0,
        en: 1,
        es: 2
    }[lang];

    return(<>
        <section className="Home_Section3" id="KEYNOTES">
            <div className="Home_Section3_carrossel_keynotes">
                <h4>Keynotes</h4>
                <SimpleSwiper
                    slides={
                        Keynotes.map((Keynote : any) => (
                            <Slide 
                                name={Keynote.name}
                                biography={Keynote.biography_text[lang_number][lang]}
                                foto={Keynote.photo}
                                githubUrl={Keynote.github_url}
                                instagramUrl={Keynote.instagram_url}
                                linkedinUrl={Keynote.linkedin_url}
                                siteUrl={Keynote.site_url}
                                counterCat={counterCat}
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