# Portafolio — Christian Alfredo Rincon De La Cruz

Landing personal de una página. HTML5, CSS3 y JavaScript Vanilla, sin frameworks, dependencias npm, backend o pasos de compilación. Proyecto independiente de Bitácora Stack y MechSync.

## Vista local

Desde esta carpeta, con Python instalado:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8080/. Detener con Ctrl+C. También puede utilizarse un servidor estático de un editor. No es necesario instalar paquetes. La navegación y el contenido esencial funcionan sin JavaScript; el menú móvil se presenta expandido en ese caso.

## Archivos

```text
index.html                       Contenido, navegación y metadatos
assets/css/styles.css            Identidad y estilos Mobile First
assets/css/responsive.css        Adaptaciones de tablet y escritorio
assets/js/main.js                Menú, sección activa y año
assets/icons/favicon.svg         Favicon CR original
assets/icons/sprite.svg          Iconografía SVG original
assets/images/bitacora-stack.webp Captura real del sitio publicado
assets/fonts/                    Montserrat variable local y licencia OFL
docs/DESIGN_NOTES.md              Diseño, evidencia y mantenimiento
docs/QA.md                       Registro de verificación
.nojekyll                        Publicación estática en GitHub Pages
.gitignore                       Exclusiones locales
```

## Contenido y mantenimiento

Los datos personales proceden del encargo: nombre, matrícula 251190, carrera y ubicación. GitHub es el único medio de contacto confirmado. No se atribuyen niveles de dominio, experiencia laboral ni credenciales no proporcionadas.

Los dos proyectos están en HTML para que permanezcan legibles sin JavaScript. Para incorporar otro, añadir un `article.project-card` con descripción verificada, imagen propia y enlaces reales. La composición del hero es decorativa; el comentario junto a `.hero-art` señala dónde incorporar una fotografía real con dimensiones y alt. No se muestra un espacio vacío al visitante.

Montserrat se aloja localmente (subset latino variable, 37,956 bytes, licencia SIL OFL incluida). La página no solicita Google Fonts ni analítica. Ver fuentes y decisiones en [DESIGN_NOTES](docs/DESIGN_NOTES.md).

## Publicar posteriormente en GitHub Pages

El repositorio Git local tiene rama `main`. No tiene remote y no se ha publicado. Cuando se autorice:

1. Crear un repositorio GitHub independiente con el nombre definitivo elegido por el usuario.
2. Añadir la URL real como `origin` y hacer push de `main` desde esta carpeta.
3. En Settings → Pages, elegir Deploy from a branch → `main` → `/ (root)`.
4. Esperar el despliegue y obtener la URL definitiva de GitHub Pages.
5. Añadir entonces `link rel="canonical"` y `meta property="og:url"` absolutos en `index.html`, con la URL pública real. Opcionalmente preparar una imagen OG propia y su URL absoluta.
6. Volver a comprobar navegación, recursos, metadatos y responsive contra la URL publicada.

Referencia: [configurar la fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Los assets emplean rutas relativas y no necesitan cambiarse para un prefijo de repositorio. No se inventa una dirección pública, no se instala integración de hosting y no se automatiza un push sin autorización posterior.
