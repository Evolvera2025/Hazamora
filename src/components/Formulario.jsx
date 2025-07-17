// src/components/Formulario.jsx
import React, { useState } from 'react';
import '../../public/styles/Formulario.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Por favor, completa todos los campos.');
      e.preventDefault();
    }
    
  };

  return (
    <div className="hazamora-form-container" id="contacto">
      <h2 className="form-title">¡Contáctanos!</h2>
      <p className="form-subtitle">Estamos listas para trabajar contigo.</p>

      <form
        action="https://formsubmit.co/95fad076396169a10bbcfce29ff6fb5a" // ¡TU ENDPOINT DE FORMSUBMIT.CO!
        method="POST"
        className="hazamora-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto:</label>
          <select
            id="subject"
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un asunto</option> 
            <option value="Queja">Queja</option>
            <option value="Propuesta">Propuesta</option>
            <option value="Informacion">Información</option>
            <option value="Agradecimiento">Agradecimiento</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;