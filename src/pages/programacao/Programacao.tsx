import "./styles/Programacao.css"
import PainelDaProgramacao from '../../components/PainelDaProgramacao'
import Carrossel from '../../components/Carrossel'
import { useTranslation } from "react-i18next";

export default function Programacao() {
    const { t } = useTranslation();
    return(
        <>
            <section className="Programacao">
                <h3>{t("header.Programacao")}</h3>
                <Carrossel/>
            </section>
            <PainelDaProgramacao/>
            <div className="Programacao_margim_baixo"></div>
        </>
    )
}