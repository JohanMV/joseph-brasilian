# Joseph Brasilian

Sitio web de Joseph Brasilian, desarrollado con React, TypeScript y Vite.

## Desarrollo local

Requisitos: Node.js compatible con Vite 7 y pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Para comprobar la compilación de producción y visualizarla localmente:

```sh
pnpm build
pnpm preview
```

## Despliegue en Vercel

Importa el repositorio en Vercel. El proyecto utiliza `pnpm build` y genera los archivos de producción en `dist`. El archivo `vercel.json` dirige las rutas de la aplicación a `index.html`, de modo que las vistas como `/portafolio` y `/tienda` también funcionen al acceder directamente o recargar la página.

Las variables de entorno locales, las dependencias, los archivos generados y las credenciales están excluidos mediante `.gitignore`. Las fotografías originales PNG se conservan localmente; el sitio utiliza sus versiones WebP optimizadas.
