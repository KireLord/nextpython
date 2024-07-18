# Proyecto de Reporte de Mejores Jugadores

## Implemetacion por
- Erick Rosero
- Gustavo Guevara

Este proyecto es una aplicación web construida con Next.js y TypeScript que muestra un reporte de los mejores jugadores. La aplicación incluye un fondo animado de partículas utilizando la biblioteca Three.js.

## Instala las dependencias
  npm install
## Inicia el servidor de desarrollo
  npm run dev
## Abre http://localhost:3000 para ver la aplicación en el navegador.

# Uso
La aplicación permite seleccionar un rango de fechas y mostrar un reporte de los mejores jugadores en ese periodo. Además, cuenta con un fondo animado de partículas para mejorar la experiencia visual.

# Tecnologías
    Next.js
    TypeScript
    Semantic UI React
    Three.js
    Configuración de Next.js y TypeScript
    Next.js es un framework de React que permite renderizado del lado del servidor y generación de sitios estáticos. Este proyecto está configurado para usar TypeScript, un superset de JavaScript que añade tipos estáticos.

# Instalación de Next.js y TypeScript
Para crear una nueva aplicación Next.js con soporte para TypeScript, utiliza el comando npx create-next-app@latest tu_repositorio --typescript.
Esto crea una nueva aplicación Next.js con soporte para TypeScript.

# Configuración de TypeScript
Asegúrate de que el archivo tsconfig.json esté presente en la raíz del proyecto. Este archivo contiene la configuración necesaria para TypeScript.

# Configuración de Three.js
Three.js es una biblioteca de JavaScript para crear y mostrar gráficos 3D en un navegador web.

# Instala Three.js utilizando el comando npm install three.

# Implementación del Fondo Animado
Crea un componente AnimatedBackground en src/app/AnimatedBackground.tsx que utilice Three.js para renderizar un fondo animado de partículas.

Luego, incluye el componente en tu página principal para que se muestre detrás del contenido principal.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


