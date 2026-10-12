# Decisiones de diseño y contenido

Fecha: 12 de octubre de 2026 (America/Mexico_City).

## Dirección visual

Identidad editorial tecnológica: monograma CR, punto azul pastel, tipografía Montserrat variable, hero oscuro y una composición de código puramente decorativa. No se utiliza una fotografía ficticia. El nombre completo, carrera y descripción son texto accesible independiente del gráfico.

Paleta principal del encargo: azul oscuro #2d3142, lavanda #eae8ff, azul pastel #b0d7ff, gris lavanda #d8d5db y blanco. #adacb5 se reserva para detalles decorativos, no para texto de lectura sobre blanco. El texto secundario usa #5c6072. Secciones amplias, tarjetas redondeadas, líneas finas, sombras discretas y espaciado negativo; las tarjetas de proyectos alternan texto y visual en escritorio y se apilan en móvil.

Sobre mí utiliza información académica discreta. Habilidades agrupa tecnologías por uso y vincula su contexto a los proyectos, sin porcentajes ni niveles. El contacto tiene una composición completa con GitHub, sin formulario simulado. Se utiliza una animación breve de entrada y se respeta movimiento reducido.

Menú: navegación sticky, botón nativo con aria-expanded/aria-controls, cierre con Escape y retorno de foco, cierre al elegir un anchor, cambio de breakpoint y pulsación exterior. No es un modal ni atrapa el foco. Sin JS, los enlaces quedan visibles. La sección activa usa aria-current="location" y cálculo de posición con scroll pasivo/requestAnimationFrame; no es necesaria para navegar.

## Evidencia de MechSync

Se consultaron anónimamente los tres repositorios públicos el 12 de octubre de 2026: README, árboles de archivos, dependencias, rutas, modelos y SQL. No se copiaron código, configuración ni datos de esos proyectos al portafolio.

| Componente | Revisión observada | Evidencia y alcance usado |
|---|---|---|
| Backend | `87f098c0311f4425e252c96e9c46ea2f79e26061` | [pom.xml](https://github.com/Allofmexd/mechsync-backend/blob/87f098c0311f4425e252c96e9c46ea2f79e26061/pom.xml): Java 17, Spring Boot 3.5.14, JPA, Spring Security, MySQL Connector y JJWT. [README](https://github.com/Allofmexd/mechsync-backend/blob/87f098c0311f4425e252c96e9c46ea2f79e26061/README.md): API REST, login JWT y roles. [WorkOrderController](https://github.com/Allofmexd/mechsync-backend/blob/87f098c0311f4425e252c96e9c46ea2f79e26061/src/main/java/com/mechsync/modules/workorders/web/controller/WorkOrderController.java): consultas/operaciones sobre órdenes con restricciones por rol. [Customer](https://github.com/Allofmexd/mechsync-backend/blob/87f098c0311f4425e252c96e9c46ea2f79e26061/src/main/java/com/mechsync/modules/customers/domain/model/Customer.java): modelo de cliente. |
| Frontend | `a9a6ac4575cf999036a1a1ca79f3c66e8edb38c5` | [package.json](https://github.com/Allofmexd/mechsync-frontend/blob/a9a6ac4575cf999036a1a1ca79f3c66e8edb38c5/package.json): React 19, Vite 6 y React Router. [README](https://github.com/Allofmexd/mechsync-frontend/blob/a9a6ac4575cf999036a1a1ca79f3c66e8edb38c5/README.md): operación administrativa/técnica. [AppRouter](https://github.com/Allofmexd/mechsync-frontend/blob/a9a6ac4575cf999036a1a1ca79f3c66e8edb38c5/src/app/AppRouter.jsx) y [workOrdersService](https://github.com/Allofmexd/mechsync-frontend/blob/a9a6ac4575cf999036a1a1ca79f3c66e8edb38c5/src/features/workOrders/workOrdersService.js): vistas de clientes/vehículos/órdenes, rutas protegidas y consumo de API. |
| Database | `db5b8c7bae61bb23bd4b789bf789e0b646f75113` | No tiene README raíz; se revisaron `v1/docs/README.md` (placeholder) y [v2/README](https://github.com/Allofmexd/mechsync-database/blob/db5b8c7bae61bb23bd4b789bf789e0b646f75113/v2/README.md). [Migraciones v1](https://github.com/Allofmexd/mechsync-database/tree/db5b8c7bae61bb23bd4b789bf789e0b646f75113/v1/migrations): SQL MySQL/InnoDB, roles, clientes, técnicos, vehículos y órdenes; se inspeccionaron 001, 002, 003 y 007. Claves foráneas y relación orden → ingreso → vehículo. |

La descripción sintetiza esas capacidades observadas en código; no certifica ejecución, seguridad o disponibilidad de una instalación. Algunos README conservan notas anteriores: el frontend declara ausente el portal CLIENTE, pero el árbol y router ya incluyen componentes; la base v2 se describe como propuesta aislada. Por eso no se anuncia ese portal ni se afirma que v2 esté aplicada en producción. No se anuncian inventario, citas, pagos, registro público ni una demo. React/Vite se mencionan como habilidades/proyecto verificados, pero no son dependencias de este portafolio.

El diagrama de MechSync es una representación conceptual original hecha con HTML/CSS/SVG, no una captura de su producto ni una copia de su identidad.

## Bitácora Stack y recursos

Descripción y funcionalidades provienen del encargo y del proyecto verificado previamente. Se conserva el enlace real a [sitio](https://allofmexd.github.io/bitacora-stack/) y [repositorio](https://github.com/Allofmexd/bitacora-stack). `bitacora-stack.webp` es una captura auténtica de la homepage pública, tomada a 1200×800 el 12 de octubre de 2026; conversión WebP de la captura, sin contenido fabricado.

Montserrat: descargada desde Google Fonts, [familia](https://fonts.google.com/specimen/Montserrat), [licencia original](https://github.com/google/fonts/blob/main/ofl/montserrat/OFL.txt). Se aloja el subset latino variable WOFF2 y la licencia íntegra en assets/fonts. No hay requests externos de fuentes. Favicon CR e iconos lineales son SVG originales del portafolio.

## Pendientes reales

- Autorizar creación de repositorio remoto y publicación posterior, elegir su nombre y conocer la URL definitiva.
- Añadir canonical y og:url reales después de configurar GitHub Pages. OG básico ya existe; imagen social absoluta opcional tras publicar.
- Fotografía personal únicamente si el usuario desea aportarla en el futuro; el hero actual está terminado.
- Incorporar correo u otros contactos solo si el usuario los confirma.
- Mantener la descripción de MechSync al evolucionar sus repositorios. No atribuir porcentajes de autoría ni nivel de dominio no verificados.
