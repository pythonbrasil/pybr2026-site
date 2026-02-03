import "../styles/Home.Section5.css"
import cidade from '/img/page/home/section5/cidade.png'
import Carrossel from "../../../components/Carrossel"
import { useTranslation } from "react-i18next";

export default function Home_Section5() {
    const { t } = useTranslation();
    
    return(<>
    <section className="Home_Section5" id="GUIA_DA_CIDADE">
            <div className="Home_Section5_itens">
                <div className="Home_Section5_itens_texto">
                    <h4>{t("home.section5.guiaDaCidade")}</h4>
                    <div className="Home_Section5_itens_texto_p">   
                        <p>{t("home.section5.paragrafo1")}</p>
                        <p>{t("home.section5.paragrafo2")}</p>
                        <p>{t("home.section5.paragrafo3")}</p>
                    </div>
                    <a href=""><button>{t("home.section5.guiaDaCidade")}</button></a>
                </div>
                <img src={cidade} alt="Imagem da cidade" />
            </div>
    </section>
    <Carrossel/>
    </>)
}