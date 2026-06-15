import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Hero2.css";

const Hero2 = () => {
  const { t, i18n } = useTranslation();
  const categories = t("news.categories", { returnObjects: true });
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="news-section">
      <aside className="news-sidebar">
        <h2>{t("news.title")}</h2>
        <div className="news-filters">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={active === cat ? 'active' : ''} 
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      <main className="news-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="news-card">
            <div className="news-img"></div>
            <h3>Barbecue Shish kebab Shashlik Skewer</h3>
            <p className="news-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="read-more">{t("news.readMore")}</button>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Hero2;