import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SectionTwo.css';
import shash from "./image/shash.png";
import pitsa from "./image/pitsa.png";
import gamburger from "./image/gamburger.png";
import sous from "./image/sous.png";
import lavash from "./image/lavash.png";
import sous_1 from "./image/sous_1.png";
import lav_1  from "./image/lav_1.png";
import lav_2  from "./image/lav_2.png";
import lav_3  from "./image/lav_3.png";
import lav_4  from "./image/lav_4.png";

const menuItems = [
  { id: 1, cat: 'shashlik', img: shash },
  { id: 2, cat: 'pizza', img: pitsa },
  { id: 3, cat: 'burger', img: lavash },
  { id: 4, cat: 'doner', img: sous_1 },
  { id: 5, cat: 'pizza', img: sous },
  { id: 6, cat: 'pizza', img: lav_1 },
  { id: 7, cat: 'burger', img: lav_2  },
  { id: 8, cat: 'doner', img: gamburger },
  { id: 9, cat: 'shashlik', img: lav_3  },
  { id: 10, cat: 'pizza', img: lav_4  },
  { id: 11, cat: 'burger', img: sous },
  { id: 12, cat: 'doner', img: sous_1 }
];

const SectionTwo = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const filterCategories = [
    { key: 'all', label: 'All' },
    { key: 'shawarma', label: 'Shawarma' },
    { key: 'turk', label: 'Turk Kebab' },
    { key: 'burger', label: 'Hamburger Kebab' },
    { key: 'doner', label: 'Doner Kebab' },
    { key: 'shashlik', label: 'Shish Kebab' },
    { key: 'pizza', label: 'French Fries Pizza' },
    { key: 'desserts', label: 'Desserts' }
  ];
  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.cat === filter);

  return (
    <section id="sectionTwo" className="section-two-menu">
      <h2 className="two-menu-title">{t("news.title") || "Our Regular Menu Pack"}</h2>
      <div className="two-filter-buttons">
        {filterCategories.map(cat => (
          <button 
            key={cat.key} 
            className={filter === cat.key ? 'active' : ''} 
            onClick={() => setFilter(cat.key)}
          >
            {t(`sectionTwo.${cat.key}`) || cat.label}
          </button>
        ))}
      </div>
      <div className="two-menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="two-menu-card">
            <div className="two-card-img-wrapper">
              <img src={item.img} alt={t("news.productName")} />
            </div>
            <h3>{t("news.productName") || "Barbecue Shish-kebab Shashlik Skewer"}</h3>
            <p className="two-price">{t("news.productPrice") || "$12.00"}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;