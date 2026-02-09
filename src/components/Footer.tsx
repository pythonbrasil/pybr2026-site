import "./styles/Footer.css"
import logo from "/img/components/footer/logo.png"
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (<footer className="Footer" id="CONTATO_footer">
            <div className="Footer_barra_verde"></div>
        <div className="Footer_logo">
            <img src={logo} alt="LOGO" />
        </div>
        <div className="Footer_links">
            <div className="Footer_links_site">
                <h4>{t("footer.site")}</h4>
                <li>
                    <ul>{t("footer.inicio")}</ul>
                    <ul>{t("footer.oEvento")}</ul>
                    <ul>Keynotes</ul>
                    <ul>{t("footer.programacao")}</ul>
                    <ul>{t("footer.guiaDaCidade")}</ul>
                    <ul>{t("footer.patrocinadores")}</ul>
                    <ul>FAQ</ul>
                    <ul>{t("footer.contato")}</ul>
                    <ul>{t("footer.inscrevaSe")}</ul>
                </li>
            </div>
            <div className="Footer_links_nossas_redes">
                <h4>{t("footer.nossasRedes")}</h4>
                <li>
                    <ul><img src="" alt="" />Instagram</ul>
                    <ul><img src="" alt="" />Linkedin</ul>
                    <ul><img src="" alt="" />Facebook</ul>
                    <ul><img src="" alt="" />X</ul>
                    <ul><img src="" alt="" />Bluesky</ul>
                    <ul><img src="" alt="" />Youtube</ul>
                    <ul><img src="" alt="" />E-mail</ul>
                    <ul><img src="" alt="" />Flickr</ul>
                    <ul><img src="" alt="" />Telegram</ul>
                </li>
            </div>
            <div className="Footer_links_da_apyb">
                <h4>{t("footer.linksDaAPyB")}</h4>
                <li>
                    <ul>APyB</ul>
                    <ul>{t("footer.codigoDeConduta")}</ul>
                    <ul>{t("footer.formulario")}</ul>
                    <ul>Dormeles Tremea / Jean Ferri</ul>
                </li>
            </div>
            <div className="Footer_links_botoes_politicas">
                <div className="Footer_links_botoes_politicas_buttons">
                    <button>{t("footer.comprarIngressos")}</button>
                    <button>{t("footer.planoDePatrocinio")}</button>
                </div>
                <h4>{t("footer.politicasDePrivacidade")}</h4>
            </div>
        </div>
    </footer>)
}