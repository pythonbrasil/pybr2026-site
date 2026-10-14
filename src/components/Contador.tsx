import "./styles/Contador.css";

export default function Contador() {
    return (
        <div className="contador" id="contador-home">
            <div className="contador_itens">
                <div className="tempo">
                    <span>00</span>
                    <p>dias</p>
                </div>
                <div className="separador">:</div>
                <div className="tempo">
                    <span>00</span>
                    <p>horas</p>
                </div>
                <div className="separador">:</div>
                <div className="tempo">
                    <span>00</span>
                    <p>mins</p>
                </div>
                <div className="separador">:</div>
                <div className="tempo">
                    <span>00</span>
                    <p>segs</p>
                </div>
            </div>
        </div>
    );
}
