import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionFour.css';
import olov from './image/olov.png'; 

const SectionFour = () => {
  const { t, i18n } = useTranslation();
  const posts = t("sectionFour.posts", { returnObjects: true });

  return (
    <section id="sectionFour" className="news-section">
      <p className="subtitle">{t("sectionFour.subtitle")}</p>
      <h2 className="title">{t("sectionFour.title")}</h2>
      
      <div className="news-container">
        {posts.map((post, index) => (
          <div key={index} className="news-card">
            <img src={olov} alt="news" />
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <div className="card-footer">
                <span className="read-more">{post.readMore}</span>
                <span className="date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">{t("sectionFour.btnViewMore")}</button>
    </section>
  );
};

export default SectionFour;