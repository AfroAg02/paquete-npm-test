# Next.js 15 Integration Guide

## Instalación en tu proyecto Next.js 15

```bash
npm install prueba-npm-nextjs
```

## Configuración en next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Habilitar las características experimentales de Next.js 15
    ppr: true, // Partial Pre-rendering (si lo usas)
    after: true, // After callbacks (si los usas)
  },
  // Transpile el paquete npm para que funcione correctamente
  transpilePackages: ["prueba-npm-nextjs"],
};

module.exports = nextConfig;
```

## Uso en App Router (app/)

### Layout Principal (app/layout.tsx)

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi App con NextCard y NextButton",
  description: "Una aplicación usando componentes optimizados para Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

### Página de ejemplo (app/page.tsx)

```tsx
import { NextCard, NextButton } from "prueba-npm-nextjs";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Componentes Next.js 15</h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <NextCard
          title="Bienvenido"
          description="Esta es una demostración de NextCard"
          variant="primary"
        >
          <p>Contenido de la tarjeta aquí</p>
          <NextButton variant="outline">Acción</NextButton>
        </NextCard>

        <NextCard
          title="Segunda Tarjeta"
          variant="outlined"
          onClick={() => alert("¡Tarjeta clickeada!")}
        >
          <p>Esta tarjeta es clickeable</p>
        </NextCard>
      </div>
    </main>
  );
}
```

## Componente Interactivo (app/components/InteractiveExample.tsx)

```tsx
"use client";

import { NextCard, NextButton } from "prueba-npm-nextjs";
import { useState } from "react";

export default function InteractiveExample() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAsync = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCount((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <NextCard
      title="Ejemplo Interactivo"
      description={`Contador: ${count}`}
      variant="secondary"
    >
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <NextButton
          variant="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </NextButton>

        <NextButton variant="secondary" onClick={() => setCount(0)}>
          Reset
        </NextButton>

        <NextButton variant="outline" loading={loading} onClick={handleAsync}>
          Async +1
        </NextButton>
      </div>
    </NextCard>
  );
}
```

## Compatibilidad

- ✅ Next.js 15 (App Router)
- ✅ Next.js 14 (App Router)
- ✅ React 18+
- ✅ TypeScript
- ✅ Server Components
- ✅ Client Components

## Notas importantes

1. Los componentes incluyen `'use client'` automáticamente
2. Los estilos CSS se inyectan automáticamente
3. Compatible con Server-Side Rendering (SSR)
4. Soporta modo oscuro automático
5. Totalmente tipado con TypeScript
