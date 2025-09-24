'use client';

import React from 'react';
import { NextButtonProps } from '../NextCard/types';
import './NextButton.css';

// Clases CSS como constantes para evitar errores de tipado
const styles = {
  button: 'nextbutton-button',
  sm: 'nextbutton-sm',
  md: 'nextbutton-md',
  lg: 'nextbutton-lg',
  default: 'nextbutton-default',
  primary: 'nextbutton-primary',
  secondary: 'nextbutton-secondary',
  outline: 'nextbutton-outline',
  ghost: 'nextbutton-ghost',
  loading: 'nextbutton-loading',
  spinner: 'nextbutton-spinner',
  spinnerIcon: 'nextbutton-spinner-icon',
  icon: 'nextbutton-icon',
  content: 'nextbutton-content',
};

/**
 * NextButton - Un componente de botón optimizado para Next.js 15 con App Router
 *
 * @param children - Contenido del botón
 * @param variant - Variante visual del botón
 * @param size - Tamaño del botón
 * @param loading - Estado de carga
 * @param icon - Icono opcional
 * @param disabled - Estado deshabilitado
 * @param className - Clases CSS adicionales
 */
export const NextButton: React.FC<NextButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  loading = false,
  icon,
  disabled,
  className = "",
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {loading && (
        <span className={styles.spinner}>
          <svg className={styles.spinnerIcon} viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
            />
          </svg>
        </span>
      )}

      {icon && !loading && <span className={styles.icon}>{icon}</span>}

      <span className={styles.content}>{children}</span>
    </button>
  );
};

NextButton.displayName = "NextButton";
