import "./EventLocals.css"
import { useState } from "react";
import hotel from '/img/page/home/section6/hotel.png'
import { useTranslation } from "react-i18next";

const LocalDosTutoriais = () => {
    const { t } = useTranslation();
    const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(false);
    const uni = "https://i.ytimg.com/vi/0Qaay9pdK6c/maxresdefault.jpg"

    const handleTutorialInscricaoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsTutorialModalOpen(true);
    };

    return (
            <div className="Home_Section6_localizacao_cards_Palestras localizacao">
                <h6>{t("home.section6.tutoriais")}</h6>
                <h5>Centro Universitário CESUSC - UNICESUSC</h5>
                <small>Em parceria com o curso de Análise e Desenvolvimento de Sistemas do UNICESUSC</small>
                <p className="Home_Section6_localizacao_cards_Palestras_data">{t("home.section6.tutoriaisData")}</p>
                <img src={uni} alt="" />
                <p>{t("home.section6.paragrafo2")}</p>
                <div className="Home_Section6_localizacao_cards_Palestras_buttons localizacao_buttons">
                    <a href="https://www.google.com/maps/place/UNICESUSC+(Sede+SC+401)/data=!4m2!3m1!1s0x0:0xb067ed420bbae02b?sa=X&ved=1t:2428&ictx=111" target="blank">
                        <button className="mapa">{t("home.section6.verNoMapa")}</button>
                    </a>
                    <a href="https://ingressos.python.org.br/pybr/2026/" target="blank" onClick={handleTutorialInscricaoClick}>
                        <button type="button" className="inscrition">{t("home.section6.inscricoes")}</button>
                    </a>
                </div>

                {isTutorialModalOpen && (
                    <div className="tutorials_modal_overlay" onClick={() => setIsTutorialModalOpen(false)}>
                        <div className="tutorials_modal" onClick={(event) => event.stopPropagation()}>
                            <button
                                type="button"
                                className="tutorials_modal_close"
                                onClick={() => setIsTutorialModalOpen(false)}
                                aria-label="Fechar aviso"
                            >
                                ×
                            </button>
                            <span className="tutorials_modal_tag">{t("home.section6.tutoriais")}</span>
                            <h3>{t("home.section6.tutoriaisModalTitle")}</h3>
                            <p>{t("home.section6.tutoriaisModalText1")}</p>
                            <p>{t("home.section6.tutoriaisModalText2")}</p>
                            <button type="button" className="tutorials_modal_button" onClick={() => setIsTutorialModalOpen(false)}>
                                {t("home.section6.tutoriaisModalButton")}
                            </button>
                        </div>
                    </div>
                )}
            </div>
    )
}

const LocalDasPalestras = () => {
    const { t } = useTranslation();
    return (
            <div className="Home_Section6_localizacao_cards_Palestras localizacao">
                <h6>{t("home.section6.palestras")}</h6>
                <h5>Oceania Park Hotel Spa & Convention Center</h5>
                <p className="Home_Section6_localizacao_cards_Palestras_data" style={{ marginBottom: '38px' }}>{t("home.section6.palestrasData")}</p>
                <img src={hotel} alt="" />
                <p>{t("home.section6.paragrafo1")}</p>
                <div className="Home_Section6_localizacao_cards_Palestras_buttons localizacao_buttons">
                    <a href="https://www.google.com/maps/place/Oceania+Park+Hotel+Spa+%26+Convention+Center/data=!4m2!3m1!1s0x9527420740c91677:0x232385519d3577c4?sa=X&ved=1t:242&ictx=111" target="blank">
                        <button className="mapa">{t("home.section6.verNoMapa")}</button>
                    </a>
                    <a href="https://ingressos.python.org.br/pybr/2026/" target="blank">
                        <button className="inscrition">{t("home.section6.inscricoes")}</button>
                    </a>
                </div>
            </div>
    )
}

const LocalDasSprints = () => {
    const { t } = useTranslation();
    return (
            <div className="Home_Section6_localizacao_cards_Palestras ">
                <h6>Sprints</h6>
                <h5>HostGator Brasil</h5>
                <p className="Home_Section6_localizacao_cards_Palestras_data" style={{ marginBottom: '38px' }}>{t("home.section6.sprintData")}</p>
                <img src="https://i.imgur.com/VbtgfOd.jpeg" alt="" />
                <p>{t("home.section6.paragrafo3")}</p>
                <div className="Home_Section6_localizacao_cards_Palestras_buttons localizacao_buttons">
                    <a href="https://www.google.com/maps/place/HostGator+Brasil/@-27.5842809,-48.5245406,17z/data=!3m1!4b1!4m6!3m5!1s0x9527385c31053fed:0x599d9668b51c844a!8m2!3d-27.5842809!4d-48.5245406!16s%2Fg%2F11s49m63wq?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D" target="blank">
                        <button className="mapa">{t("home.section6.verNoMapa")}</button>
                    </a>
                    <a href="https://forms.gle/XqRqfPFD4AoCQHNa6" target="blank">
                        <button className="inscrition">{t("home.section6.inscricoes")}</button>
                    </a>
                </div>

            </div>
    )
}

export function EventLocals() {
    const { t } = useTranslation();
    
    return(<>
    <section className="Home_Section6">
            <h4>{t("home.section6.localizacao")}</h4>
            <div className="Home_Section6_localizacao_cards">
                <LocalDosTutoriais/>
                <LocalDasPalestras/>
                <LocalDasSprints/>
            </div>
            
    </section>
    <div className="Home_Section6_barra_verde"></div>
    </>)
}