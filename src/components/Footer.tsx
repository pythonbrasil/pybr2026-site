import "./styles/Footer.css"
import logo from "/img/components/footer/logo.png"
import { useTranslation } from "react-i18next";
import { LINK_COMPRAR_INGRESSO } from "../links"

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
                    <a href="https://2026.pythonbrasil.org.br/#contador-home"><ul>{t("footer.inicio")}</ul></a>
                    <a href="https://2026.pythonbrasil.org.br/#O_EVENTO"><ul>{t("footer.oEvento")}</ul></a>
                    <a href="https://2026.pythonbrasil.org.br/#SUBMISSAO_DE_ATIVIDADES"><ul>{t("footer.submissaoDeAtividades")}</ul></a>
                    {/* <a href=""><ul>Keynotes</ul></a> */}
                    {/* <a href=""><ul>{t("footer.programacao")}</ul></a> */}
                    {/* <a href=""><ul>{t("footer.guiaDaCidade")}</ul></a> */}
                    {/* <a href=""><ul>{t("footer.patrocinadores")}</ul></a> */}
                    {/* <a href=""><ul>FAQ</ul></a> */}
                    {/* <a href=""><ul>{t("footer.contato")}</ul></a> */}
                    {/* <a href=""><ul>{t("footer.inscrevaSe")}</ul></a> */}
                </li>
            </div>
            <div className="Footer_links_nossas_redes">
                <h4>{t("footer.nossasRedes")}</h4>
                <li>
                    <a href="https://www.instagram.com/pythonbrasil/"><ul>Instagram</ul></a>
                    <a href="https://www.linkedin.com/company/apyb/"><ul>Linkedin</ul></a>
                    <a href="https://www.facebook.com/pythonbrasil/"><ul>Facebook</ul></a>
                    <a href="https://x.com/pythonbrasil"><ul>X</ul></a>
                    <a href="https://bsky.app/profile/pythonbrasil.bsky.social"><ul>Bluesky</ul></a>
                    <a href="https://www.youtube.com/@pythonbrasiloficial"><ul>Youtube</ul></a>
                    <a href="mailto:brasil@python.org.br"><ul>E-mail</ul></a>
                    <a href="https://www.flickr.com/photos/pythonbrasil/"><ul>Flickr</ul></a>
                    {/* <a href=""><ul>Telegram</ul></a> */}
                </li>
            </div>
            <div className="Footer_links_da_apyb">
                <h4>{t("footer.linksDaAPyB")}</h4>
                <li>
                    <a href=""><ul>APyB</ul></a>
                    <a href="https://www.python.org.br/codigo-de-conduta/"><ul>{t("footer.codigoDeConduta")}</ul></a>
                    {/* <a href=""><ul>{t("footer.formulario")}</ul></a> */}
                    {/* <a href=""><ul>Dormeles Tremea / Jean Ferri</ul></a> */}
                </li>
            </div>
            <div className="Footer_links_botoes_politicas">
                <div className="Footer_links_botoes_politicas_buttons">
                    <button><a href={LINK_COMPRAR_INGRESSO} target="_blank">{t("footer.comprarIngressos")}</a></button>
                    <button><a href={t("buttonPrincipal.linkPlanoDePatrocinio")} target="_blank">{t("footer.planoDePatrocinio")}</a></button>
                </div>
                {/* <h4>{t("footer.politicasDePrivacidade")}</h4> */}
            </div>
        </div>
    </footer>)
}