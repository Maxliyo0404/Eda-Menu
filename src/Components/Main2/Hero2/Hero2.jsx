import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Hero2.css";
import shash from "./image/shash.png"; // 1. FIGMADAN OLGAN RASMINGIZNI SHU YERDA IMPORT QILING

const Hero2 = () => {
  const { t } = useTranslation();
  
  // SIZNING JSON'INGIZGA MOS: "news.categories" kaliti ishlatildi
  const categories = t("news.categories", { returnObjects: true }) || [];
  
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    // Agar categories massiv bo'lsa va ichida elementi bo'lsa, birinchisini aktiv qilamiz
    if (Array.isArray(categories) && categories.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  // Agar categories kelmay qolsa yoki massiv bo'lmasa, xato bermasligi uchun tekshirish
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: '#bd1c3c' }}>
        Kategoriyalar yuklanmoqda yoki JSON faylda "news.categories" topilmadi...
      </div>
    );
  }

  const cardsArray = Array(10).fill(null);

  return (
    <section className="menu-section">
      <div className="menu-container">
        
        {/* CHAP TARAF: Kategoriya paneli */}
        <div className="menu-sidebar">
          {/* Agar sarlavha ham news ichida bo'lsa "news.title" qiling, bo'lmasa o'z holicha qolsin */}
          <h2 className="sidebar-title">{t("news.title") || "Our Regular Menu Pack"}</h2>
          <div className="categories-list">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* O'NG TARAF: Mahsulotlar gridi */}
        <div className="menu-grid">
          {cardsArray.map((_, index) => (
            <div className="product-card" key={index}>
              <div className="product-img-wrapper">
                {/* 2. SIZ IMPORT QILGAN RASM {shashlikImg} SHU YERGA QO'YILDI */}
                <img 
                  src={shash} 
                  alt={t("news.productName") || "Product"} 
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{t("news.productName") || "Barbecue Grilled Shish Chicken Kebab"}</h3>
                <p className="product-price">{t("news.productPrice") || "$12.00"}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero2;