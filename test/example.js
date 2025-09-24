import { NextCard, NextButton } from '../dist/index.js';
import React from 'react';

// Ejemplo básico de uso de los componentes
export default function TestExample() {
  return React.createElement('div', { style: { padding: '20px' } }, [
    React.createElement(NextCard, {
      key: 'card1',
      title: 'Ejemplo de NextCard',
      description: 'Este es un componente de tarjeta',
      variant: 'primary'
    }, [
      React.createElement(NextButton, {
        key: 'btn1',
        variant: 'outline',
        onClick: () => console.log('¡Botón clickeado!')
      }, 'Click me!')
    ]),
    
    React.createElement(NextCard, {
      key: 'card2',
      title: 'Segunda Tarjeta',
      variant: 'outlined'
    }, 'Contenido simple')
  ]);
}