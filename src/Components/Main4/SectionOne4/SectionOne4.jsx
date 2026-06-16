import React from 'react';
import { useTranslation } from "react-i18next";
import "./SectionOne4.css";

function SectionOne4() {
  const { t } = useTranslation();

  // IT Akademiya lokatsiyasi (Toshkent koordinatasi misolida)
  const lat = 41.311081;
  const lon = 69.240562;
  
  // OpenStreetMap interaktiv iframe xaritasi
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01}%2C${lat-0.005}%2C${lon+0.01}%2C${lat+0.005}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <div className="sectionOne4">
      <div className="container">
        
        {/* Maketdagi markaziy sarlavha */}
        <h2 className="section-one-title">
          {t("sectionOne4.title") || "Find Us By Card"}
        </h2>

        {/* Xarita konteyneri */}
        <div className="map-wrapper">
          
          {/* Jonli va interaktiv xarita */}
          <iframe
            title="Academy Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={mapUrl}
            className="interactive-map"
          ></iframe>

          {/* Maketdagi qizil lokatsiya markeri va pulsatsiya effekti */}
          <div className="custom-marker-overlay">
            <div className="marker-pulse"></div>
            <div className="marker-dot">
              <span className="marker-icon">📍</span>
            </div>
            
            {/* Lokatsiya ustiga borganda chiquvchi kichik tooltip */}
            <div className="marker-tooltip">
              <h4>{t("sectionOne4.academyName")}</h4>
              <p>{t("sectionOne4.academyAddress")}</p>
            </div>
          </div>

          {/* Maketning o'ng tarafidagi zoom (+/-) boshqaruv paneli */}
          <div className="map-custom-controls">
            <button className="control-btn" onClick={() => alert('Zoom in')}>+</button>
            <div className="control-slider-line">
              <div className="slider-thumb"></div>
            </div>
            <button className="control-btn" onClick={() => alert('Zoom out')}>-</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SectionOne4;