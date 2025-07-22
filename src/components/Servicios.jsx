// En tu archivo JSX (ej. Home.jsx o ServiciosSection.jsx)
import React from 'react';
import '../../public/styles/Servicios.css'; 

const ServiciosSection = () => {
  return (
    <section className="servicios-section" id='servicios'>
      <div className="servicios-izquierda">
        <img src="/img/megafono.png" alt="Megafono img" className="icono-c" />
        <h2>
          <strong>Impulsando</strong>
        </h2>
        <p>tu marca con</p>
        <button
          className="boton-contacto"
          onClick={() => window.location.href = 'https://wa.me/527713959101?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.'}
        >
          Contactar por WhatsApp
        </button>
        <div className="chevron-down"></div> {/* Nuevo elemento para la flecha */}
      </div>

      <div className="servicios-derecha">
        <div className="servicios">
          <span className="linea"></span>
          <div>
            <h3>Social Media</h3>
            <p>Gestión y creación de contenido para redes sociales que conecte con tu audiencia y refleje tu marca.</p>
          </div>
        </div>

        <div className="servicios">
          <span className="linea gris"></span>
          <div>
            <h3>Estrategias Digitales</h3>
            <p>Planes creativos y funcionales para hacer crecer tu presencia online con objetivos claros.</p>
          </div>
        </div>

        <div className="servicios">
          <span className="linea"></span>
          <div>
            <h3>Diseños de Marca</h3>
            <p>Creamos la identidad visual de tu marca con estilo, coherencia y personalidad.</p>
          </div>
        </div>

        <div className="servicios">
          <span className="linea gris"></span>
          <div>
            <h3>Consultoría de Marketing</h3>
            <p>Asesoría estratégica para tomar decisiones que impulsen tu marca con seguridad y enfoque.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;