import "./styles/Programacao.css"
import PainelDaProgramacao from '../../components/PainelDaProgramacao'
import Carrossel from '../../components/Carrossel'

export default function Programacao() {
    return(<>
        <section className="Programacao">
            <h3>Programação em preparação</h3>
            <Carrossel/>
        </section>
        <PainelDaProgramacao/>
        <div className="Programacao_margim_baixo"></div>
    </>)
}