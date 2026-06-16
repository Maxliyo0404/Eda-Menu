import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';
import './SectionSix.css';
import ege1 from './image/ege1.png';
import ege2 from './image/ege_2.png';
import ege3 from './image/ege_3.png';
import ege4 from './image/ege_4.png';

const SectionSix = () => {
  const { t } = useTranslation();
  const images = [ege1, ege2, ege3, ege4];

  return (
    <section id="sectionSix" className="gallery-section">
      {/* Figma bo'yicha markazlashtiruvchi asosiy container */}
      <div className="gallery-container">
        
        {/* CHAP PANEL: Ma'lumotlar */}
        <div className="gallery-left">
          <p className="subtitle">{t("sectionSix.subtitle") || "Instagram"}</p>
          <h2 className="title">{t("sectionSix.title") || "Photo Gallery"}</h2>
          <p className="desc">
            {t("sectionSix.desc") || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."}
          </p>
          <button className="view-all">{t("sectionSix.btnViewMore") || "View More"}</button>
        </div>

        {/* O'NG PANEL: Rasmlar oqimi (Slider) */}
        <div className="gallery-right">
          {images.map((img, index) => (
            <div key={index} className="img-card">
              <img src={img} alt={`Gallery ${index + 1}`} />
              <div className="overlay">
                <FaInstagram className="icon" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionSix;