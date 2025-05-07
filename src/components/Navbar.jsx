import { Link } from 'react-router-dom';
import '/public/styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="img/LOGO HAZAMORA BLANCO-02.png" alt="Logo Hazamora" className="logo-img" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/nosotras">Nosotras</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;
