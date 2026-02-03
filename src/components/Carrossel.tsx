import "./styles/Carrossel.css";
import mini_logo from "/mini_logo_pybr_carrossel.png";
import { useTranslation } from "react-i18next";

export default function Home_Section1() {
  const { t } = useTranslation();

  return (
    <div className="carrossel-wrapper">
      <div className="carrossel-track">
        <div className="Carrossel">
          <p>{t("carrossel.pelaComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.paraComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.pelaComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.paraComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.pelaComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.paraComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.pelaComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.paraComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.pelaComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.paraComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.pelaComunidade")}</p>
          <img src={mini_logo} alt="" />
          <p>{t("carrossel.paraComunidade")}</p>
          <img src={mini_logo} alt="" />
        </div>
      </div>
    </div>
  );
}
