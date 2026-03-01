# Coudet

Landing page en Astro enfocada en SEO para la busqueda "cuanto tiempo lleva el Chacho en River".

## Stack

- Astro 5
- Sitio estatico (output `dist/`)

## Scripts

- `npm run dev`: levanta el entorno local
- `npm run build`: genera el build de produccion
- `npm run preview`: sirve el build local para revisar

## Estructura

- `src/pages/index.astro`: pagina principal (H1, contador, metadatos SEO y schema)
- `public/robots.txt`: reglas de crawling
- `public/sitemap.xml`: sitemap del sitio
- `netlify.toml`: configuracion de build/publish para Netlify
- `vercel.json`: headers de seguridad y cache

## Deploy

### Netlify

Este repo incluye `netlify.toml` con:

- `command = "npm run build"`
- `publish = "dist"`

Con eso Netlify despliega correctamente el sitio estatico.

### Vercel

Este repo incluye `vercel.json` con headers de seguridad y politicas de cache.

## SEO implementado

- `title`, `description`, `canonical`, `robots`, `googlebot`
- Open Graph y Twitter Cards
- JSON-LD (`WebSite` + `WebPage`)
- `robots.txt` y `sitemap.xml`

## Nota

Si no ves cambios de favicon o metadatos en el navegador, forzar recarga con `Ctrl + F5` por cache.
