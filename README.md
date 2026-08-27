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
- `src/pages/sitemap.xml.ts`: sitemap generado en build con `lastmod` real
- `src/lib/days-counter.ts`: calculo de dias compartido entre build y cliente
- `netlify.toml`: build, publish y headers de seguridad/cache
- `.github/workflows/daily-rebuild.yml`: redeploy diario para refrescar el contador

## Deploy

### Netlify

Este repo incluye `netlify.toml` con:

- `command = "npm run build"`
- `publish = "dist"`
- headers de seguridad (CSP, HSTS, X-Frame-Options) y politicas de cache

El sitio vive en https://coudetenriver.site/

El contador se hornea en el HTML en tiempo de build, asi que el deploy diario
(`.github/workflows/daily-rebuild.yml`) mantiene el numero al dia. Ese workflow
necesita el secret `DEPLOY_HOOK_URL` con un build hook de Netlify.

## SEO implementado

- `title`, `description`, `canonical`, `robots`, `googlebot`
- Open Graph y Twitter Cards
- JSON-LD (`WebSite` + `WebPage` + `FAQPage`)
- Respuesta renderizada en el HTML servido, sin depender de JS
- `robots.txt` y `sitemap.xml`

## Nota

Si no ves cambios de favicon o metadatos en el navegador, forzar recarga con `Ctrl + F5` por cache.
