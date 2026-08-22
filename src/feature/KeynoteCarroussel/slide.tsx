import "./slide.css"
import logo_github from "./assets/logo_github.png"
import logo_globinho from "./assets/logo_globinho.png"
import logo_ig from "./assets/logo_ig.png"
import logo_linkdin from "./assets/logo_linkdin.png"

export default function Slide({
            name, biography, foto, githubUrl="",
            instagramUrl="", linkedinUrl="", siteUrl=""
        } : any
    ) {
        const socialLinks = [
            { url: linkedinUrl, icon: logo_linkdin, alt: 'LinkedIn' },
            { url: githubUrl, icon: logo_github, alt: 'GitHub' },
            { url: instagramUrl, icon: logo_ig, alt: 'Instagram' },
            { url: siteUrl, icon: logo_globinho, alt: 'Site' },
        ].filter(({ url }) => Boolean(url && url.trim()));

        return(
            <>
                <div className="Home_Sectine3_carrossel_card_keynote keynotes">
                    <div className="Home_Section3_carrossel_card_keynote_parte_esquerda">
                        <div className="Home_Section3_carrossel_card_keynote_parte_esquerda_foto_keynote">
                            <img src={foto} alt="foto do keynote"/>
                        </div>
                        {socialLinks.length > 0 && (
                            <li>
                                {socialLinks.map(({ url, icon, alt }) => (
                                    <a key={alt} href={url} target="_blank" rel="noreferrer">
                                        <ul><img src={icon} alt={alt} /></ul>
                                    </a>
                                ))}
                            </li>
                        )}
                    </div>
                    <div className="Home_Section3_carrossel_card_keynote_parte_direita">
                        <h4>{name}</h4>
                        <p dangerouslySetInnerHTML={{ __html: biography }} />
                    </div>
                </div>
            </>
        )
}