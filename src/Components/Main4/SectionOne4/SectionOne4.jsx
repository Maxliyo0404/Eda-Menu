import React from 'react';
import { useTranslation } from "react-i18next";
import "./SectionOne4.css";

function SectionOne4() {
  const { t } = useTranslation();
  const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3637346853655!2d69.240562!3d41.311081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzM5LjkiTiA2OcKwMTQnMjYuMCJF!5e0!3m2!1suz!2sub!4v1718567890123!5m2!1suz!2sub";

  return (
    <div className="sectionOne4">
      <div className="container">
        <h2 className="section-one-title">
          {t("sectionOne4.title") || "Find Us By Card"}
        </h2>
        <div className="map-wrapper">
          <iframe
            title="Google Map IT Academy"
            src={googleMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="google-iframe-map"
          ></iframe>
          <div className="map-pulse-zone">
            <div className="pulse-circle"></div>
          </div>
          <div className="map-custom-controls">
            <button className="control-btn">+</button>
            <div className="control-slider-line">
              <div className="slider-thumb"></div>
            </div>
            <button className="control-btn">-</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SectionOne4;