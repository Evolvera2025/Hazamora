import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '/public/styles/Navbar.css';

export function Navbar() {
  const location = useLocation();
  const currentHash = location.hash;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#inicio">
          <img src="img/LOGO HAZAMORA BLANCO-02.png" alt="Logo Hazamora" className="logo-img" />
        </a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <a href="#inicio" className={currentHash === '#inicio' || currentHash === '' ? 'active' : ''}>Inicio</a>
        <a href="#mision" className={currentHash === '#mision' ? 'active' : ''}>Misión</a>
        <a href="#nosotras" className={currentHash === '#nosotras' ? 'active' : ''}>Nosotras</a>
        <a href="#servicios" className={currentHash === '#servicios' ? 'active' : ''}>Servicios</a>
        <a href="#blog" className={currentHash === '#blog' ? 'active' : ''}>Blog</a>
        <a href="#contacto" className={currentHash === '#contacto' ? 'active' : ''}>Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;

