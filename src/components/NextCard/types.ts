import React from "react";

export interface NextCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título principal de la tarjeta */
  title: string;

  /** Descripción opcional debajo del título */
  description?: string;

  /** Contenido hijo de la tarjeta */
  children?: React.ReactNode;

  /** Variante visual de la tarjeta */
  variant?: "default" | "primary" | "secondary" | "outlined";

  /** Función callback para eventos de click */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Contenido del botón */
  children: React.ReactNode;

  /** Variante visual del botón */
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost";

  /** Tamaño del botón */
  size?: "sm" | "md" | "lg";

  /** Estado de carga */
  loading?: boolean;

  /** Icono opcional */
  icon?: React.ReactNode;
}
