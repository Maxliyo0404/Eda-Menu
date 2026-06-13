import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionOne.css'; // Yuqoridagi CSS faylni ulash

const dishes = [
  { id: 1, key: "dish1", price: "12.00", img: "image_d007e3.png" },
  { id: 2, key: "dish2", price: "12.00", img: "image_d007e3.png" },
  { id: 3, key: "dish3", price: "12.00", img: "image_d007e3.png" },
  { id: 4, key: "dish4", price: "12.00", img: "image_d007e3.png" }
];

const SectionOne = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container">
      <div className="header-row">
        <h2 className="title">{t("popular")}</h2>
      </div>

      <div className="cards-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.img} alt="dish" className="dish-img" />
            <h3 className="dish-name">{t(dish.key)}</h3>
            <div className="stars">★★★★☆</div>
            <p className="price">${dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOne;