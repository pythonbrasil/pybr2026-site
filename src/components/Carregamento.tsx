import './styles/Carregamento.css'
import img from "/img/components/carregamento/cobra_loading.svg"

export default function Carregamento() {
    return (<>
        <div className='Carregamento'>
            <img src={img} alt="" />
            <h4>Carregando...</h4>
        </div>
    </>)
}