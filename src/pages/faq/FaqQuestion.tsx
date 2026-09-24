import "./styles/FaqQuestion.css"
import seta from './styles/seta.svg'
import { useState } from 'react';

type FaqQuestionProps = {
    pergunta : string,
    resposta : string
};

export default function FaqQuestion({ pergunta , resposta } : FaqQuestionProps) {
    const [isFaqOpen, setIsFaqOpen] = useState(false);
    function renderResposta(text: string) {
        if (!text) return null;
        const lines = text.split(/\r?\n/);
        const result: any[] = [];
        let listBuffer: string[] = [];
        let keyCounter = 0;

        const parseInline = (s: string) => {
            const parts: any[] = [];
            let lastIndex = 0;
            const re = /\[\[([^\|\]]+)\|([^\]]+)\]\]/g;
            let m: RegExpExecArray | null;
            let idx = 0;
            while ((m = re.exec(s)) !== null) {
                if (m.index > lastIndex) {
                    parts.push(s.substring(lastIndex, m.index));
                }
                const target = m[1];
                const label = m[2];
                if (target === 'programacao') {
                    parts.push(
                        <a key={`a-${idx++}`} className="faq-link" href="/programacao" target="_blank" rel="noopener noreferrer">{label}</a>
                    );
                } else {
                    parts.push(
                        <a key={`a-${idx++}`} className="faq-link" href={target} target="_blank" rel="noopener noreferrer">{label}</a>
                    );
                }
                lastIndex = re.lastIndex;
            }
            if (lastIndex < s.length) parts.push(s.substring(lastIndex));
            return parts.map((p, i) => typeof p === 'string' ? <span key={`t-${i}`}>{p}</span> : p);
        };

        const flushList = () => {
            if (listBuffer.length === 0) return;
            result.push(
                <ul className="faq-list" style={{paddingLeft: '40px'}} key={`list-${keyCounter++}`}>
                    {listBuffer.map((li, i) => (
                        <li className="faq-list-item" style={{listStyleType: 'disc'}} key={`li-${i}`}>
                            {parseInline(li)}
                        </li>
                    ))}
                </ul>
            );
            listBuffer = [];
        };

        for (const raw of lines) {
            const line = raw.trim();
            if (!line) {
                flushList();
                continue;
            }

            const m = line.match(/^[-*•]\s+(.*)$/);
            if (m) {
                listBuffer.push(m[1]);
            } else {
                flushList();
                result.push(<p key={`p-${keyCounter++}`}>{parseInline(line)}</p>);
            }
        }

        flushList();
        return <div className="FaqQuestion_resposta">{result}</div>;
    }

    return(<>
            <div 
                className={`FaqQuestion ${isFaqOpen ? "open" : ""}`}
                onClick={() => setIsFaqOpen(prev => !prev)}>
                <div className="FaqQuestion_pergunta">
                    <h5>{pergunta}</h5>
                    <img src={seta} alt="" />
                </div>
                <p>{renderResposta(resposta)}</p>
            </div>
    </>)
}