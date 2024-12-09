"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/password/login"; // Ajusta el import según la ubicación real del archivo
import "./home.css"

const Page = () => {
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
          src="data:image/jpeg;base64,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" // Reemplaza con la URL de tu imagen
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
            onClick={() => alert("Todo sobre el VIH clicado")}
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
            onClick={() => alert("Programas y servicios clicado")}
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
            onClick={() => alert("Quienes Somos clicado")}
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
        onClick={() =>
           (window.location.href = "/password/login")
        }
         >
           Ingreso
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
        onClick={() =>
           (window.location.href = "/password/signup")
        }
         >
           Registro
        </button>
  
        </div>
      </div>

      
      {/* Contenido principal */}
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h1>Reserva tu cita</h1>
      </div>

    </div>
  );
};

export default Page;

