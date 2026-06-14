import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectinxSix.css'; // Fayl nomingizga moslang

// Rasmlarni to'g'ridan-to'g'ri import qilamiz
import ege1 from './image/ege1.png';
import ege2 from './image/ege_2.png';
import ege3 from './image/ege_3.png';
import ege4 from './image/ege_4.png';

const SectionSix = () => {
  const { t } = useTranslation();
  
  // Rasmlar massivi
  const images = [ege1, ege2, ege3, ege4];

  return (
    <section id="sectionSix" className="gallery-section">
      {/* Matnlar va boshqa qismlar... */}
      
      <div className="gallery-right">
        {images.map((img, index) => (
          <div key={index} className="img-card">
            <img src={img} alt={`Gallery ${index + 1}`} />
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