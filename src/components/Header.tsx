import "./styles/Header.css"
import "./styles/Menu.css"
import { useState } from 'react';
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import icone_acima_do_menu from "/img/components/header/icone_acima_do_menu.png"
import logo from "/img/components/header/logo.svg"
import logo_menu from "/img/components/menu/Logo.svg"
import X_menu from "/img/components/menu/X.svg"
import surf_menu from "/img/components/menu/surf.svg"

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [linguaSelecionada, setLinguaSelecionada] = useState("br")
    const { t, i18n } = useTranslation();

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
                                            <Link to='/'><a href="#HOME" onClick={() => setIsModalOpen(false)}>{t("header.menu.inicio")}</a></Link>
                                            <a href="#O_EVENTO" onClick={() => setIsModalOpen(false)}>{t("header.menu.oEvento")}</a>
                                            <a href="#KEYNOTES" onClick={() => setIsModalOpen(false)}>KEYNOTES</a>
                                            <Link to="/programacao" onClick={() => setIsModalOpen(false)}>{t("header.menu.programacao")}</Link>
                                            <a href="#GUIA_DA_CIDADE" onClick={() => setIsModalOpen(false)}>{t("header.menu.guiaDaCidade")}</a>
                                            <a href="#PATROCINADORES" onClick={() => setIsModalOpen(false)}>{t("header.menu.patrocinadores")}</a>
                                            <Link to="/perguntas_frequentes" onClick={() => setIsModalOpen(false)}>FAQ</Link>
                                            <a href="#CONTATO_footer" onClick={() => setIsModalOpen(false)}>{t("header.menu.contato")}</a>
                                        </div>
                                        <div className="Menu_itens_botoes_linha3">
                                            <a href="">
                                                <button>{t("header.menu.ComprarIngresso")}</button>
                                            </a>
                                            <a href="">
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
                    <ul className="Header_menu_desktop"><a href="#O_EVENTO">{t("header.OEvento")}</a></ul>
                    <ul className="Header_menu_desktop"><a href="#KEYNOTES">Keynotes</a></ul>
                    {/* <Link to="/programacao"><ul className="Header_menu_desktop">{t("header.Programacao")}</ul></Link> */}
                    <Link to="/"><ul className="Header_menu_desktop">{t("header.Programacao")}</ul></Link>
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
                <button>{t("header.ComprarIngresso")}</button>
            </div>
        </div>
        <div className="Header_logo Header_menu_mobile">
            <img src={logo} alt="LOGO" />
        </div>
    </header>)
}