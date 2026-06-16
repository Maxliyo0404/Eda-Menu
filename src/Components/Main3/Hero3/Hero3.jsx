import { useTranslation } from "react-i18next";
import "./Hero3.css";
import React from 'react'
import olov from "./image/olov.png";

function Hero3() {
    const {t} = useTranslation();
    const blogCards = Array(9).fill(null);
  return (
    <div className="hero3">
        <div className="container">
            <div className="hero3-info">

            </div>
        </div>
    </div>
  )
}

export default Hero3