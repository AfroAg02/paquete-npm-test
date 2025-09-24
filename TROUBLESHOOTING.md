# Guía de Solución de Problemas - prueba-npm-nextjs

## Error: "Module not found: Can't resolve 'prueba-npm-nextjs'"

### 🔍 Diagnóstico

Este error indica que Next.js no puede encontrar o resolver el paquete npm. Puede suceder por varias razones:

1. **Versión incompatible de React/React-DOM**
2. **Configuración incorrecta de Next.js**
3. **Caché corrupto de node_modules**
4. **Problema con la resolución de módulos de Next.js**

### 🛠️ Soluciones

#### Solución 1: Limpiar caché y reinstalar

```bash
# En tu proyecto zasadmin
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Solución 2: Configurar next.config.js

Crea o actualiza tu `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["prueba-npm-nextjs"],
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
```

#### Solución 3: Verificar compatibilidad de versiones

En tu `package.json`, asegúrate de que las versiones sean compatibles:

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.2",
    "prueba-npm-nextjs": "^1.0.4"
  }
}
```

#### Solución 4: Import alternativo

Si el import directo no funciona, usa import dinámico:

```tsx
"use client";

import { useState, useEffect } from "react";

export default function ComponentsPage() {
  const [Components, setComponents] = useState(null);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const { NextCard, NextButton } = await import("prueba-npm-nextjs");
        setComponents({ NextCard, NextButton });
      } catch (error) {
        console.error("Error loading components:", error);
      }
    };

    loadComponents();
  }, []);

  if (!Components) {
    return <div>Cargando componentes...</div>;
  }

  const { NextCard, NextButton } = Components;

  return (
    <div>
      <NextCard title="Mi Tarjeta" variant="primary">
        <NextButton>Mi Botón</NextButton>
      </NextCard>
    </div>
  );
}
```

#### Solución 5: Usar require (solo en componentes del servidor)

```tsx
// Solo para Server Components
const { NextCard } = require("prueba-npm-nextjs");

export default function ServerComponent() {
  return <NextCard title="Server Component">Contenido del servidor</NextCard>;
}
```

#### Solución 6: Configuración de webpack personalizada

Si nada más funciona, añade configuración personalizada de webpack:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "prueba-npm-nextjs": require.resolve("prueba-npm-nextjs"),
    };

    return config;
  },
};

module.exports = nextConfig;
```

### 🔧 Pasos de debugging

1. **Verificar instalación:**

   ```bash
   npm list prueba-npm-nextjs
   ```

2. **Verificar archivos del paquete:**

   ```bash
   ls node_modules/prueba-npm-nextjs/
   ```

3. **Probar import en Node.js:**

   ```javascript
   // test.js
   const pkg = require("prueba-npm-nextjs");
   console.log(pkg);
   ```

4. **Verificar logs de Next.js:**
   Busca errores adicionales en la consola del navegador y terminal.

### 📞 Pasos finales

Si ninguna solución funciona:

1. Crea un proyecto Next.js nuevo y prueba allí
2. Comparte los logs completos del error
3. Verifica la versión exacta de Next.js y dependencias

### 🎯 Solución Específica para tu Proyecto

Para tu proyecto `zasadmin` con Next.js 15.3.2 y React 19:

```bash
# 1. Actualizar el paquete
npm install prueba-npm-nextjs@latest

# 2. Agregar transpilePackages a next.config.js
# 3. Reiniciar el servidor de desarrollo
npm run dev
```

Si el problema persiste, el paquete se puede usar localmente:

```bash
# En el directorio del paquete
npm link

# En tu proyecto zasadmin
npm link prueba-npm-nextjs
```
