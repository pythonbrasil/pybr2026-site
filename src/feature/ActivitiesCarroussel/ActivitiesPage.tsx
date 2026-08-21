import "./styles/ActivitiesPage.css"
import { activities } from "../../data/AllActivities"
import { Activity } from "./Activity";
import { useTranslation } from "react-i18next";

type Lang = 'br' | 'en' | 'es'

export const ActivitiesPage = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language as Lang
    const palestras = activities[0].info;
    const tutoriais = activities[1].info;

    return(
        <>
        <div className="ActivitiesPage">
            <div className="ActivitiesPage_itens">
                <h4>
                    {t("ActivitiesPage.text1")}
                </h4>
                {
                    [...palestras]
                    .sort(() => Math.random() - 0.5)
                    .map((Keynote : any) => (
                        <Activity 
                            img = {Keynote.palestrante[0].foto}
                            talkerName = {Keynote.palestrante[0].nome}
                            talkTitle = {Keynote.titulo[lang]}
                            talkSubtitle ={Keynote.descricao[lang]}
                        />
                    )
                )}
            </div>
        </div>
        <div className="ActivitiesPage tutorial">
            <div className="ActivitiesPage_itens">
                <h4>
                    {t("ActivitiesPage.text2")}
                </h4>
                {
                    [...tutoriais]
                    .sort(() => Math.random() - 0.5)
                    .map((Keynote : any) => (
                        <Activity 
                            img = {Keynote.palestrante[0].foto}
                            talkerName = {Keynote.palestrante[0].nome}
                            talkTitle = {Keynote.titulo[lang]}
                            talkSubtitle ={Keynote.descricao[lang]}
                        />
                    )
                )}
            </div>
        </div>
        </>
    )
}