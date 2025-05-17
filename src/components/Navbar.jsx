import { useLocation } from 'react-router-dom';
import '/public/styles/Navbar.css'

function Navbar() {
  const location = useLocation();

  // Obtén el hash actual (ejemplo: #mision)
  const currentHash = location.hash;

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#inicio">
          <img src="img/LOGO HAZAMORA BLANCO-02.png" alt="Logo Hazamora" className="logo-img" />
        </a>
      </div>
      <div className="links">
        <a href="#inicio" className={currentHash === '#inicio' || currentHash === '' ? 'active' : ''}>Inicio</a>
        <a href="#nosotras" className={currentHash === '#nosotras' ? 'active' : ''}>Nosotras</a>
        <a href="#mision" className={currentHash === '#mision' ? 'active' : ''}>Misión</a>
        <a href="#servicios" className={currentHash === '#servicios' ? 'active' : ''}>Servicios</a>
        <a href="#blog" className={currentHash === '#blog' ? 'active' : ''}>Blog</a>
        <a href="#contacto" className={currentHash === '#contacto' ? 'active' : ''}>Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
