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

## Publicación futura

Faltan el repositorio remoto autorizado y la URL pública definitiva. Canonical/og:url se añaden entonces. Repetir navegación, recursos y revisión responsive en producción; el sitio actual ya está terminado y probado localmente. No requiere build ni npm.
