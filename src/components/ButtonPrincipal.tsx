import './styles/ButtonPrincipal.css'
import { useTranslation } from "react-i18next";
import { LINK_COMPRAR_INGRESSO } from "../links"

export default function ButtonPrincipal() {
    const { t } = useTranslation();

    return(
    <div className='ButtonPrincipal'>
        <div className='ButtonPrincipal_itens'>
            <a href={LINK_COMPRAR_INGRESSO} target='_blank'>
                <h4>{t("buttonPrincipal.ingressos")}</h4>
            </a>
            <a href={t("buttonPrincipal.linkPlanoDePatrocinio")} target='_blank'>
                <h4>{t("buttonPrincipal.planoDePatrocinio")}</h4>
            </a>
        </div>
    </div>
    )
}