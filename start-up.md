# Start-up para cualquier IA

Usá este archivo como protocolo de arranque antes de crear o refactorizar `AGENTS.md` y `skills`.

## Objetivo

Crear una base profesional, en español y adaptada al proyecto real (no genérica), luego de un análisis completo del repositorio.

## Reglas de trabajo

1. Todo en español claro y profesional.
2. "Hazlo simple, pero no fácil": evitar atajos frágiles.
3. No inventar reglas; derivarlas del código, estructura y convenciones existentes.
4. No romper comportamiento actual del proyecto.
5. Documentación y skills deben reflejar la realidad (si no se cumple, ajustar texto o código).

## Fase 1 - Análisis completo (obligatoria)

Antes de escribir cualquier AGENTS/skill:

- Detectar stack, framework, estructura de carpetas y tipo de proyecto.
- Revisar configuración real (`package.json`, lint, release, build, rutas, etc.).
- Buscar documentación existente (`AGENTS.md`, `notes`, `README`, skills previas).
- Detectar convenciones reales de commits con `git log`.
- Identificar zonas críticas y patrones repetidos del proyecto.

Salida mínima de esta fase:

- Mapa de carpetas clave.
- Reglas verificables (las que sí se pueden cumplir y auditar).
- Lista de skills necesarias y dónde aplican.

## Fase 2 - Diseño de AGENTS.md

Crear jerarquía por contexto:

- `AGENTS.md` en raíz (reglas globales + tabla de skills + auto-invocación).
- `AGENTS.md` por áreas importantes (`src`, `components`, `routes`, `services`, etc.), según corresponda.
- Regla de precedencia: la guía más cercana al código manda.

Cada AGENTS debe incluir:

- alcance,
- reglas específicas,
- auto-invocar skills,
- checklist obligatorio.

## Fase 3 - Diseño de skills

Crear skills accionables (no teóricos):

- ubicación: `skills/<nombre>/SKILL.md`
- frontmatter + trigger claro
- reglas críticas
- checklist rápido
- comandos de validación cuando aplique

Siempre enlazar skills nuevas en `AGENTS.md`.

## Fase 4 - Verificación de coherencia

Auditar que no haya contradicciones entre:

- AGENTS,
- skills,
- configuración real del proyecto,
- comportamiento actual del código.

Si hay conflicto, corregir de inmediato (no dejar “mentiras” en documentación).

## Fase 5 - Validación técnica

Ejecutar validaciones del proyecto (mínimo):

- lint
- typecheck/build (según stack)

Luego resumir cambios por grupos lógicos.

## Entrega esperada

- AGENTS en español, por capas y sin contradicciones.
- Skills profesionales y personalizadas al proyecto.
- Checklist operativo para mantener calidad.
- Resumen claro de qué se creó, por qué y dónde.

