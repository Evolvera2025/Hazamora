import React, { useState, useEffect } from 'react';
import '../../public/styles/galeria.css'; // Importar los estilos CSS

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imagenes = [
    { src: 'foto1.JPG', ig: 'https://instagram.com/integrante1', title: 'Araña', photographer: 'María García' },
    { src: 'foto2.jpg', ig: 'https://instagram.com/integrante2', title: 'Búho', photographer: 'Carlos López' },
    { src: 'foto3.jpg', ig: 'https://instagram.com/integrante3', title: 'Elefante', photographer: 'Ana Martínez' },
    { src: 'foto4.jpg', ig: 'https://instagram.com/integrante4', title: 'Gato', photographer: 'Luis Rodríguez' },
    { src: 'foto5.jpg', ig: 'https://instagram.com/integrante5', title: 'Tigre', photographer: 'Sofia Hernández' },
    { src: 'foto6.jpg', ig: 'https://instagram.com/integrante6', title: 'Café', photographer: 'Diego Ruiz' },
    { src: 'concierto.jpg', ig: 'https://instagram.com/integrante7', title: 'Concierto', photographer: 'Elena Morales' },
    { src: 'aurora.jpg', ig: 'https://instagram.com/integrante8', title: 'Aurora', photographer: 'Miguel Castro' },
    { src: 'paisaje.jpg', ig: 'https://instagram.com/integrante9', title: 'Paisaje', photographer: 'Laura Jiménez' },
    { src: 'retrato.jpg', ig: 'https://instagram.com/integrante10', title: 'Retrato', photographer: 'Pablo Vega' },
    { src: 'retrato.jpg', ig: 'https://instagram.com/integrante10', title: 'Retrato', photographer: 'Pablo Vega' },
    { src: 'retrato.jpg', ig: 'https://instagram.com/integrante10', title: 'Retrato', photographer: 'Pablo Vega' },
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