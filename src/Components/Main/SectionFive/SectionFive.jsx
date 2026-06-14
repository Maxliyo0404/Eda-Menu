import React from 'react';
import './SectionFive.css';

const SectionFive = () => {
  // Bu video restoranlar uchun mos (sifatli klip)
  const videoId = "k4tDq397Sfk"; 

  return (
    <section id="sectionFive" className="video-section">
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="Restaurant Promotional Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SectionFive;