import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import i18next from "i18next";
import logos_1 from "./image/logos_1.png";
function Header() {
    const {t, i18n} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleChangeLanguage = (event) =>{
        i18n.changeLanguage(event.target.value)
    };
  return (
      <div className="header">
   <div className="container">
     <div className="header-container">
          <a className="logo" href="#"><img src={logos_1} alt="rasm" /></a>
              <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
             <ul className="header-list">
                  <li><Link className="header-link" to="/menu">{t("header.menu")}</Link></li>
                  <li><Link className="header-link" to="/news">{t("header.news")}</Link></li>
                  <li><Link className="header-link" to="/about">{t("header.about")}</Link></li>
                 <li><Link className="header-link" to="career" onClick={(e)=> e.preventDefault()}>{t("header.contact us")}</Link></li>
                 <button type="submit" className="header-btn">{t("header.header-btn")}</button>
             </ul>
             <div className="header-actions">
                 <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
                   <option value="uz">Uz</option>
                   <option value="en">Eng</option>
                   <option value="ru"> Rus</option>
                 </select>
               </div>
        </nav>
   <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
     <span></span>
     <span></span>
     <span></span>
   </div>
     </div>
   </div>
    </div>
  )
}

export default Header