"use client" ;

import React, { useState } from "react";
import "./home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Page = () => {
  // Estado para manejar la sección activa
  const [activeSection, setActiveSection] = useState("home");

  // Función para cambiar la sección activa
  const showContent = (sectionId) => {
    setActiveSection(sectionId);
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
          Contactanos al 800 900 700
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
            Todo sobre el VIH
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
            Programas y servicios
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
            Quienes Somos
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
            Contactos 
          </button>
        
      
  
        </div>
      </div>

      
     {/* Contenido dinámico */}
     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {activeSection === "vih" && (
          <div>
            <h1>Todo sobre el VIH</h1>
            <p>Información completa sobre el VIH.</p>
          </div>
        )}
        {activeSection === "programas" && (
          <div>
            <h1>Programas y servicios</h1>
            <p>Detalles de programas y servicios ofrecidos.</p>
          </div>
        )}
        {activeSection === "quienes" && (
          <div>
            <h1>Quienes Somos</h1>
            <p>Información sobre nuestra organización.</p>
          </div>
        )}
         {activeSection === "contactos" && (
          <div>
            <h1>Contactos</h1>
            <p>Hablanos al whatsapp +5699999999.</p>
            <p>Correo de Soporte: Favil.soporte@favil.cl</p>
            <p>Correo de Apoyo: Favil.Apoyo@gmail.com</p>
            <p>nuestras oficinas estan en calle cualquiera #1111</p>
          </div>
        )}
        {activeSection === "home" && (
          <div>
            <h1>Reserva tu cita</h1>
            <p>Bienvenido al sistema de reservas.</p>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default Page;



