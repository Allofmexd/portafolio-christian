# Portafolio — Christian Alfredo Rincon De La Cruz

Landing personal de una página. HTML5, CSS3 y JavaScript Vanilla, sin frameworks, dependencias npm, backend o pasos de compilación. Proyecto independiente de Bitácora Stack y MechSync.

Sitio público: [Portafolio de Christian](https://allofmexd.github.io/portafolio-christian/).
Repositorio: [Allofmexd/portafolio-christian](https://github.com/Allofmexd/portafolio-christian).

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

## Publicación en GitHub Pages

Repositorio público independiente con rama `main` y remote `origin` en https://github.com/Allofmexd/portafolio-christian.git.

Configuración: Settings → Pages → Build and deployment → **Deploy from a branch** → **main** → **/ (root)**. La raíz contiene index.html y .nojekyll; no hay framework, npm, compilación ni workflow personalizado. GitHub administra el despliegue estándar de Pages.

Para publicar actualizaciones autorizadas desde esta carpeta:

```powershell
git add ARCHIVOS_MODIFICADOS
git commit -m "Descripción concreta del cambio"
git push origin main
```

Esperar que Pages termine y comprobar la URL pública. Canonical y og:url apuntan a https://allofmexd.github.io/portafolio-christian/. No se añade og:image: la única captura existente muestra otro proyecto y no es una portada social del portafolio. Una imagen social propia puede incorporarse posteriormente.

Los assets emplean rutas relativas compatibles con el prefijo /portafolio-christian/.

- [Decisiones de diseño y evidencia](docs/DESIGN_NOTES.md).
- [Pruebas locales y de producción](docs/QA.md).
- [Configurar la fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
