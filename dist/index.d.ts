import * as React from 'react';
import React__default from 'react';

interface NextCardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Título principal de la tarjeta */
    title: string;
    /** Descripción opcional debajo del título */
    description?: string;
    /** Contenido hijo de la tarjeta */
    children?: React__default.ReactNode;
    /** Variante visual de la tarjeta */
    variant?: "default" | "primary" | "secondary" | "outlined";
    /** Función callback para eventos de click */
    onClick?: (event: React__default.MouseEvent<HTMLDivElement>) => void;
}
interface NextButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Contenido del botón */
    children: React__default.ReactNode;
    /** Variante visual del botón */
    variant?: "default" | "primary" | "secondary" | "outline" | "ghost";
    /** Tamaño del botón */
    size?: "sm" | "md" | "lg";
    /** Estado de carga */
    loading?: boolean;
    /** Icono opcional */
    icon?: React__default.ReactNode;
}

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
declare const NextCard: React__default.FC<NextCardProps>;

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
declare const NextButton: React__default.FC<NextButtonProps>;

declare const _default: {
    NextCard: React.FC<NextCardProps>;
    NextButton: React.FC<NextButtonProps>;
};

export { NextButton, type NextButtonProps, NextCard, type NextCardProps, _default as default };
