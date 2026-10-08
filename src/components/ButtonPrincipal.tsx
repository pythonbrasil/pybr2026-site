import './styles/ButtonPrincipal.css'
import { useTranslation } from "react-i18next";
import { LINK_COMPRAR_INGRESSO , LINK_FORMULARIO_CDC , LINK_PRETIX } from "../links"

export default function ButtonPrincipal() {
    const { t } = useTranslation();
    const pathname = window.location.pathname;

    const mostrarPretix = pathname === '/programacao';

    return(
    <div className='ButtonPrincipal'>
        {mostrarPretix ? (
            <div className='ButtonPrincipal_itens'>
                <a href={LINK_PRETIX} target='_blank'>
                    <h4>Ver no Pretix</h4>
                </a>
            </div>
        ) : (
            <div className='ButtonPrincipal_itens'>
                <a href={LINK_COMPRAR_INGRESSO} target='_blank'>
                    <h4>{t("buttonPrincipal.ingressos")}</h4>
                </a>
                <a href={LINK_FORMULARIO_CDC} target='_blank'>
                    <h4>{t("buttonPrincipal.acionarCDC")}</h4>
                </a>
            </div>
        )}
    </div>
    )
}