# prueba-npm-nextjs

Paquete de ejemplo que exporta un componente React sencillo para usar en proyectos Next.js.

## Instalación

```bash
npm install prueba-npm-nextjs
```

## Uso

```jsx
import MyComponent from 'prueba-npm-nextjs';

export default function Page() {
  return (
    <div>
      <h1>Página</h1>
      <MyComponent />
    </div>
  );
}
```

## Desarrollo local

Clona el repo y prueba:

```bash
git clone https://github.com/<TU_USUARIO>/prueba-npm-nextjs
cd prueba-npm-nextjs
npm install
```

Puedes probarlo en otra app local usando:

```bash
npm link
# en tu app Next.js
npm link prueba-npm-nextjs
```

## Licencia

MIT