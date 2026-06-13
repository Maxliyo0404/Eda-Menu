import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import hero_e from "./image/hero_e.png";

function Hero() {
    const [t, i18n] = useTranslation();
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text-content">
          <span className="hero-badge">{t("hero.mini_title")}</span>
          <h1 className="hero-main-title">{t("hero.title")}</h1>
          <p className="hero-description">{t("hero.desc")}</p>
          <button className="hero-action-btn">{t("hero.btn")}</button>
        </div>
        
        <div className="hero-visual">
          <div className="circle-bg"></div>
          <div className="circle-bg-inner"></div>
          <img src={hero_e} alt="Food" className="hero-plate" />
          <span className="scroll-text">SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default Hero