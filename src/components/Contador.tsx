import { useEffect, useState } from "react";
import "./styles/Contador.css";

export default function Contador() {
    const targetDate = new Date("October 15, 2026 00:00:00").getTime();

    const [tempo, setTempo] = useState({
        dias: "000",
        horas: "00",
        minutos: "00",
        segundos: "00",
    });

    useEffect(() => {
        const interval = setInterval(() => {
        const agora = Date.now();
        const distancia = targetDate - agora;

        if (distancia <= 0) {
            setTempo({
                dias: "000",
                horas: "00",
                minutos: "00",
                segundos: "00",
            });
            clearInterval(interval);
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((distancia / (1000 * 60)) % 60);
        const segundos = Math.floor((distancia / 1000) % 60);

        setTempo({
            dias: String(dias).padStart(3, "0"),
            horas: String(horas).padStart(2, "0"),
            minutos: String(minutos).padStart(2, "0"),
            segundos: String(segundos).padStart(2, "0"),
        }); }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="contador">
            <div className="contador_itens">
                <div className="tempo">
                    <span>{tempo.dias}</span>
                    <p>dias</p>
                </div>
                <div className="separador">:</div>
                <div className="tempo">
                    <span>{tempo.horas}</span>
                    <p>horas</p>
                </div>
                <div className="separador">:</div>
                <div className="tempo">
                    <span>{tempo.minutos}</span>
                    <p>mins</p>
                </div>
                <div className="separador">:</div>
                <div className="tempo">
                    <span>{tempo.segundos}</span>
                    <p>segs</p>
                </div>
            </div>
        </div>
    );
}
