import "./styles/slide.css"
import foto_key_1 from "/img/page/home/section3/foto_key_1.png"
import logo_github from "/img/page/home/section3/logo_github.png"
import logo_globinho from "/img/page/home/section3/logo_globinho.png"
import logo_ig from "/img/page/home/section3/logo_ig.png"
import logo_linkdin from "/img/page/home/section3/logo_linkdin.png"

export default function Slide() {
    return(<>
<div className="Home_Sectine3_carrossel_card_keynote">
<div className="Home_Section3_carrossel_card_keynote_parte_esquerda">
    <img src={foto_key_1} alt="foto do keynote" />
    <li>
        <a href=""><ul><img src={logo_linkdin} alt="" /></ul></a>
        <a href=""><ul><img src={logo_github} alt="" /></ul></a>
        <a href=""><ul><img src={logo_ig} alt="" /></ul></a>
        <a href=""><ul><img src={logo_globinho} alt="" /></ul></a>
    </li>
</div>
<div className="Home_Section3_carrossel_card_keynote_parte_direita">
    <h4>Fernanda Wanderley</h4>
    <p>Fernanda é formada em Ciência da Computação e Mestre em Inteligência Artificial pela UFRJ, Doutora em Inteligência Computacional pela UFMG e Google Developer Expert em Machine Learning.</p>
    <p>É co-fundadora da Mulheres em IA, embaixadora do WiDS Rio de Janeiro e colaboradora de longa data da PrograMaria. Acredita que é na diversidade que construímos tecnologias mais justas e com maior impacto social</p>
</div>
</div>
    </>)
}