# afro-npm-nextjs

Un paquete de componentes React optimizado para **Next.js 15** con **App Router**. Incluye componentes modernos y reutilizables con soporte completo para TypeScript.

## 🚀 Características

- ✅ **Next.js 15** con App Router
- ✅ **TypeScript** completo
- ✅ **CSS Modules** para estilos aislados
- ✅ **Dark mode** automático
- ✅ **Responsive design**
- ✅ **Accesibilidad** (a11y)
- ✅ **Tree shaking** optimizado

## 📦 Instalación

```bash
npm install afro-npm-nextjs
# o
yarn add afro-npm-nextjs
# o
pnpm add afro-npm-nextjs
```

## 🔧 Uso

### NextCard

Un componente de tarjeta versátil y moderno:

```tsx
import { NextCard } from "afro-npm-nextjs";

export default function Page() {
  return (
    <NextCard
      title="Mi Tarjeta"
      description="Una descripción opcional"
      variant="primary"
      onClick={() => console.log("Tarjeta clickeada!")}
    >
      <p>Contenido personalizado aquí</p>
    </NextCard>
  );
}
```

#### Props de NextCard

| Prop          | Tipo                                                  | Default     | Descripción                    |
| ------------- | ----------------------------------------------------- | ----------- | ------------------------------ |
| `title`       | `string`                                              | -           | Título principal de la tarjeta |
| `description` | `string`                                              | -           | Descripción opcional           |
| `children`    | `ReactNode`                                           | -           | Contenido hijo                 |
| `variant`     | `'default' \| 'primary' \| 'secondary' \| 'outlined'` | `'default'` | Variante visual                |
| `onClick`     | `function`                                            | -           | Callback para clicks           |

### NextButton

Un botón moderno con múltiples variantes y estados:

```tsx
import { NextButton } from "afro-npm-nextjs";

export default function Page() {
  return (
    <div>
      <NextButton variant="primary" size="lg">
        Botón Principal
      </NextButton>

      <NextButton variant="outline" loading={true} icon={<span>🚀</span>}>
        Cargando...
      </NextButton>
    </div>
  );
}
```

#### Props de NextButton

| Prop       | Tipo                                                            | Default     | Descripción         |
| ---------- | --------------------------------------------------------------- | ----------- | ------------------- |
| `children` | `ReactNode`                                                     | -           | Contenido del botón |
| `variant`  | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'default'` | Variante visual     |
| `size`     | `'sm' \| 'md' \| 'lg'`                                          | `'md'`      | Tamaño del botón    |
| `loading`  | `boolean`                                                       | `false`     | Estado de carga     |
| `icon`     | `ReactNode`                                                     | -           | Icono opcional      |

## 🎨 Variantes y Estilos

### Variantes de NextCard

- **default**: Tarjeta blanca con borde sutil
- **primary**: Gradiente azul-púrpura
- **secondary**: Fondo gris claro
- **outlined**: Transparente con borde azul

### Variantes de NextButton

- **default**: Gris claro
- **primary**: Azul
- **secondary**: Gris oscuro
- **outline**: Transparente con borde
- **ghost**: Sin fondo, solo texto

## 🌙 Dark Mode

Los componentes soportan automáticamente el modo oscuro usando `prefers-color-scheme`.

## 🔧 Requisitos

- React ≥18
- Next.js ≥14 (optimizado para Next.js 15)
- TypeScript (recomendado)

## 📱 Ejemplo Completo

```tsx
"use client";

import { NextCard, NextButton } from "afro-npm-nextjs";
import { useState } from "react";

export default function Example() {
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    // Simular API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <NextCard
        title="Tarjeta Interactiva"
        description="Click para ver la acción"
        variant="primary"
        onClick={() => alert("¡Tarjeta clickeada!")}
      >
        <NextButton
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleAction();
          }}
          loading={loading}
        >
          {loading ? "Procesando..." : "Ejecutar Acción"}
        </NextButton>
      </NextCard>

      <NextCard
        title="Tarjeta Simple"
        description="Sin interactividad"
        variant="outlined"
      >
        <p>Contenido estático aquí</p>
      </NextCard>
    </div>
  );
}
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Construir el paquete
npm run build

# Verificar tipos
npm run type-check

# Modo desarrollo con watch
npm run dev
npm install
```

Puedes probarlo en otra app local usando:

```

## 📄 Licencia

MIT

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor abre un issue o pull request.

---

**Optimizado para Next.js 15 con App Router** 🚀
```
