import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logos_1 from "./image/logos_1.png"; // Logotip yo'lingizni to'g'rilang

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    alert(`Email ${email} yuborildi!`); // Bu yerda API-ga so'rov jo'natasiz
  };

  return (
    <footer className="footer-wrapper">
      <div className="newsletter-box">
        <p className="mini-title">{t("footer.newsletter")}</p>
        <h2>{t("footer.subTitle")}</h2>
        <p>{t("footer.desc")}</p>
        <form onSubmit={handleSubscribe} className="subscribe-form">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("footer.placeholder")} 
            required
          />
          <button type="submit">{t("footer.btn")}</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-col">
          <h3>{t("footer.contact")}</h3>
          <p>{t("footer.address")}</p>
          <p>+1 212-244-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        <div className="footer-col logo-col">
          <img src={logos_1} alt="Logo" />
          <p>"The best way to find yourself is to lose yourself in the service of others."</p>
          <div className="socials">
            <FaFacebookF /> <FaTwitter /> <FaInstagram />
          </div>
        </div>
        <div className="footer-col">
          <h3>{t("footer.hours")}</h3>
          <p>{t("footer.weekdays")}</p>
          <p>{t("footer.weekend")}</p>
        </div>
      </div>
      <div className="copyright">{t("footer.rights")}</div>
    </footer>
  );
};
export default Footer;