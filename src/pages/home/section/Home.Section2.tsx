import "../styles/Home.Section2.css"
import foto from "/foto_section2.png"
import cobra_esquerda_section2 from "/cobra_esquerda_section2.png"
import cobra_direita_section2 from "/cobra_direita_section2.png"
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export default function Home_Section2() {
    const { t } = useTranslation();

    return(<section className="Home_Section2" id="O_EVENTO">
        <div className="Home_Section2_parte_esquerda">
            <img src={foto} alt="" />
        </div>
        <div className="Home_Section2_parte_direita">
            <div className="Home_Section2_parte_direita_texto">
                <p>
                    <Trans i18nKey="home.section2.paragrafo1">
                        A <span>Python Brasil 2026</span> é a maior conferência sobre linguagem de programação Python do Brasil e da América Latina.
                    </Trans>
                </p>
                <p>{t("home.section2.paragrafo2")}</p>
                <p>
                    <Trans i18nKey="home.section2.paragrafo3">
                        A edição de 2026 está sendo organizada pela comunidade Python de <span>Florianópolis/SC</span> com o apoio da APyB (Associação Python Brasil)
                    </Trans>
                </p>
            </div>
            <div className="Home_Section2_parte_direita_cobrinhas">
                <img src={cobra_esquerda_section2} alt="" />
                <img src={cobra_direita_section2} alt="" />
            </div>
        </div>
    </section>)
}