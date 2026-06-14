import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionSix.css';

import img1 from './image/food1.jpg';
import img2 from './image/food2.jpg';
import img3 from './image/food3.jpg';
import img4 from './image/food4.jpg';

const SectionSix = () => {
  const { t } = useTranslation();
  const images = [img1, img2, img3, img4];

  return (
    <section id="sectionGallery" className="gallery-section">
      <div className="gallery-left">
        <p className="subtitle">{t("gallery.subtitle")}</p>
        <h2 className="title">{t("gallery.title")}</h2>
        <p className="desc">{t("gallery.description")}</p>
        <button className="view-btn">{t("gallery.btn")}</button>
      </div>
      
      <div className="gallery-right">
        {images.map((img, index) => (
          <div key={index} className="img-card">
            <img src={img} alt={`Gallery ${index}`} />
            <div className="overlay">
               <span className="icon">📸</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;