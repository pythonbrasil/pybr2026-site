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
                    <ul><a href="#PATROCINADORES">{t("footer.patrocinadores")}</a></ul>
                    {/* <ul>FAQ</ul> */}
                    {/* <ul>{t("footer.contato")}</ul> */}
                    {/* <ul>{t("footer.inscrevaSe")}</ul> */}
                </li>
            </div>
            <div className="Footer_links_nossas_redes">
                <h4>{t("footer.nossasRedes")}</h4>
                <li>
                    <ul><a target="_blank" href="https://instagram.com/pythonbrasil"> Instagram</a></ul>
                    <ul><a target="_blank" href="https://www.linkedin.com/company/apyb/"> Linkedin</a></ul>
                    <ul><a target="_blank" href="http://fb.com/pythonbrasil">Facebook</a></ul>
                    <ul><a target="_blank" href="https://x.com/pythonbrasil">X</a></ul>
                    <ul><a target="_blank" href="https://bsky.app/profile/pythonbrasil"> Bluesky</a></ul>
                    <ul><a target="_blank" href="https://www.youtube.com/c/pythonbrasiloficial"> Youtube</a></ul>
                    <ul><a target="_blank" href="https://www.flickr.com/photos/pythonbrasil">Flickr</a></ul>
                </li>
            </div>
            <div className="Footer_links_da_apyb">
                <h4>{t("footer.linksDaAPyB")}</h4>
                <li>
                    <ul><a href="https://apyb.python.org.br/" target="_blank">APyB</a></ul>
                    <ul><a href="https://apyb.python.org.br/pythonbrasil/cdc/" target="_blank">{t("footer.codigoDeConduta")}</a></ul>
                    {/* <ul>{t("footer.formulario")}</ul> */}
                    {/* <ul>Dormeles Tremea / Jean Ferri</ul> */}
                </li>
            </div>
            <div className="Footer_links_botoes_politicas">
                <div className="Footer_links_botoes_politicas_buttons">                    
                    <button><a href="https://ingressos.python.org.br/pybr/" target="_blank">{t("footer.comprarIngressos")}</a></button>
                    <button><a href={t("buttonPrincipal.linkPlanoDePatrocinio")} target="_blank">{t("footer.planoDePatrocinio")}</a></button>
                </div>
                {/* <h4>{t("footer.politicasDePrivacidade")}</h4> */}
            </div>
        </div>
    </footer>)
}