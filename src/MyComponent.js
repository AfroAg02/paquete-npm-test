import React from 'react';

export default function MyComponent() {
  return (
    <div style={{
      padding: '1rem',
      border: '1px solid #ccc',
      background: '#f8f8f8',
      borderRadius: '8px'
    }}>
      <h2 style={{margin: 0}}>¡Componente de prueba npm + Next.js!</h2>
      <p style={{marginTop: '0.5rem'}}>Este componente viene desde un paquete publicado en npm.</p>
    </div>
  );
}