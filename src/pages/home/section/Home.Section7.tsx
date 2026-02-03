import "../styles/Home.Section7.css"
import { useTranslation } from "react-i18next";
import cobra_topo from '/img/page/home/section7/cobra_topo.png'
import cobra_baixo from '/img/page/home/section7/cobra_baixo.png'
import bandeira_ouro from '/img/page/home/section7/patrocinador/ouro/bandeira_ouro.png'
import elastic from '/img/page/home/section7/patrocinador/ouro/elastic.png'
import nicbr from '/img/page/home/section7/patrocinador/ouro/nicbr.png'
import bandeira_prata from '/img/page/home/section7/patrocinador/prata/bandeira_prata.png'
import cafe from '/img/page/home/section7/patrocinador/prata/cafe.png'
import cerc from '/img/page/home/section7/patrocinador/prata/cerc.png'
import pydantic from '/img/page/home/section7/patrocinador/prata/pydantic.png'
import bandeira_bronze from '/img/page/home/section7/patrocinador/bronze/bandeira_bronze.png'
import alurap from '/img/page/home/section7/patrocinador/bronze/alurap.png'
import PSF from '/img/page/home/section7/patrocinador/bronze/PSF.png'
import shape from '/img/page/home/section7/patrocinador/bronze/shape.png'
import simples from '/img/page/home/section7/patrocinador/bronze/simples.png'
import Garoa from '/img/page/home/section7/comunidade/Garoa.png'
import Plone from '/img/page/home/section7/comunidade/Plone.png'
import Reprograma from '/img/page/home/section7/comunidade/Reprograma.png'
import aws from '/img/page/home/section7/apoiador/aws.png'
import crio from '/img/page/home/section7/apoiador/crio.png'
import impacta from '/img/page/home/section7/apoiador/impacta.png'
import oracle from '/img/page/home/section7/apoiador/oracle.png'


export default function Home_Section6() {
    const { t } = useTranslation();

    return(<>
    <section className="Home_Section7" id="PATROCINADORES">
        <img src={cobra_topo} alt="" className="Home_Section7_cobra_topo"/>
        <div className="Home_Section7_grupo_de_patrocinadores">
            <h4>{t("home.section7.patrocinadores")}</h4>
            <div className="Home_Section7_patrocinadores">
                <div className="Home_Section7_patrocinadores_bandeira">
                    <div className="Home_Section7_patrocinadores_bandeira_linha"></div>
                    <img src={bandeira_ouro} alt="" />
                </div>
                <h5>{t("home.section7.ouro")}</h5>
                <div className="Home_Section7_patrocinadores_logos patrocinadores_ouro">
                    <img src={elastic} alt="" />
                    <img src={nicbr} alt="" />
                </div>
            </div>

            <div className="Home_Section7_patrocinadores">
                <div className="Home_Section7_patrocinadores_bandeira">
                    <div className="Home_Section7_patrocinadores_bandeira_linha"></div>
                    <img src={bandeira_prata} alt="" />
                </div>
                <h5>{t("home.section7.prata")}</h5>
                <div className="Home_Section7_patrocinadores_logos">
                    <img src={cafe} alt="" />
                    <img src={cerc} alt="" />
                    <img src={pydantic} alt="" />
                </div>
            </div>

            <div className="Home_Section7_patrocinadores">
                <div className="Home_Section7_patrocinadores_bandeira">
                    <div className="Home_Section7_patrocinadores_bandeira_linha"></div>
                    <img src={bandeira_bronze} alt="" />
                </div>
                <h5>{t("home.section7.bronze")}</h5>
                <div className="Home_Section7_patrocinadores_logos">
                    <img src={alurap} alt="" />
                    <img src={PSF} alt="" />
                    <img src={shape} alt="" />
                    <img src={simples} alt="" />
                </div>
            </div>

            <div className="Home_Section7_patrocinadores">
                <div className="Home_Section7_patrocinadores_bandeira">
                    <div className="Home_Section7_patrocinadores_bandeira_linha"></div>
                    <div className="Home_Section7_patrocinadores_bandeira_linha_espacamento"></div>
                </div>
                <h5>{t("home.section7.apoiador")}</h5>
                <div className="Home_Section7_patrocinadores_logos">
                    <img src={aws} alt="" />
                    <img src={crio} alt="" />
                    <img src={impacta} alt="" />
                    <img src={oracle} alt="" />
                </div>
            </div>

            <div className="Home_Section7_patrocinadores">
                <div className="Home_Section7_patrocinadores_bandeira">
                    <div className="Home_Section7_patrocinadores_bandeira_linha"></div>
                    <div className="Home_Section7_patrocinadores_bandeira_linha_espacamento"></div>
                </div>
                <h5>{t("home.section7.comunidade")}</h5>
                <div className="Home_Section7_patrocinadores_logos">
                    <img src={Garoa} alt="" />
                    <img src={Plone} alt="" />
                    <img src={Reprograma} alt="" />
                </div>
            </div>

            <div className="Home_Section7_patrocinadores_bandeira_linha ultima_linha"></div>
            
        </div>
        <img src={cobra_baixo} alt="" className="Home_Section7_cobra_baixo"/>
    </section>
    </>)
}