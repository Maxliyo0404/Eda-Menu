import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Header() {
    const [t, i18n] = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState  (false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleChangeLanguage = (event) =>{
        i18n.changeLanguage(event.target.value)
    };
  return (
   
  )
}

export default Header