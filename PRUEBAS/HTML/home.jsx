import React from 'react';
import '/public/styles/style.css'; 
import '/public/js/index.js'; 
const Home = () => {
  return (
    <div>
      <section className="nosotros-section fade-on-scroll">
        <div className="texto-nosotros" id="texto">
          <h2>
            Somos una agencia de <span className="resaltado">Marketing Digital y Diseño</span>
          </h2>
          <p>
            Enfocada en impulsar tu proyecto combinando <span className="resaltado">estrategia</span> y{' '}
            <span className="resaltado">creatividad</span> para hacer de tus ideas una realidad.
          </p>
        </div>
        <div>
          <img className="img-phone" src="imagenes/Telefono.png" alt="teléfono mostrando Instagram" />
          {/* Íconos flotantes */}
          <img className="icono bombilla" src="/img/Bombilla1.png" alt="bombilla" />
          <img className="icono estrella" src="/img/estrella.png" alt="estrella" />
          <img className="icono mensaje" src="/img/mensaje.png" alt="mensaje" />
        </div>
      </section>

      <section className="mision-section fade-on-scroll">
        <div className="mision-contenido" id="texto2">
          <img src="/img/sol.png" alt="Icono Misión" className="mision-icono" />
          <h2>Nuestra misión</h2>
          <p>
            es ayudarte a impulsar tu negocio conectando con tu mercado ideal a{' '}
            <strong>
              <em>través de soluciones de marketing digital y diseño que reflejen tu esencia</em>
            </strong>
            , generen impacto y te permitan crecer en tu sector.
          </p>
        </div>
      </section>

      <section className="servicios-section">
        <div className="servicios-izquierda">
          <img src="/img/megafono.png" alt="Megafono img" className="icono-c" />
          <h2>
            <strong>Impulsando</strong>
          </h2>
          <p>tu marca con</p>
          <button className="boton-contacto">CONTÁCTANOS!</button>
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
    </div>
  );
};

export default Home;