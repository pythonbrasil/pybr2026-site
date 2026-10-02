import "./styles/Programacao.css"
import Carrossel from '../../components/Carrossel'
import { useTranslation } from "react-i18next";
import { PainelDaProgramacao } from "../../components/PainelDaProgramacao";

export const Programacao = (
    {counterCat} : any
) => {
    const { t } = useTranslation();
    return(
        <>
            <section className="Programacao">
                <h3>{t("header.Programacao")}</h3>
                <Carrossel/>
            </section>
            <PainelDaProgramacao counterCat={counterCat}/>
            <div className="Programacao_margim_baixo"></div>
        </>
    )
}