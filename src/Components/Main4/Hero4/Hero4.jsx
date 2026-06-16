import { useTranslation } from "react-i18next";
import "./Hero4.css";
import React from 'react'

function Hero4() {
    const {t} = useTranslation();
  return (
    <div className="hero4">
        <div className="container">
            <div className="hero4-info"></div>
        </div>
    </div>
  )
}

export default Hero4