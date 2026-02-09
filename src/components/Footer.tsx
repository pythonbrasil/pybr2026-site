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
                    <ul> <a href="#contador-home">{t("footer.inicio")}</a></ul>
                    <ul> <a href="#O_EVENTO">{t("footer.oEvento")}</a></ul>
                    {/* <ul>Keynotes</ul> */}
                    <ul><a href="#SUBMISSAO_DE_ATIVIDADES">{t("home.section4.submissaoDeAtividades")}</a></ul>
                    {/* <ul>{t("footer.programacao")}</ul> */}
                    {/* <ul>{t("footer.guiaDaCidade")}</ul> */}
                    {/* <ul>{t("footer.patrocinadores")}</ul> */}
                    {/* <ul>FAQ</ul> */}
                    {/* <ul>{t("footer.contato")}</ul> */}
                    {/* <ul>{t("footer.inscrevaSe")}</ul> */}
                </li>
            </div>
            <div className="Footer_links_nossas_redes">
                <h4>{t("footer.nossasRedes")}</h4>
                <li>
                    <ul> <a href="https://www.instagram.com/pythonbrasil/" target="_blank"><img src="" alt="" />Instagram</a></ul>
                    <ul> <a href="https://www.linkedin.com/company/apyb/" target="_blank"><img src="" alt="" />Linkedin</a></ul>
                    <ul> <a href="https://www.facebook.com/pythonbrasil/" target="_blank"><img src="" alt="" />Facebook</a></ul>
                    <ul> <a href="https://x.com/pythonbrasil" target="_blank"><img src="" alt="" />X</a></ul>
                    <ul> <a href="https://bsky.app/profile/pythonbrasil.bsky.social" target="_blank"><img src="" alt="" />Bluesky</a></ul>
                    <ul> <a href="https://www.youtube.com/@pythonbrasiloficial" target="_blank"><img src="" alt="" />Youtube</a></ul>
                    <ul> <a href="mailto:brasil@python.org.br" target="_blank"><img src="" alt="" />E-mail</a></ul>
                    <ul> <a href="https://www.flickr.com/photos/pythonbrasil/" target="_blank"><img src="" alt="" />Flickr</a></ul>
                    {/* <ul> <a href="https://t.me/pythonbrasil" target="_blank"><img src="" alt="" />Telegram</a></ul> */}
                </li>
            </div>
            <div className="Footer_links_da_apyb">
                <h4>{t("footer.linksDaAPyB")}</h4>
                <li>
                    <ul>APyB</ul>
                    <ul><a href="https://www.python.org.br/codigo-de-conduta/" target="_blank">{t("footer.codigoDeConduta")}</a></ul>
                    {/* <ul>{t("footer.formulario")}</ul> */}
                    {/* <ul>Dormeles Tremea / Jean Ferri</ul> */}
                </li>
            </div>
            <div className="Footer_links_botoes_politicas">
                <div className="Footer_links_botoes_politicas_buttons">
                    <button><a href="https://www.eventbrite.com.br/e/python-brasil-2026-tickets-1011861115217" target="_blank">{t("footer.comprarIngressos")}</a></button>
                    <button><a href={t("buttonPrincipal.linkPlanoDePatrocinio")} target="_blank">{t("footer.planoDePatrocinio")}</a></button>
                </div>
                {/* <h4>{t("footer.politicasDePrivacidade")}</h4> */}
            </div>
        </div>
    </footer>)
}