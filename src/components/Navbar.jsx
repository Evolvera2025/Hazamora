import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Hazamora</div>
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
