"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import { useForm } from "react-hook-form";
import "react-calendar/dist/Calendar.css";
import "../styles/style.css"; // Importa tus estilos personalizados
import { useTranslation } from 'react-i18next';
//import '../../lib/i18n';

const CalendarWithForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const onSubmit = (data: any) => {
    alert(`Formulario enviado:\nNombre: ${data.nombre}\nApellido: ${data.apellido}\nTeléfono: ${data.telefono}`);
    setSelectedDate(null); // Reinicia el formulario
  };

  const { t, i18n } = useTranslation('common');

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <h1>{t('home.reserva.calendario')}</h1>

      {/* Calendario */}
      <Calendar onClickDay={onDateChange} />

      {/* Formulario visible si hay una fecha seleccionada */}
      {selectedDate && (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
          <h2>Formulario para {selectedDate.toLocaleDateString()}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre">{t('home.reserva.nombre')}</label>
              <input
                id="nombre"
                {...register("nombre", { required: "El nombre es obligatorio" })}
              />
              {typeof errors.nombre?.message === 'string' && <p style={{ color: "red" }}>{errors.nombre.message}</p>}
            </div>

            {/* Campo Apellido */}
            <div>
              <label htmlFor="apellido">{t('home.reserva.apellido')}</label>
              <input
                id="apellido"
                {...register("apellido", { required: "El apellido es obligatorio" })}
              />
              {typeof errors.apellido?.message === 'string' && <p style={{ color: "red" }}>{errors.apellido.message}</p>}
            </div>

            {/* Campo Teléfono */}
            <div>
              <label htmlFor="telefono">{t('home.reserva.telefono')}</label>
              <input
                id="telefono"
                {...register("telefono", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                })}
              />
              {typeof errors.telefono?.message === 'string' && <p style={{ color: "red" }}>{errors.telefono.message}</p>}
            </div>

            {/* Botón de Enviar */}
            <button type="submit" style={{ marginTop: "10px" }}>Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarWithForm;
