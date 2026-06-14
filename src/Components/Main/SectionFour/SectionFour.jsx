import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionFour.css';
import olov  from "./image/olov.png"


const SectionFour = () => {
  const { t } = useTranslation();
  const posts = [1, 2, 3]; 

  return (
    <section id="sectionFour" className="news-section">
      <div className="container">
        <p className="subtitle">{t("sectionFour.subtitle")}</p>
        <h2 className="title">{t("sectionFour.title")}</h2>

        <div className="news-grid">
          {posts.map((_, index) => (
            <div key={index} className="news-card">
              <div className="img-placeholder">
        
                 <img src={olov} alt="News" />
              </div>
              <h3>{t("sectionFour.posts.0.title")}</h3>
              <p className="desc">{t("sectionFour.posts.0.desc")}</p>
              <div className="card-footer">
                <a href="#" className="read-more">{t("sectionFour.posts.0.readMore")}</a>
                <span className="date">{t("sectionFour.posts.0.date")}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="view-more-btn">{t("sectionFour.btnViewMore")}</button>
      </div>
    </section>
  );
};

export default SectionFour;