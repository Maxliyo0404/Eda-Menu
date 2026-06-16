import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logos_1 from "./image/logos_1.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    // Til tanlangandan keyin menyu avtomatik yopilishi uchun (ixtiyoriy)
    setIsMenuOpen(false); 
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          
          <a className="logo" href="#" onClick={() => setIsMenuOpen(false)}>
            <img src={logos_1} alt="logo" />
          </a>

          {/* Navigatsiya menyusi */}
          <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
            <ul className="header-list">
              <li>
                <Link className="header-link" to="/menu" onClick={toggleMenu}>
                  {t("header.menu")}
                </Link>
              </li>
              <li>
                <Link className="header-link" to="/news" onClick={toggleMenu}>
                  {t("header.news")}
                </Link>
              </li>
              <li>
                <Link className="header-link" to="/about" onClick={toggleMenu}>
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link className="header-link" to="/contact" onClick={toggleMenu}>
                  {t("header.contact us")}
                </Link>
              </li>
              <li>
                <button type="button" className="header-btn">
                  {t("header.header-btn")}
                </button>
              </li>
              
              {/* Mobil versiyada til tanlash ro'yxatning oxiriga tushishi uchun qulay */}
              <li className="mobile-only-actions">
                <select className="select mobile-select" onChange={handleChangeLanguage} value={i18n.language}>
                  <option value="uz">Uz</option>
                  <option value="en">Eng</option>
                  <option value="ru">Rus</option>
                </select>
              </li>
            </ul>
          </nav>

          {/* Faqat kompyuter/planshet ekranlar uchun til tanlash paneli */}
          <div className="header-actions desktop-only-actions">
            <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
              <option value="uz">Uz</option>
              <option value="en">Eng</option>
              <option value="ru">Rus</option>
            </select>
          </div>

          {/* Burger Menu tugmasi */}
          <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;