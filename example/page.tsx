"use client";

import { NextCard, NextButton } from "afro-npm-nextjs";
import { useState } from "react";

/**
 * Ejemplo de uso de los componentes NextCard y NextButton
 * Este archivo muestra cómo usar los componentes en una aplicación Next.js 15
 */
export default function ExamplePage() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleAsyncAction = async () => {
    setLoading(true);
    // Simular una operación asíncrona
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
        Ejemplo de Componentes Next.js 15
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Tarjeta interactiva */}
        <NextCard
          title="Tarjeta Interactiva"
          description="Esta tarjeta responde a clicks y tiene contenido dinámico"
          variant="primary"
          onClick={() => alert(`¡Tarjeta clickeada ${clickCount + 1} veces!`)}
        >
          <div style={{ marginTop: "16px" }}>
            <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "16px" }}>
              Clicks realizados: {clickCount}
            </p>
            <NextButton
              variant="outline"
              size="md"
              onClick={(e) => {
                e.stopPropagation(); // Evitar que se dispare el click de la tarjeta
                handleAsyncAction();
              }}
              loading={loading}
              icon={loading ? undefined : <span>🚀</span>}
            >
              {loading ? "Procesando..." : "Ejecutar Acción"}
            </NextButton>
          </div>
        </NextCard>

        {/* Tarjeta con diferentes variantes de botones */}
        <NextCard
          title="Variantes de Botones"
          description="Diferentes estilos y tamaños de botones"
          variant="default"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <NextButton variant="primary" size="lg">
              Botón Primary Large
            </NextButton>
            <NextButton variant="secondary" size="md">
              Botón Secondary Medium
            </NextButton>
            <NextButton variant="outline" size="sm" icon={<span>⭐</span>}>
              Outline Small con Icono
            </NextButton>
            <NextButton variant="ghost" disabled>
              Botón Deshabilitado
            </NextButton>
          </div>
        </NextCard>

        {/* Tarjeta outlined */}
        <NextCard
          title="Tarjeta Outlined"
          description="Estilo outlined con fondo transparente"
          variant="outlined"
        >
          <div style={{ padding: "16px 0" }}>
            <p style={{ marginBottom: "16px", color: "#374151" }}>
              Esta tarjeta usa la variante "outlined" que le da un aspecto más
              sutil.
            </p>
            <NextButton variant="primary" size="md">
              Acción Principal
            </NextButton>
          </div>
        </NextCard>

        {/* Tarjeta secondary */}
        <NextCard
          title="Tarjeta Secondary"
          description="Con fondo gris claro"
          variant="secondary"
        >
          <div style={{ padding: "16px 0" }}>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "#4b5563" }}>
              <li>Soporte para Next.js 15</li>
              <li>App Router compatible</li>
              <li>TypeScript incluido</li>
              <li>CSS Modules</li>
              <li>Dark mode automático</li>
            </ul>
          </div>
        </NextCard>

        {/* Tarjeta con formulario */}
        <NextCard
          title="Formulario de Ejemplo"
          description="Componentes en un contexto de formulario"
          variant="default"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Formulario enviado!");
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <input
                type="text"
                placeholder="Tu nombre"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <NextButton type="submit" variant="primary" size="md">
                Enviar
              </NextButton>
              <NextButton type="button" variant="ghost" size="md">
                Cancelar
              </NextButton>
            </div>
          </form>
        </NextCard>

        {/* Tarjeta informativa */}
        <NextCard
          title="Información"
          description="Características del paquete"
          variant="primary"
        >
          <div style={{ color: "rgba(255,255,255,0.9)" }}>
            <h4 style={{ margin: "0 0 12px 0", color: "white" }}>
              ✨ Características principales:
            </h4>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>Optimizado para Next.js 15</li>
              <li>Soporte completo de TypeScript</li>
              <li>Responsive design</li>
              <li>Accesibilidad (a11y)</li>
              <li>Tree shaking optimizado</li>
            </ul>
          </div>
        </NextCard>
      </div>

      <footer
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.8)",
          marginTop: "40px",
          fontSize: "14px",
        }}
      >
        <p>
          Ejemplo creado con componentes de <strong>afro-npm-nextjs</strong>
        </p>
        <p>Optimizado para Next.js 15 con App Router 🚀</p>
      </footer>
    </div>
  );
}
