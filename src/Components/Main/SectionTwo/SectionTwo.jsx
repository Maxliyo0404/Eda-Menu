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
  { id: 2, cat: 'pizza', img: sous },
  { id: 3, cat: 'burger', img:lavash },
  { id: 4, cat: 'doner', img: sous_1 },
  { id: 5, cat: 'shashlik', img: pitsa },
  { id: 6, cat: 'pizza', img: lav_1 },
  { id: 7, cat: 'burger', img:lav_2  },
  { id: 8, cat: 'doner', img: gamburger },
  { id: 9, cat: 'shashlik', img: lav_3  },
  { id: 10, cat: 'pizza', img: lav_4  },
  { id: 11, cat: 'burger', img: sous },
  { id: 12, cat: 'doner', img: sous_1 }
];

const SectionTwo = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.cat === filter);

  return (
    <section id="sectionTwo" className="menu-section">
      <h2 className="menu-title">{t("sectionTwo.title")}</h2>

      <div className="filter-buttons">
        {['all', 'shashlik', 'pizza', 'burger', 'doner'].map(cat => (
          <button 
            key={cat} 
            className={filter === cat ? 'active' : ''} 
            onClick={() => setFilter(cat)}
          >
            {t(`sectionTwo.${cat}`)}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.img} alt={t("sectionTwo.dishName")} />
            <h3>{t("sectionTwo.dishName")}</h3>
            <p className="price">$12.00</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;