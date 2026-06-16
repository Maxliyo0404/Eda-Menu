import { useTranslation } from "react-i18next";
import "./Hero3.css";
import React from 'react'
import olov from "./image/olov.png";

function Hero3() {
    const {t} = useTranslation();
    const blogCards = Array(9).fill(null);
  return (
    <div className="hero3">
        <div className="container">
          <div className="hero3-header">
          <h2 className="hero3-main-title">{t("hero3.title") || "News"}</h2>
          <p className="hero3-subtitle">{t("hero3.subtitle") || "Blogs"}</p>
        </div>

        {/* 9 ta Kartochkadan iborat Grid */}
        <div className="hero3-grid">
          {blogCards.map((_, index) => (
            <div className="hero3-card" key={index}>
              <div className="hero3-img-wrapper">
                <img src={olov} alt="Blog image" className="hero3-img" />
              </div>
              <div className="hero3-card-body">
                <h3 className="hero3-card-title">
                  {t("hero3.cardTitle") || "Tips For Prepping And Caring For Your Grill"}
                </h3>
                <p className="hero3-card-desc">
                  {t("hero3.cardDesc") || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                </p>
                <div className="hero3-card-footer">
                  <button className="hero3-readmore-btn">
                    {t("hero3.readMore") || "Read More"}
                  </button>
                  <span className="hero3-date">12 Apr 2021</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero3-footer">
          <button className="hero3-viewmore-btn">
            {t("hero3.viewMore") || "View More"}
          </button>
        </div>
        </div>
    </div>
  )
}

export default Hero3