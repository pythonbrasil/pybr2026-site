import "./styles/ActivitiesPage.css"
import { activities } from "../../data/AllActivities"
import { Activity } from "./Activity";
import { useTranslation } from "react-i18next";

type Lang = 'br' | 'en' | 'es'

export const ActivitiesPage = (
    {catMode} : any
) => {
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
                    .sort((a, b) => a.titulo[lang].localeCompare(b.titulo[lang]))
                    .map((Talker : any) => (
                        <Activity 
                            img = {Talker.palestrante[0].foto}
                            talkers = {Talker.palestrante}
                            talkTitle = {Talker.titulo[lang]}
                            talkLink={Talker.link}
                            catMode={catMode}
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
                    .sort((a, b) => a.titulo[lang].localeCompare(b.titulo[lang]))
                    .map((Talker : any) => (
                        <Activity 
                            img = {Talker.palestrante[0].foto}
                            talkers = {Talker.palestrante}
                            talkTitle = {Talker.titulo[lang]}
                            talkLink={Talker.link}
                        />
                    )
                )}
            </div>
        </div>
        </>
    )
}