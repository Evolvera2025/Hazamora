// En tu archivo JSX (donde tengas esta sección, ej. Home.jsx o BlogSection.jsx)
import React from 'react';
import '../../public/styles/BlogSection.css';

const Blog = () => {
  return (
    <section className="blog-section" id="blog">

      <div className="blog-left">
        <img className="icono sparkles-img top-left" src="/img/estrella.png" alt="estrella" />
        <h1>
          <span className="blog-bold">Blogsito</span><br />
          <span className="blog-light">para ti</span>
        </h1>
        <img className="icono sparkles-img bottom-left" src="/img/estrella.png" alt="estrella" />
      </div>

      <div className="blog-card">
        <div className="card-image">
          <img src="/img/buo.jpg" alt="marketing" />
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

      <img className="icono sparkles-img bottom-right" src="/img/estrella.png" alt="estrella" />
    </section>
  );
};

export default Blog;