import SimpleSwiper from "../../components/SimpleSwiper"
import { Slide } from "./Slide"
import "./styles/ActivitiesCarroussel.css"
import { activities } from "../../data/AllActivities"

export const ActivitiesCarroussel = () => {
    const lang = "br";
    const palestras = activities[0].info;
    const tutoriais = activities[1].info;

    return(
        <>
        <div className="ActivitiesCarroussel">
            <div className="ActivitiesCarroussel_itens">
                <h4>Palestras</h4>
                <SimpleSwiper
                    swiperTrackWidth="450px"
                    slides={
                        [...palestras]
                        .sort(() => Math.random() - 0.5)
                        .map((Keynote : any) => (
                            <Slide 
                                img = {Keynote.palestrante[0].foto}
                                talkerName = {Keynote.palestrante[0].nome}
                                talkTitle = {Keynote.titulo[lang]}
                                talkSubtitle ={Keynote.descricao[lang]}
                            />
                        ))
                    }
                />
            </div>
        </div>
        <div className="ActivitiesCarroussel tutorial">
            <div className="ActivitiesCarroussel_itens tutorial">
                <h4>Tutoriais</h4>
                <SimpleSwiper
                    swiperTrackWidth="450px"
                    slides={
                        [...tutoriais]
                        .sort(() => Math.random() - 0.5)
                        .map((Keynote : any) => (
                            <Slide 
                                img = {Keynote.palestrante[0].foto}
                                talkerName = {Keynote.palestrante[0].nome}
                                talkTitle = {Keynote.titulo[lang]}
                                talkSubtitle = {Keynote.descricao[lang]}
                                variant = "tutorial"
                            />
                        ))
                    }
                />
            </div>
        </div>
        </>
    )
}