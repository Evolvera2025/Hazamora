import React, { useState } from 'react';
import '/public/styles/style.css';
import '/public/js/index.js';
import '/public/styles/galeria.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faWhatsapp, fa500px} from '@fortawesome/free-brands-svg-icons';





const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const imagenes = [
      'arania.jpg',
      'buo.jpg',
      'elefante.jpg',
      'gato.jpg',
      'tigre.jpg',
      'cafe.jpg',
      'concierto.jpg',
      'aurora.jpg'
];
  return (
    <div className="home-body">
      <section className="nosotros-section fade-on-scroll" id="inicio">
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
          <img className="img-phone" src="/img/Telefono.png" alt="teléfono mostrando Instagram" />
         
          <img className="icono bombilla" src="/img/Bombilla1.png" alt="bombilla" />
          <img className="icono estrella" src="/img/estrella.png" alt="estrella" />
          <img className="icono mensaje" src="/img/mensaje.png" alt="mensaje" />
          <img className="icono admiracion" src="/img/admiracion.png" alt="admiracion" />
          <img className="icono onomatopella" src="/img/onomatopella.png" alt="Onomatopella" />
        </div>
      </section>

      <section className="mision-section fade-on-scroll" id="mision">
        <div className="mision-flex">
          <div className="mision-contenido" id="texto2">
            <img src="/img/sol.png" alt="Icono Misión" className="mision-icono" />
            <h2>Nuestra misión</h2>
            <p>
              es ayudarte a impulsar tu negocio conectando con tu mercado ideal a{' '}
              <strong>
                <em>través de soluciones de marketing digital y diseño que reflejen tu esencia</em>
              </strong>, generen impacto y te permitan crecer en tu sector.
            </p>
          </div>
        </div>
      </section>



      <div className="cuerpo">

        <h2 className="galeria-titulo-vertical-palabra">
          {"Fotitos".split("").map((letra, index) => (
            <span key={index}>{letra === " " ? "\u00A0" : letra}</span>
          ))}
        </h2>

        <section className="images" id="nosotras">

                  {imagenes.map((img, index) => (
              <div
                key={index}
                className={`image ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundImage: `url('/img/${img}')` }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="etiqueta">
                  <div className="iconos-gal"><FontAwesomeIcon icon={fa500px} className="" /></div>
                  <div className="info">
                    <p className="main">@Hazamora.com</p>
                    <p className="sub">Camara Nikon s200</p>
                  </div>
                </div>
              </div>
            ))}

          
        </section>

         <h2 className="galeria-titulo-vertical-palabra">
          {"para ti".split("").map((letra, index) => (
            <span key={index}>{letra === " " ? "\u00A0" : letra}</span>
          ))}
        </h2>
      </div>

      <section className="servicios-section" id='servicios'>
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

          <section className="blog-section" id="blog">

            <div className="blog-left">
              <img className="icono sparkles-img" src="/img/estrella.png" alt="estrella" />
              <h1>
                <span className="blog-bold">Blogsito</span><br />
                <span className="blog-light">para ti</span>
              </h1>
              
                <img className="icono sparkles-img" src="/img/estrella.png" alt="estrella" />

            </div>

            <div className="blog-card">
              <div className="card-image">
                <img src="img/buo.jpg" alt="marketing" />
              </div>
              <div className="card-content">
                <h2>Marketing en la actualidad</h2>
                <p>
                  Hoy el marketing va más allá de vender: se trata de conectar, emocionar y construir relaciones reales.
                  En un mundo digital en constante cambio, las marcas que destacan son las que comunican con propósito,
                  escuchan a su audiencia y se adaptan con creatividad.
                </p>
              </div>
            </div>

            <img className="icono sparkles-img" src="/img/estrella.png" alt="estrella" />
         </section>


      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="./img/LOGO HAZAMORA BLANCO-03.png" alt="Logo Hazamora" />
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
            <a href="https://wa.me/5210000000000" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            </a>
          </div>

          <div className="footer-contacto">
            <p>© 2025 Hazamora. Todos los derechos reservados.</p>
            <p>Correo: contacto@hazamora.com</p>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Home;