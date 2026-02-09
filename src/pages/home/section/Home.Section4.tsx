import "../styles/Home.Section4.css"
import cobra_1 from "/img/page/home/section4/secao4_cobra_1.png"
import cobra_2 from "/img/page/home/section4/secao4_cobra_2.png"
import { useTranslation } from "react-i18next";

export default function Home_Section4() {
    const { t } = useTranslation();

    return(<section className="Home_Section4">
            <div className="Home_Section4_itens_texto">
                <h4>{t("home.section4.submissaoDeAtividades")}</h4>
                <div className="Home_Section4_itens_texto_buttons">
                    <a href=""><button className="Home_Section4_buttons_1">{t("home.section4.enviarAtividade")}</button></a>
                    <a href=""><button className="Home_Section4_buttons_2">{t("home.section4.regulamento")}</button></a>
                </div>
                <a href=""><p>{t("home.section4.paragrafo1")}</p></a>
            </div>
            <div className="Home_Section4_cobras">
                <img src={cobra_1} alt="" />
                <img src={cobra_2} alt="" />
            </div>
    </section>)
}