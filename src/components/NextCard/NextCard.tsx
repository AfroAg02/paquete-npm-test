'use client';

import React from 'react';
import { NextCardProps } from './types';
import './NextCard.css';

// Clases CSS como constantes para evitar errores de tipado
const styles = {
  card: 'nextcard-card',
  clickable: 'nextcard-clickable',
  default: 'nextcard-default',
  primary: 'nextcard-primary',
  secondary: 'nextcard-secondary',
  outlined: 'nextcard-outlined',
  header: 'nextcard-header',
  title: 'nextcard-title',
  description: 'nextcard-description',
  content: 'nextcard-content',
};

/**
 * NextCard - Un componente de tarjeta optimizado para Next.js 15 con App Router
 *
 * @param title - Título de la tarjeta
 * @param description - Descripción opcional
 * @param children - Contenido hijo
 * @param variant - Variante visual de la tarjeta
 * @param onClick - Función callback opcional para eventos de click
 * @param className - Clases CSS adicionales
 */
export const NextCard: React.FC<NextCardProps> = ({
  title,
  description,
  children,
  variant = "default",
  onClick,
  className = "",
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    onClick ? styles.clickable : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

NextCard.displayName = "NextCard";
