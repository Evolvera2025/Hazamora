import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import HazamoraLogoWhite from '../../public/img/LOGO HAZAMORA BLANCO-03.png';
import '../../public/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={HazamoraLogoWhite} alt="Logo Hazamora" />
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/hazamora.mx" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Hazamora">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com/hazamora.mx" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Hazamora">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Hazamora">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
        </div>

        <div className="footer-info">
          <p className="footer-copyright">© {new Date().getFullYear()} Hazamora. Todos los derechos reservados.</p>
          <p className="footer-email">
            <a href="mailto:hazamora.mx@gmail.com">hazamora.mx@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;