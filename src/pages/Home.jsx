import React, { useState, useEffect } from 'react';
import '/public/styles/style.css';
import '/public/js/index.js';
import '/public/styles/galeria.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faWhatsapp, fa500px} from '@fortawesome/free-brands-svg-icons';





const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const homeContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    minHeight: '30vh',
    padding: '1rem',
    fontFamily: "'Inter', sans-serif",
    color: 'white',
  };

  // Estilos para la tarjeta de contenido
  const contentCardStyles = {
    width: '70%',
  };

  const imagenes = [
    { src: 'arania.jpg', ig: 'https://instagram.com/integrante1' },
    { src: 'buo.jpg', ig: 'https://instagram.com/integrante2' },
    { src: 'elefante.jpg', ig: 'https://instagram.com/integrante3' },
    { src: 'gato.jpg', ig: 'https://instagram.com/integrante4' },
    { src: 'tigre.jpg', ig: 'https://instagram.com/integrante5' },
    { src: 'cafe.jpg', ig: 'https://instagram.com/integrante6' },
    { src: 'concierto.jpg', ig: 'https://instagram.com/integrante7' },
    { src: 'aurora.jpg', ig: 'https://instagram.com/integrante8' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [imagenes.length]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Ajusta el desplazamiento superior
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="home-body">
      <section className="nosotros-section fade-on-scroll" id="inicio">
      <div style={homeContainerStyles}>
        
        {/* Tarjeta de Contenido */}
        <div style={contentCardStyles}>

          {/* Texto Principal */}
          <div className="hero-text-container">
            <p className="line-1">Somos</p>
            <p className="line-2">una agencia de</p>
            <h1 className="line-3">Marketing Digital y Diseño</h1>
          </div>

          {/* Descripción */}
          <div className="description-container">
            <p>enfocada en impulsar tu proyecto</p>
            <p>combinando <strong style={{ fontWeight: 700 }}>estrategia y creatividad</strong></p>
            <p style={{ fontSize: '2.5rem', fontFamily: 'Montserrat, sans-serif'}}><strong style={{ fontWeight: 700 }}>para hacer de tus ideas, una realidad.</strong></p>
          </div>
          
        </div>
      </div>
        <div className="nosotros-imagenes">
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
        <div className="galeria-titulo" style={{ textAlign: 'center', marginRight: '100px' }}>
          <img className="icono decorativo izquierda" src="/img/estrella.png" alt="decoración izquierda" />
          <h2 className="galeria-titulo-estilizado">Conócenos</h2>
          <p className="galeria-subtitulo">Descubre a nuestro equipo creativo</p>
          <img className="icono decorativo derecha" src="/img/mensaje.png" alt="decoración derecha" />
        </div>
        <section className="images" id="nosotras">
          {imagenes.map((img, index) => (
            <a
              key={index}
              href={img.ig}
              target="_blank"
              rel="noopener noreferrer"
              className={`image ${activeIndex === index ? 'active' : ''}`}
              style={{ backgroundImage: `url('/img/${img.src}')` }}
            >
              <div className="overlay">
                <div className="info">
                  <p className="main">@Hazamora.com</p>
                  <p className="sub">Cámara Nikon s200</p>
                </div>
              </div>
            </a>
          ))}
        </section>
      </div>

      <section className="servicios-section" id='servicios'>
        <div className="servicios-izquierda">
          <img src="/img/megafono.png" alt="Megafono img" className="icono-c" />
          <h2>
            <strong>Impulsando</strong>
          </h2>
          <p>tu marca con</p>
          <button
            className="boton-contacto"
            onClick={() => window.location.href = 'https://wa.me/5210000000000'}
          >
            CONTÁCTANOS!
          </button>
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