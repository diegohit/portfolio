# Portfolio de Diego Cárdenas Mora

Primera versión funcional basada en el wireframe de Figma.

## Cómo verla

1. Abre esta carpeta en VS Code.
2. Ejecuta `npm run build` para generar las páginas estáticas de los case studies.
3. Abre `index.html`.
4. Haz clic derecho dentro del archivo y elige **Open with Live Server**.

Si no aparece esa opción, instala la extensión **Live Server** desde la pestaña
Extensions de VS Code. También puedes abrir `index.html` directamente en un
navegador, aunque Live Server actualiza la página automáticamente al guardar.

## SEO y páginas estáticas

Los case studies crawlables se generan desde `project-data.js` con:

```bash
npm run build
```

Esto crea:

- `projects/rural-healthcare/index.html`
- `projects/app-redesign/index.html`
- `projects/whatsapp-appointments/index.html`
- `projects/maternal-health/index.html`
- `sitemap.xml`
- `robots.txt`

En Netlify, usa este build command:

```bash
npm run build
```

El publish directory sigue siendo la raíz del proyecto. Si el dominio final no
es `https://dcm-design-portfolio.netlify.app`, configura la variable de entorno `SITE_URL`
con el dominio real antes de hacer build.

## Qué archivo hace qué

- `index.html`: contiene el home y los links a los proyectos.
- `project-data.js`: contiene la data y el render interactivo de los case studies.
- `scripts/generate-static-pages.mjs`: genera las páginas estáticas crawlables.
- `styles.css`: controla colores, tipografía, tamaños y adaptación a móvil.
- `script.js`: añade las pequeñas interacciones.

## Contenido pendiente

- Sustituir el retrato provisional.
- Reemplazar los tres proyectos de ejemplo por proyectos reales.
- Escribir la biografía definitiva.
- Añadir enlaces reales a CV, LinkedIn y Behance.
- Confirmar el correo de contacto.
