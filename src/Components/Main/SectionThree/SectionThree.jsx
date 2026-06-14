import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionThree.css';

const SectionThree = () => {
  const { t, i18n } = useTranslation();
  const cards = t("sectionThree.cards", { returnObjects: true });

  return (
    <section id="sectionThree" className="testimonial-section">
      <div className="container">
        <p className="subtitle">{t("sectionThree.subtitle")}</p>
        <h2 className="title">{t("sectionThree.title")}</h2>

        <div className="testimonial-grid">
          {cards.map((card, index) => (
            <div key={index} className="testimonial-card">
              <h3>{card.name}</h3>
              <p className="text">{card.text}</p>
              <div className="meta">
                <span>📅 14/06/2026</span>
                <span>💬 114</span>
                <span>👁️ 220</span>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation">
          <button className="nav-btn">{"<"}</button>
          <button className="nav-btn active">{">"}</button>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;