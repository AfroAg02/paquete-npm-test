// Importaciones principales
import { NextCard } from "./components/NextCard/NextCard";
import { NextButton } from "./components/NextButton/NextButton";
import type {
  NextCardProps,
  NextButtonProps,
} from "./components/NextCard/types";

// Exportación named (recomendada)
export { NextCard, NextButton };
export type { NextCardProps, NextButtonProps };

// Exportación por defecto para compatibilidad
export default {
  NextCard,
  NextButton,
};

// Re-exportación de todo para máxima compatibilidad
export * from "./components/NextCard/NextCard";
export * from "./components/NextButton/NextButton";
export * from "./components/NextCard/types";
