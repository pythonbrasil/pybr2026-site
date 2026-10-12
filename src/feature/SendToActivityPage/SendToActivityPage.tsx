import "./SendToActivityPage.css"
import cobra_1 from "/img/page/home/section4/secao4_cobra_1.png"
import cobra_2 from "/img/page/home/section4/secao4_cobra_2.png"
import { useTranslation } from "react-i18next";

export const SendToActivityPage = () => {
    const { t } = useTranslation();

    return(
        <section className="SendToActivityPage" id="ATIVIDADES">
                <div className="SendToActivityPage_itens_texto">
                    <h4>
                        {t("SendToActivityPage.text1")}
                    </h4>
                    <div className="SendToActivityPage_itens_texto_buttons">
                        <a
                            className="SendToActivityPage_buttons_to_schedule"
                            href="https://talks.python.org.br/pybr26/schedule/"
                            target="_blank"
                            rel="noreferrer noopener">
                            {t("SendToActivityPage.text2")}
                        </a>
                    </div>
                    <a href="https://instagram.com/pythonbrasil" target="_blank" rel="noreferrer noopener">
                        <p>
                            {t("SendToActivityPage.text3")}
                        </p>
                    </a>
                </div>
                <div className="SendToActivityPage_cobras">
                    <img src={cobra_1} alt="" />
                    <img src={cobra_2} alt="" />
                </div>
        </section>
    )
}