# Guía de Uso - afro-npm-nextjs v1.0.5

## 📦 Instalación

```bash
npm install afro-npm-nextjs@1.0.5
```

## 🚀 Importación en tu proyecto Next.js

### Método 1: Named Imports (Recomendado)

```tsx
import { NextCard, NextButton } from "afro-npm-nextjs";

export default function Page() {
  return (
    <NextCard title="Mi Tarjeta" variant="primary">
      <NextButton variant="outline">Click me</NextButton>
    </NextCard>
  );
}
```

### Método 2: Default Import

```tsx
import Components from "afro-npm-nextjs";

export default function Page() {
  const { NextCard, NextButton } = Components;

  return (
    <NextCard title="Mi Tarjeta" variant="primary">
      <NextButton variant="outline">Click me</NextButton>
    </NextCard>
  );
}
```

### Método 3: Import Dinámico (si hay problemas de resolución)

```tsx
"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [Components, setComponents] = useState(null);

  useEffect(() => {
    import("afro-npm-nextjs")
      .then(({ NextCard, NextButton }) => {
        setComponents({ NextCard, NextButton });
      })
      .catch(console.error);
  }, []);

  if (!Components) return <div>Cargando componentes...</div>;

  const { NextCard, NextButton } = Components;

  return (
    <NextCard title="Mi Tarjeta" variant="primary">
      <NextButton variant="outline">Click me</NextButton>
    </NextCard>
  );
}
```

## 🔧 Configuración de Next.js

### next.config.js (Recomendado)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["afro-npm-nextjs"],
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
```

## 📝 Tipos TypeScript

Los tipos están incluidos automáticamente:

```tsx
import {
  NextCard,
  NextButton,
  NextCardProps,
  NextButtonProps,
} from "afro-npm-nextjs";

// Usar los tipos en tus propios componentes
interface MyComponentProps {
  cardProps: NextCardProps;
  buttonProps: NextButtonProps;
}
```

## ✅ Verificación de instalación

Si tienes problemas, verifica que la instalación sea correcta:

```javascript
// test.js
const { NextCard, NextButton } = require("afro-npm-nextjs");
console.log("NextCard:", typeof NextCard); // debería ser 'function'
console.log("NextButton:", typeof NextButton); // debería ser 'function'
```

## 🎯 Ejemplos de uso completos

### Página básica

```tsx
import { NextCard, NextButton } from "afro-npm-nextjs";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1>Mi Aplicación</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <NextCard
          title="Bienvenido"
          description="Esta es una tarjeta de ejemplo"
          variant="primary"
        >
          <p>Contenido de la tarjeta aquí</p>
          <NextButton variant="outline" className="mt-4">
            Ver más
          </NextButton>
        </NextCard>

        <NextCard
          title="Características"
          variant="outlined"
          onClick={() => alert("¡Tarjeta clickeada!")}
        >
          <ul>
            <li>✅ Next.js 15</li>
            <li>✅ TypeScript</li>
            <li>✅ App Router</li>
          </ul>
        </NextCard>
      </div>
    </div>
  );
}
```

### Componente interactivo

```tsx
"use client";

import { NextCard, NextButton } from "afro-npm-nextjs";
import { useState } from "react";

export default function InteractiveExample() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCount((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <NextCard
      title="Contador Interactivo"
      description={`Valor actual: ${count}`}
      variant="secondary"
    >
      <div className="flex gap-2 mt-4">
        <NextButton
          variant="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </NextButton>

        <NextButton variant="secondary" onClick={() => setCount(0)}>
          Reset
        </NextButton>

        <NextButton
          variant="outline"
          loading={loading}
          onClick={handleAsyncAction}
        >
          Async +1
        </NextButton>
      </div>
    </NextCard>
  );
}
```

## 🐛 Solución de problemas

### Error: "Module not found"

1. **Limpiar caché:**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Verificar next.config.js:**

   ```javascript
   module.exports = {
     transpilePackages: ["afro-npm-nextjs"],
   };
   ```

3. **Usar import dinámico como alternativa**

### Error: "Cannot resolve module"

1. **Verificar instalación:**

   ```bash
   npm list afro-npm-nextjs
   ```

2. **Reinstalar específicamente:**
   ```bash
   npm install afro-npm-nextjs@1.0.5
   ```

## 🎉 Características disponibles

- ✅ **NextCard**: 4 variantes (`default`, `primary`, `secondary`, `outlined`)
- ✅ **NextButton**: 5 variantes, 3 tamaños, estado de carga
- ✅ **TypeScript**: Tipos completos incluidos
- ✅ **CSS**: Estilos inyectados automáticamente
- ✅ **Dark Mode**: Soporte automático
- ✅ **Responsive**: Diseño adaptativo
- ✅ **Accesibilidad**: Implementación completa de a11y

¡El paquete está listo para usar en tu proyecto Next.js 15! 🚀
