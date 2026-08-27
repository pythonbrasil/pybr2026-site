import { Link } from "react-router-dom";
import "./styles/SendToActivityPage.css"
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
                        <Link to={'/atividades'}>
                            <button className="SendToActivityPage_buttons_1">
                                {t("SendToActivityPage.text2")}
                            </button>
                        </Link>
                    </div>
                    <a href="https://instagram.com/pythonbrasil" target="_blank">
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