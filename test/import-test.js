// Test completo de importaciones
console.log("🧪 Iniciando tests de importación...\n");

// Test 1: Import named (CommonJS)
try {
  const { NextCard, NextButton } = require("../dist/index.js");
  console.log("✅ Test 1 - Named imports (CommonJS):", {
    NextCard: typeof NextCard,
    NextButton: typeof NextButton,
  });
} catch (error) {
  console.error("❌ Test 1 falló:", error.message);
}

// Test 2: Import default (CommonJS)
try {
  const components = require("../dist/index.js").default;
  console.log("✅ Test 2 - Default import (CommonJS):", {
    NextCard: typeof components.NextCard,
    NextButton: typeof components.NextButton,
  });
} catch (error) {
  console.error("❌ Test 2 falló:", error.message);
}

// Test 3: Import completo (CommonJS)
try {
  const allExports = require("../dist/index.js");
  console.log("✅ Test 3 - All exports (CommonJS):", Object.keys(allExports));
} catch (error) {
  console.error("❌ Test 3 falló:", error.message);
}

// Test 4: ESM import (solo si está disponible)
async function testESM() {
  try {
    const { NextCard, NextButton } = await import("../dist/index.mjs");
    console.log("✅ Test 4 - ESM named imports:", {
      NextCard: typeof NextCard,
      NextButton: typeof NextButton,
    });
  } catch (error) {
    console.error("❌ Test 4 falló:", error.message);
  }

  try {
    const defaultExport = await import("../dist/index.mjs");
    console.log("✅ Test 5 - ESM default import:", {
      default: typeof defaultExport.default,
      NextCard: typeof defaultExport.NextCard,
      NextButton: typeof defaultExport.NextButton,
    });
  } catch (error) {
    console.error("❌ Test 5 falló:", error.message);
  }
}

testESM().then(() => {
  console.log("\n🎉 Tests de importación completados");
});
