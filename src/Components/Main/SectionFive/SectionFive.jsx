import React from 'react';
import './SectionFive.css';

const SectionFive = () => {
  // YouTube video ID sini o'zgartiring (video URL dagi v=... qismidan keyingi belgilarni oling)
  const videoId = "your-video-id-here"; 

  return (
    <section id="sectionFive" className="video-section">
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SectionFive;