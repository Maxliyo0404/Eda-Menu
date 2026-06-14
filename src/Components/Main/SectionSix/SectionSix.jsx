import React from 'react';
import { useTranslation } from 'react-i18next';
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
      <div className="gallery-left">
        <p className="subtitle">{t("sectionSix.subtitle")}</p>
        <h2 className="title">{t("sectionSix.title")}</h2>
        <p className="desc">{t("sectionSix.desc")}</p>
        <button className="view-all">{t("sectionSix.btnViewMore")}</button>
      </div>

      <div className="gallery-right">
        {images.map((img, index) => (
          <div key={index} className="img-card">
            <img src={img} alt={`Gallery ${index + 1}`} />
            <div className="overlay">
               <span className="icon">📷</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;