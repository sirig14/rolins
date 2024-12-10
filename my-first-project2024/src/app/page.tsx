"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/password/login"; // Ajusta el import según la ubicación real del archivo
import "./login.css";
const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "'Arial', sans-serif",
        padding: "10px",
      }}
    >
      <div className="box_login"
      >
        <h1
          style={{
            color: "#333",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Bienvenido A Faivil
        </h1>
        <img
          src= "/icono.jpg"
          alt="Logo"
          style={{ height: "40px", width: "auto" }} // Ajusta el tamaño de la imagen
        />
        <h5
          style={{
            color: "#555",
            fontSize: "1.2rem",
            marginBottom: "20px",
          }}
        >
          Si tiene cuenta, seleccione el botón de Login
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px", // Espaciado entre botones
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#007BFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => (window.location.href = "/password/login")}
          >
            Login
          </button>
        </div>
        <h5
          style={{
            color: "#555",
            fontSize: "1.2rem",
            marginBottom: "20px",
          }}
        >
          Si no tiene cuenta, seleccione Signup
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px", // Espaciado entre botones
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#007BFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => (window.location.href = "/password/signup")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
