import "./SponsorsExibition.css"
import { useTranslation } from "react-i18next";
import cobra_topo from '/Sponsors/cobra_topo.png'
import cobra_baixo from '/Sponsors/cobra_baixo.png'
import SponsorsInfo from '../../../config/SponsorsInfos.yaml?raw';
import { parse } from "yaml";

const Sponsors = parse(SponsorsInfo).AllSponsors;
type Lang = 'br' | 'en' | 'es'

export const SponsorsExibition = () => {
    const { t , i18n } = useTranslation();
    const lang = i18n.language as Lang
    const numberLang = {
        br: 0,
        en: 1,
        es: 2
    }[lang];

    return(
        <section className="Home_Section7" id="PATROCINADORES">
            <img src={cobra_topo} alt="" className="Home_Section7_cobra_topo"/>
            <div className="Home_Section7_grupo_de_patrocinadores">
                <h4>{t("home.section7.patrocinadores")}</h4>
        
                {Sponsors.map((nivel : any) => (
                    <div className="Home_Section7_patrocinadores">
                        <div className="Home_Section7_patrocinadores_bandeira">
                            <div className="Home_Section7_patrocinadores_bandeira_linha"></div>
                            <img src={nivel.flag} alt="" />
                        </div>
                        <h5>{nivel.name[numberLang][lang]}</h5>
                        <div className="Home_Section7_patrocinadores_logos">
                            {nivel.sponsors.map((sponsor : any) => (
                                <img src={sponsor.img} alt={sponsor.name} />
                            ))}
                        </div>
                    </div>
                ))}
    
                <div className="Home_Section7_patrocinadores_bandeira_linha ultima_linha"></div>
                
            </div>
            <img src={cobra_baixo} alt="" className="Home_Section7_cobra_baixo"/>
        </section>
    )
}