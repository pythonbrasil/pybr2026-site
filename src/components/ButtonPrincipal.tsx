import './styles/ButtonPrincipal.css'
import { useTranslation } from "react-i18next";

export default function ButtonPrincipal() {
    const { t } = useTranslation();

    return(
    <div className='ButtonPrincipal'>
        <div className='ButtonPrincipal_itens'>
            <a href="https://pybr2026.eventbrite.com.br/" target='_blank'>
                <h4>{t("buttonPrincipal.ingressos")}</h4>
            </a>
            <a href={t("buttonPrincipal.linkPlanoDePatrocinio")} target='_blank'>
                <h4>{t("buttonPrincipal.planoDePatrocinio")}</h4>
            </a>
        </div>
    </div>
    )
}