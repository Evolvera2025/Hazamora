import React from 'react';
import '../../public/styles/Mision.css'

export const Mision = () => {
  return (
    <section className="mision-section fade-on-scroll" id="mision">
      <div className="mision-container">
        <div className="mision-content">
          
          {/* Header con icono */}
          <div className="mision-header">
            <div className="mision-icon-wrapper">
              <div className="mision-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="mision-line"></div>
          </div>
          
          {/* Contenido principal */}
          <div className="mision-main">
            <h2 className="mision-title">
              Nuestra
              <span className="mision-title-highlight">Misión</span>
            </h2>
            
            <div className="mision-text">
              <p>
                Es ayudarte a <strong>impulsar tu negocio</strong> conectando con tu mercado ideal a través de{' '}
                <span className="mision-emphasis">
                  soluciones de marketing digital y diseño que reflejen tu esencia
                </span>, generen impacto y te permitan crecer en tu sector.
              </p>
            </div>
          </div>
          
          {/* Elementos decorativos */}
          <div className="mision-decorations">
            <div className="mision-decoration mision-decoration-1"></div>
            <div className="mision-decoration mision-decoration-2"></div>
            <div className='mision-decoration mision-decoration-3'></div>
            <div className='mision-decoration mision-decoration-4'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
  