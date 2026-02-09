import "../styles/Home.Section6.css"
import hotel from '/img/page/home/section6/hotel.png'
import { useTranslation } from "react-i18next";

export default function Home_Section6() {
    const { t } = useTranslation();
    
    return(<>
    <section className="Home_Section6">
            <h4>{t("home.section6.localizacao")}</h4>
            <div className="Home_Section6_localizacao_cards">
                <div className="Home_Section6_localizacao_cards_Palestras">
                    <h6>{t("home.section6.palestras")}</h6>
                    <h5>Oceania Park Hotel Spa & Convention Center</h5>
                    <p className="Home_Section6_localizacao_cards_Palestras_data">{t("home.section6.palestrasData")}</p>
                    <img src={hotel} alt="" />
                    <p>{t("home.section6.paragrafo1")}</p>
                    <div className="Home_Section6_localizacao_cards_Palestras_buttons">
                        <a href=""><button>{t("home.section6.plantaDoEvento")}</button></a>
                        <a href=""><button>{t("home.section6.verNoMapa")}</button></a>
                    </div>
                </div>
                <div className="Home_Section6_localizacao_cards_Tutoriais">
                    <h6>{t("home.section6.tutoriais")}</h6>
                    <h5>{t("home.section6.aDefinir")}</h5>
                </div>
                <div className="Home_Section6_localizacao_cards_Sprints">
                    <h6>Sprints</h6>
                    <h5>{t("home.section6.aDefinir")}</h5>
                </div>
            </div>
            
    </section>
    <div className="Home_Section6_barra_verde"></div>
    </>)
}