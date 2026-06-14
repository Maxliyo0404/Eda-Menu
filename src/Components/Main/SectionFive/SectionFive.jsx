import React from 'react';
import './SectionFive.css';

const SectionFive = () => {
  // Bu yerda videoni ID sini o'zgartirishingiz mumkin
  const videoId = "k4tDq397Sfk"; 

  return (
    <section id="sectionFive" className="video-section">
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
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