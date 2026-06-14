import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SectionTwo.css';


const menuItems = [
  { id: 1, cat: 'shashlik', img: '/images/1.png' },
  { id: 2, cat: 'pizza', img: '/images/2.png' },
  { id: 3, cat: 'burger', img: '/images/3.png' },
  { id: 4, cat: 'doner', img: '/images/4.png' },
  { id: 5, cat: 'shashlik', img: '/images/5.png' },
  { id: 6, cat: 'pizza', img: '/images/6.png' },
  { id: 7, cat: 'burger', img: '/images/7.png' },
  { id: 8, cat: 'doner', img: '/images/8.png' },
  { id: 9, cat: 'shashlik', img: '/images/9.png' },
  { id: 10, cat: 'pizza', img: '/images/10.png' },
  { id: 11, cat: 'burger', img: '/images/11.png' },
  { id: 12, cat: 'doner', img: '/images/12.png' }
];

const SectionTwo = () => {
  const { t } = useTranslation();
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