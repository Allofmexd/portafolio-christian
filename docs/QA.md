# Verificación local

Fecha: 12 de octubre de 2026 (America/Mexico_City). Windows, Edge Chromium headless mediante Python Playwright. Servidores estáticos Python temporales, detenidos al terminar. Herramientas, capturas y resultados axe fuera del repositorio, en la carpeta temporal `portfolio-review`.

## Resultados

| Prueba | Resultado |
|---|---|
| Responsive | 320, 375, 768, 1024, 1440 y 1920 px: sin overflow horizontal global. |
| Revisión visual | Capturas completas de los seis anchos; inspección de escritorio y móvil. Hero, cards, lectura y gráficos correctos. |
| Rutas relativas | Raíz `/` y prefijo `/portafolio-christian/`: página y todos los recursos HTTP 200. |
| Imágenes/fuente/iconos | Captura WebP cargada, dimensiones declaradas, Montserrat WOFF2 local y sprites SVG correctos. |
| Menú móvil | Estado inicial cerrado con JS, apertura, cierre Escape, retorno de foco y cierre al elegir enlace correctos. |
| Breakpoints | Menú visible en escritorio. Cambio a móvil con foco en un enlace devuelve foco al botón antes de ocultar el menú. |
| Anchors | Inicio, Sobre mí, Habilidades, Proyectos y Contacto funcionan; selección móvil lleva el foco a la sección y conserva el anchor nativo. |
| Teclado | Skip link primero en tabulación, Enter enfoca main; focus visible, botones nativos, enlaces operables. |
| Sección activa | Contacto recibe aria-current="location" al llegar al final; un único enlace activo. |
| Sin JS | 320 y 1440 px: contenido completo, navegación visible, anchors funcionales y sin overflow. |
| Movimiento reducido | scroll-behavior auto y animación del hero deshabilitada. |
| Accesibilidad automatizada | Axe-core, tags wcag2a/wcag2aa/wcag21a/wcag21aa/wcag22aa: cero violaciones en 1440 px y 375 px con menú abierto. |
| Consola/recursos | Cero pageerror JavaScript y cero respuestas de recursos con HTTP >= 400. |
| HTML/metadatos | lang es-MX, UTF-8, viewport, un H1, cinco secciones principales, IDs únicos, referencias y anchors válidos, author y Open Graph presentes. |
| Enlaces externos | Los seis destinos únicos (perfil, cuatro repositorios y sitio Bitácora Stack) responden HTTP 200; enlaces target blank tienen noopener noreferrer y aviso accesible. |
| Exactitud del contenido | Datos personales del encargo; evidencia pública de MechSync registrada con commits en DESIGN_NOTES. Sin datos de contacto, credenciales o proyectos inventados. |

La revisión automatizada más la inspección manual no equivalen a certificación WCAG completa. No se ejecutó un validador HTML normativo ni una auditoría con lector de pantalla. No se mide rendimiento de producción antes de existir un despliegue real.

## Verificación de producción — 12 de octubre de 2026

Sitio: https://allofmexd.github.io/portafolio-christian/.
Repositorio público: https://github.com/Allofmexd/portafolio-christian.

Se comprobó autenticación Allofmexd, repositorio inicialmente inexistente y working tree limpio en main antes de crearlo. Se revisaron los 14 archivos versionados y patrones habituales de credenciales: no se encontraron archivos privados ni secretos. Se conservó Montserrat y su licencia. Se volvieron a ejecutar las pruebas locales y `node --check assets/js/main.js` antes de publicar.

GitHub Pages configurado mediante CLI/API: build_type legacy (Deploy from a branch), rama main y carpeta /. HTTPS habilitado. El despliegue estándar administrado por GitHub terminó con success/built para `9a6a91c37b99b68f42a46c3350292ab21091777c` (run 38249283196). No existe workflow personalizado, framework ni paso de compilación del sitio.

| Prueba pública | Resultado |
|---|---|
| Homepage | HTTP 200; HTML público idéntico a index.html local de la revisión medida. |
| Recursos | Dos CSS, JS, WOFF2 Montserrat, sprite SVG, favicon SVG y WebP con HTTP 200. |
| Prefijo | Las ocho peticiones observadas en navegador corresponden al mismo host y permanecen bajo /portafolio-christian/. |
| Fuente | FontFace Montserrat en estado loaded; no se usa una petición externa de fuentes. |
| Responsive | 320, 375, 768, 1024, 1440 y 1920 px sin overflow global; capturas completas generadas. Inspección visual de escritorio coherente con la versión local. |
| Navegación | Cinco anchors, menú móvil, Escape, retorno de foco, selección de sección y cambios de breakpoint correctos. |
| Accesibilidad | Skip link y foco correctos; axe-core con los mismos tags A/AA de la prueba local: cero violaciones a 1440 px y a 375 px con menú abierto. |
| Sin JavaScript | 320 y 1440 px: navegación expandida, contenido legible y anchor de proyectos funcional. |
| Movimiento reducido | Scroll suave y animación de entrada desactivados. |
| Consola | Cero errores de aplicación JS, cero mensajes console.error y cero recursos HTTP >= 400. |
| Enlaces externos | Perfil GitHub, repositorio Bitácora Stack, sitio Bitácora Stack y los tres repositorios MechSync responden HTTP 200. |
| Metadatos | Canonical y og:url coinciden con la URL pública; title, description, author, og:title/description/type y lang es-MX conservados. |

La prueba de carga diferida espera que la imagen complete su descarga después de hacer scroll; no confunde la espera de red con un recurso roto. No se añadió og:image porque la captura existente representa Bitácora Stack, no una portada del portafolio. No se crearon sitemap, robots, formularios ni nuevas secciones.

Los informes axe y capturas públicos se guardaron fuera del repositorio en la carpeta temporal `portfolio-production`. Las pruebas no equivalen a certificación WCAG completa ni medición de Core Web Vitals. No se encontraron problemas pendientes que bloqueen la entrega.

## Mejoras futuras opcionales

Imagen social propia, fotografía personal real y otros medios de contacto solo cuando el usuario los confirme. Las notas de publicación pendiente de DESIGN_NOTES describen el estado anterior a esta fase; este registro y README documentan la publicación realizada.
