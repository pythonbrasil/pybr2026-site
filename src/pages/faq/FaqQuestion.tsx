import "./styles/FaqQuestion.css"
import seta from './styles/seta.svg'
import { useState } from 'react';

type FaqQuestionProps = {
    pergunta : string,
    resposta : string
};

export default function FaqQuestion({ pergunta , resposta } : FaqQuestionProps) {
    const [isFaqOpen, setIsFaqOpen] = useState(false);

    return(<>
            <div 
                className={`FaqQuestion ${isFaqOpen ? "open" : ""}`}
                onClick={() => setIsFaqOpen(prev => !prev)}>
                <div className="FaqQuestion_pergunta">
                    <h5>{pergunta}</h5>
                    <img src={seta} alt="" />
                </div>
                <p>{resposta}</p>
            </div>
    </>)
}