"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/password/login"; // Ajusta el import según la ubicación real del archivo

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        Bienvenido A Faivil
      </h1>
      <p>ingrese sus datos</p>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
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
  );
};

export default LoginPage;
