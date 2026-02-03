import FaqQuestion from "./FaqQuestion"
import "./styles/Faq.css"
import { useTranslation } from "react-i18next";

type FaqItem = {
    pergunta: string;
    resposta: string;
};

export default function Faq() {
    const { t } = useTranslation();

    const perguntas = t("faq.perguntas",
        {returnObjects : true}
    ) as FaqItem[];
    
    return(<>
        <section className="Faq">
            <h3>{t("faq.perguntasFrequentes")}</h3>

            <div className="Faq_itens">
                {perguntas.map((item, index) => (
                    <FaqQuestion
                        key={index}
                        pergunta={item.pergunta}
                        resposta={item.resposta}
                    />
                ))}
            </div>
        </section>
    </>)
}