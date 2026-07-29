import "./slide.css"
import logo_github from "/img/page/home/section3/logo_github.png"
import logo_globinho from "/img/page/home/section3/logo_globinho.png"
import logo_ig from "/img/page/home/section3/logo_ig.png"
import logo_linkdin from "/img/page/home/section3/logo_linkdin.png"

export default function Slide({
            name, biography, foto, githubUrl="",
            instagramUrl="", linkedinUrl="", siteUrl=""
        } : any
    ) {
        return(
            <>
                <div className="Home_Sectine3_carrossel_card_keynote">
                    <div className="Home_Section3_carrossel_card_keynote_parte_esquerda">
                        <img src={foto} alt="foto do keynote" />
                        <li>
                            <a href={linkedinUrl}><ul><img src={logo_linkdin} alt="" /></ul></a>
                            <a href={githubUrl}><ul><img src={logo_github} alt="" /></ul></a>
                            <a href={instagramUrl}><ul><img src={logo_ig} alt="" /></ul></a>
                            <a href={siteUrl}><ul><img src={logo_globinho} alt="" /></ul></a>
                        </li>
                    </div>
                    <div className="Home_Section3_carrossel_card_keynote_parte_direita">
                        <h4>{name}</h4>
                        <p>{biography}</p>
                    </div>
                </div>
            </>
        )
}