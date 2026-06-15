import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './SectionOne.css';
import shash from "./image/shash.png";
import pitsa from "./image/pitsa.png";
import gamburger from "./image/gamburger.png";
import sous from "./image/sous.png";


const dishes = [
  { id: 1, key: "sectionOne.dish1", price: "12.00", img: shash },
  { id: 2, key: "sectionOne.dish1", price: "12.00", img: pitsa },
  { id: 3, key: "sectionOne.dish1", price: "12.00", img: gamburger },
  { id: 4, key: "sectionOne.dish1", price: "12.00", img: sous }
];

const SectionOne = () => {
  const { t, i18n } = useTranslation();

 return (
    <section className="section">
      <div className="container">
      <div className="section-wrapper">
        <div className="header-row">
          <h2 className="titlee">{t("sectionOne.popular")}</h2>
          <div className="custom-nav">
            <button className="prev-btn">{"<"}</button>
            <button className="next-btn">{">"}</button>
          </div>
        </div>

       
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <img src={dish.img} alt={t(dish.key)} className="dish-img" />
              <h3 className="dish-name">{t(dish.key)}</h3>
              <div className="stars">★★★★☆</div>
              <p className="price">${dish.price}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOne;