import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./Hero4.css";

function Hero4() {
  const { t } = useTranslation();

  // Formadagi inputlar uchun state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Telegram botga xabar yuborish
  const sendMessage = (event) => {
    event.preventDefault();
    
    const token = `8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4`;
    const chat_id = 647264939;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const SendContent = `🔔 *Yangi xabar keldi!*\n\n` +
                        `👤 *Ism:* ${formData.name}\n` +
                        `📞 *Tel:* ${formData.phone}\n` +
                        `📧 *Email:* ${formData.email || "Kiritilmagan"}\n` +
                        `📌 *Mavzu:* ${formData.subject || "Kiritilmagan"}\n` +
                        `📝 *Xabar:* ${formData.message}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: SendContent,
        parse_mode: "Markdown"
      }
    })
    .then(() => {
      alert(t("hero4.successAlert") || "Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.log(error);
      alert(t("hero4.errorAlert") || "Something went wrong.");
    });
  };

  return (
    <section className="hero4-section">
      <div className="container">
        
        {/* Sarlavha va uning tagidagi kichik qizil chiziq */}
        <div className="contact-header">
          <h2 className="contact-main-title">{t("hero4.contactTitle") || "Contact Us"}</h2>
          <div className="title-bottom-line"></div>
        </div>

        <div className="contact-grid">
          
          {/* Chap tomon: Figma maketidagi aloqa kartochkalari */}
          <div className="contact-sidebar">
            
            <div className="sidebar-item">
              <div className="icon-circle">📞</div>
              <div className="info-text">
                <h4>Phone Number</h4>
                <p>+1 212-344-1230</p>
              </div>
            </div>

            <div className="sidebar-item">
              <div className="icon-circle">✉️</div>
              <div className="info-text">
                <h4>Email Address</h4>
                <p>naturefresh@gmail.com</p>
              </div>
            </div>

            <div className="sidebar-item">
              <div className="icon-circle">📸</div>
              <div className="info-text">
                <h4>Instagram</h4>
                <p>naturefresh</p>
              </div>
            </div>

            <div className="sidebar-item">
              <div className="icon-circle">🐦</div>
              <div className="info-text">
                <h4>Twitter</h4>
                <p>naturefresh</p>
              </div>
            </div>

            <div className="sidebar-item">
              <div className="icon-circle">👤</div>
              <div className="info-text">
                <h4>Facebook</h4>
                <p>naturefresh</p>
              </div>
            </div>

          </div>

          {/* O'ng tomon: Send Message formasi */}
          <div className="contact-form-box">
            <h3 className="form-title">{t("hero4.sendTitle") || "Send Message"}</h3>
            <p className="form-description">
              {t("hero4.sendDesc") || "If you have any questions, you can send us an SMS or contact us by phone you can also contact us via social networks."}
            </p>

            <form onSubmit={sendMessage} className="form-inputs">
              <div className="inputs-row">
                <input 
                  type="text" 
                  name="name"
                  placeholder={t("hero4.placeholderName") || "Your name"} 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder={t("hero4.placeholderEmail") || "Email address"} 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="inputs-row">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder={t("hero4.placeholderPhone") || "Phone number"} 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="text" 
                  name="subject"
                  placeholder={t("hero4.placeholderSubject") || "Subject"} 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <textarea 
                name="message"
                rows="5" 
                placeholder={t("hero4.placeholderMessage") || "Message"}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit" className="form-btn">
                {t("hero4.btnSend") || "Send message"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero4;