// Test simple para verificar que el paquete se construye correctamente
const { NextCard, NextButton } = require("../dist/index.js");

console.log("✅ NextCard importado:", typeof NextCard);
console.log("✅ NextButton importado:", typeof NextButton);

// Verificar que son funciones válidas de React
if (typeof NextCard === "function" && typeof NextButton === "function") {
  console.log("✅ Ambos componentes son funciones válidas");
  console.log("✅ Test básico pasado - el paquete funciona correctamente");
} else {
  console.error("❌ Error: Los componentes no son funciones válidas");
  process.exit(1);
}
