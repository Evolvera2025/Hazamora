import React, { useState, useEffect } from 'react';
import '../../public/styles/galeria.css'; // Importar los estilos CSS
import HazamoraLogoWhite from '../../public/img/LOGO HAZAMORA BLANCO-03.png';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imagenes = [
    { src: 'foto1.JPG', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Grecia Castellanos' },
    { src: 'foto2.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
    { src: 'foto3.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Grecia Castellanos' },
    { src: 'foto4.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
    { src: 'foto5.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
    { src: 'foto6.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Daina Gómez' },
    { src: 'foto7.png', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
    { src: 'foto8.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Grecia Castellanos' },
    { src: 'foto9.jpg', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Daina Gómez' },
    { src: 'foto10.png', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
    { src: 'foto11.png', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
    { src: 'LOGO HAZAMORA VERDE-03.png', ig: 'https://www.instagram.com/hazamora.agencia?igsh=Nzg4bTkyNjl0Zndt', photographer: 'Hazamora' },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [imagenes.length, isPaused]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Reanudar después de 6 segundos
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <div className="gallery-main" id="nosotras">
      {/* Iconos flotantes decorativos */}
      <div className="gallery-decorations">
            <div className="gallery-decoration gallery-decoration-1"></div>
            <div className="gallery-decoration gallery-decoration-2"></div>
            <div className="gallery-decoration gallery-decoration-3"></div>
            <div className="gallery-decoration gallery-decoration-4"></div>
          </div>
      <div className="gallery-title-container">
        <h2 className="gallery-title">Conócenos</h2>
        <p className="gallery-subtitle">Descubre a nuestro equipo creativo</p>
      </div>
      
      <div className="gallery-container">
        {imagenes.map((img, index) => (
          <div
            key={index}
            className={`image-item ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url('../../public/img/${img.src}')` }}
            onClick={() => handleImageClick(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`image-overlay ${index === activeIndex ? 'visible' : ''}`}>
              <div className="overlay-info">
                <h3 className="overlay-title">{img.title}</h3>
                <p className="overlay-photographer">Por {img.photographer}</p>
                <a 
                  href={img.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-instagram"
                  onClick={(e) => e.stopPropagation()}
                >
                  @hazamora.com
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="indicators-container">
        {imagenes.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;