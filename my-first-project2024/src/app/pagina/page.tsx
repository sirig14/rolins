'use client';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from "react";
import "./home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarWithForm from "@/components/CalendarWithForm";
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

const Page = () => {
  // Estado para manejar la sección activa
  const [activeSection, setActiveSection] = useState("home");

  // Función para cambiar la sección activa
  const showContent = (sectionId) => {
    setActiveSection(sectionId);
  };

  const [userMessage, setUserMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setChatResponse(data.message);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Barra superior adicional */}
      <div
        style={{
          backgroundColor: "#FFA500", // Color de fondo para la nueva barra
          color: "#fff", // Texto en blanco
          padding: "10px 20px", // Espaciado interno
          textAlign: "center", // Centrar el texto en la barra
          fontSize: "16px", // Tamaño de fuente
        }}
      >
       <img
          src= "/icono.jpg"
          alt="Logo"
          style={{ height: "40px", width: "auto" }} // Ajusta el tamaño de la imagen
        />
        {/* Texto centrado */}
        <div style={{ flex: 1, textAlign: "center" }}>
          {t('home.contacto_navbar')}
        </div>
        <div 
        style={{
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '10px', 
          padding: '10px', 
          position: 'fixed', 
          top: '0', 
          right: '0', 
          zIndex: '1000'
        }}>
          <button
            onClick={() => changeLanguage('es')}
            style={{
              padding: '10px 15px',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            aria-label="Cambiar a español"
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => changeLanguage('en')}
            style={{
              padding: '10px 15px',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            aria-label="Change to English"
          >
            🇬🇧 English
          </button>
        </div>

      </div>

      {/* Barra de navegación */}
      <div className="NavBar-Blue"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%", 
          boxSizing: "border-box",
        }}
      >
    
        <div style={{ display: "flex", gap: "" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => showContent("vih")}
          >
            {t('home.vih.titulo')}
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => showContent("programas")}
          >
            {t('home.programas.titulo')}
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => showContent("quienes")}
          >
            {t('home.quienes_somos.titulo')}
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => showContent("contactos")}
          >
            {t('home.contacto.titulo')} 
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => showContent("Reserva")}
          >
            {t('home.reserva.titulo')}
          </button>
        
      
  
        </div>
      </div>

      
     {/* Contenido dinámico */}
     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {activeSection === "vih" && (
          <div>
            <h1>{t('home.vih.titulo')}</h1>
            <p>{t('home.vih.informacion')}</p>
            <h1>{t('home.vih.chat')}</h1>
            <form onSubmit={handleMessageSubmit}>
              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder={t('home.vih.placeholder')}
                rows="5"
                style={{ 
                  width: '100%', 
                  color: 'black', 
                  backgroundColor: 'white',  
                  placeholderColor: 'gray' 
                }}
              ></textarea>
              <button type="submit" disabled={loading} 
              style={{ width: 'auto', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                maxWidth: '200px'}}>
                {loading ? 'Cargando...' : 'Enviar'}
              </button>
            </form>

            {chatResponse && (
              <div>
                <h2>Respuesta de ChatGPT:</h2>
                <p>{chatResponse}</p>
              </div>
            )}
          </div>
        )}
        {activeSection === "programas" && (
          <div>
            <h1>{t('home.programas.titulo')}</h1>
            <p>{t('home.programas.detalles')}</p>
          </div>
        )}
        {activeSection === "quienes" && (
          <div>
            <h1>{t('home.quienes_somos.titulo')}</h1>
            <p>{t('home.quienes_somos.informacion_titulo')}</p>
          </div>
        )}
         {activeSection === "contactos" && (
          <div>
            <h1>{t('home.contacto.titulo')}</h1>
            <p>{t('home.contacto.wsp')}</p>
            <p>{t('home.contacto.correo_soporte')}</p>
            <p>{t('home.contacto.correo_apoyo')}</p>
            <p>{t('home.contacto.direccion')}</p>
          </div>
        )}
        {activeSection === "Reserva" && (
          <div>
            <h1>{t('home.reserva.titulo')}</h1>
            <p>{t('home.reserva.bienvenida')}</p>
            <section id="calendario">
          {/* Aquí se integra el calendario */}
          <CalendarWithForm />
        </section>
          </div>
        )}
        {activeSection === "home" && (
          <div>
            <h1>Reserva tu cita</h1>
            <p>Bienvenido al sistema de reservas.</p>
            <section id="calendario">
          {/* Aquí se integra el calendario */}
          <CalendarWithForm />
        </section>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default Page;



