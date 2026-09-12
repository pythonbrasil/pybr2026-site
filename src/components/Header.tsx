import "./styles/Header.css"
import "./styles/Menu.css"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import icone_acima_do_menu from "/img/components/header/icone_acima_do_menu.png"
import logo from "/img/components/header/logo.svg"
import logo_menu from "/img/components/menu/Logo.svg"
import X_menu from "/img/components/menu/X.svg"
import surf_menu from "/img/components/menu/surf.svg"
import { LINK_COMPRAR_INGRESSO } from "../links"

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [linguaSelecionada, setLinguaSelecionada] = useState("br")
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const srollToSelectedId = (id : string) => {
        setIsModalOpen(false);

        navigate("/");

        setTimeout(() => {
            document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (<header className="Header">
        <div className="Header_itens">
            <div className="Header_menu_esquerdo">
                <li>
                    <ul>
                        <div>
                            <img src={icone_acima_do_menu} alt="" onClick={() => setIsModalOpen(true)}/>
                            <h4 onClick={() => setIsModalOpen(true)}>MENU</h4>


                            <div className={`Menu ${isModalOpen ? "aberto" : ""}`}>
                                <div className="Menu_itens">
                                    <div className="Menu_itens_botoes">
                                        <div className="Menu_itens_botoes_linha1">
                                            <img src={logo_menu} alt="" />
                                            <div className="Menu_itens_botoes_linha1_fechar">
                                                <img src={X_menu} alt="" onClick={() => setIsModalOpen(false)}/>
                                                <p>{t("header.menu.fechar")}</p>
                                            </div>
                                        </div>
                                        <div className="Menu_itens_botoes_linha2">
                                            <Link to='/' onClick={() => setIsModalOpen(false)}>{t("header.menu.inicio")}</Link>
                                            <Link to="/atividades" onClick={() => setIsModalOpen(false)}>ATIVIDADES</Link>
                                            <Link to="/" onClick={() => srollToSelectedId("KEYNOTES")}>KEYNOTES</Link>
                                            {/* <Link to="/programacao" onClick={() => setIsModalOpen(false)}>{t("header.menu.programacao")}</Link> */}
                                            <Link to="/" onClick={() => srollToSelectedId("GUIA_DA_CIDADE")}>{t("header.menu.guiaDaCidade")}</Link>
                                            <Link to="/" onClick={() => srollToSelectedId("PATROCINADORES")}>{t("header.menu.patrocinadores")}</Link>
                                            <Link to="/perguntas_frequentes" onClick={() => setIsModalOpen(false)}>FAQ</Link>
                                            <Link to="/" onClick={() => srollToSelectedId("CONTATO_footer")}>{t("header.menu.contato")}</Link>
                                        </div>
                                        <div className="Menu_itens_botoes_linha3">
                                            <a href={LINK_COMPRAR_INGRESSO} target="_blank">
                                                <button>{t("header.menu.ComprarIngresso")}</button>
                                            </a>
                                            <a href={t("buttonPrincipal.linkPlanoDePatrocinio")} target="_blank">
                                                <button>{t("header.menu.planoDePatrocinio")}</button>
                                            </a>
                                        </div>
                                        <img src={surf_menu} alt="" className="Menu_itens_surfista_menu_mobile"/>
                                    </div>
                                    <img src={surf_menu} alt="" className="Menu_itens_surfista menu_desktop"/>
                                </div>
                            </div>


                        </div>
                    </ul>
                    <ul className="Header_menu_desktop"><Link to="/" onClick={() => srollToSelectedId("O_EVENTO")}>{t("header.OEvento")}</Link></ul>
                    {/* <ul>
                        <Link to={'/atividades'}>
                            {t("header.text1")}
                        </Link>
                    </ul> LINK QUE LEVA PRAS ATIVIDADES */}
                    <ul className="Header_menu_desktop">
                        <Link to="/" onClick={() => srollToSelectedId("KEYNOTES")}>KEYNOTES</Link>
                    </ul>
                    {/* <Link to="/programacao"><ul className="Header_menu_desktop">{t("header.Programacao")}</ul></Link> */}
                    {/* <Link to="/"><ul className="Header_menu_desktop">{t("header.Programacao")}</ul></Link> */}
                </li>
            </div>
            <div className="Header_logo Header_menu_desktop_logo">
                <Link to='/'><img src={logo} alt="LOGO" /></Link>
            </div>
            <div className="Header_menu_direito">
                <div className="Header_linguagem">
                    <li>
                        <ul className={`${linguaSelecionada === "br" ? "lingua_selecionada" : ""}`}
                            onClick={() => {i18n.changeLanguage("br"); setLinguaSelecionada("br")}}>
                                BR
                        </ul>
                        <ul className={`${linguaSelecionada === "en" ? "lingua_selecionada" : ""}`}
                            onClick={() => {i18n.changeLanguage("en"); setLinguaSelecionada("en")}}>
                                EN
                        </ul>
                        <ul className={`${linguaSelecionada === "es" ? "lingua_selecionada" : ""}`}
                            onClick={() => {i18n.changeLanguage("es"); setLinguaSelecionada("es")}}>
                                ES
                        </ul>
                    </li>
                </div>
                <a href={LINK_COMPRAR_INGRESSO} target="_blank">
                    <button>{t("header.ComprarIngresso")}</button>
                </a>
            </div>
        </div>
        <div className="Header_logo Header_menu_mobile">
            <img src={logo} alt="LOGO" />
        </div>
    </header>)
}