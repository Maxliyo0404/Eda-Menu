import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './SectionOne.css';

const dishes = [
  { id: 1, key: "dish1", price: "12.00" },
  { id: 2, key: "dish1", price: "12.00" },
  { id: 3, key: "dish1", price: "12.00" },
  { id: 4, key: "dish1", price: "12.00" }
];

const SectionOne = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container">
      <div className="header-row">
        <h2 className="title">{t("popular")}</h2>
        <div className="custom-nav">
          <button className="prev-btn">{"<"}</button>
          <button className="next-btn">{">"}</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
        spaceBetween={20}
        slidesPerView={4}
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="dish-card">
              <img src="image_d007e3.png" alt="dish" className="dish-img" />
              {/* Rasmda ko'rganingizdek aynan shu text chiqadi */}
              <h3 className="dish-name">{t(dish.key)}</h3>
              <div className="stars">★★★★☆</div>
              <p className="price">${dish.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default SectionOne;