import React, { useState, useEffect } from 'react';
import '../../public/styles/Hero.css'
export const Hero = () => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => {
      clearTimeout(timer);
    };
  }
);


  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section" id="inicio">
      {/* Fondo con gradiente animado */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="hero-container">
        {/* Contenido Principal */}
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-text-container">
            <div className="text-line line-1">
              <span className="text-reveal">Somos</span>
            </div>
            <div className="text-line line-2">
              <span className="text-reveal">una agencia de</span>
            </div>
            <div className="text-line line-3">
              <h1 className="text-reveal gradient-text delay-3">
                Marketing Digital y Diseño
              </h1>
            </div>
          </div>

          <div className="description-container">
            <p className="description-text">
              enfocada en impulsar tu proyecto
            </p>
            <p className="description-text">
              combinando <span className="highlight">estrategia y creatividad</span>
            </p>
            <p className="description-final">
              <strong>para hacer de tus ideas, una realidad.</strong>
            </p>
          </div>

          {/* Botón CTA */}
          <div className="cta-container">
            <button className="cta-button" onClick={scrollToContact}>
              <span>Comenzar Proyecto</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Sección Visual */}
        <div className="hero-visual">
          <div className="phone-container">
            <img 
              className="img-phone" 
              src="/img/Telefono.png" 
              alt="teléfono mostrando Instagram"
            />
            {/* Indicador de imagen activa */}
            <div className="image-indicator">
              <div className="indicator-dot active"></div>
            </div>
          </div>
          
          {/* Iconos flotantes mejorados */}
          <div className="floating-icons">
            <div className="icon-container icon-bulb">
              <img src="/img/Bombilla1.png" alt="bombilla" />
              <div className="icon-glow"></div>
            </div>
            <div className="icon-container icon-star">
              <img src="/img/estrella.png" alt="estrella" />
              <div className="icon-glow"></div>
            </div>
            <div className="icon-container icon-message">
              <img src="/img/mensaje.png" alt="mensaje" />
              <div className="icon-glow"></div>
            </div>
            <div className="icon-container icon-exclamation">
              <img src="/img/admiracion.png" alt="admiracion" />
              <div className="icon-glow"></div>
            </div>
            <div className="icon-container icon-onomatopoeia">
              <img src="/img/onomatopella.png" alt="Onomatopella" />
              <div className="icon-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Partículas decorativas */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;