# EXPLORA EDOMEX — estado del diseño y reparación

## Navegación vigente
La barra contiene únicamente **Inicio · Municipios ▾ · Lugares destacados**.
Axapusco y Otumba aparecen dentro de Municipios. El listado se genera desde los datos: incorporar municipios no añade entradas al primer nivel.

Jerarquía conservada: Estado de México → Municipio → Localidad opcional → Lugar.
- Axapusco → Xala → Restaurante San Francisco.
- Otumba → Estación del Ferrocarril.

El menú de escritorio usa un disclosure nativo y cierra con Escape, selección o clic exterior. En móvil se usa un diálogo con foco, Tab/Shift+Tab, Escape y bloqueo del fondo; Municipios agrupa sus opciones. Los enlaces a lugares mantienen sus rutas canónicas. La galería sigue dentro de cada lugar. El nuevo acceso a destacados conduce a una selección editorial de las dos fichas existentes.

## Reparación
Una actualización de componentes quedó visible antes de recibir los estilos correspondientes: el encabezado, el hero y las nuevas tarjetas perdieron proporciones. Se completaron sus estilos, se corrigió el selector de movimiento que apuntaba a un elemento retirado y se verificaron las páginas completas. No se reconstruyó la aplicación ni se añadieron dependencias.

## Dirección visual
Portada: “Edomex, a otra altura”. Paisaje aéreo de referencia de Villa del Carbón, identificado y acreditado. Fotografía dominante, tipografía editorial Georgia, lectura Archivo y logo oficial transparente.
- Blanco #FFFFFF y gris #F7F8FA para superficies.
- Grafito #252525 para texto.
- Azul #285DE5 para la acción de portada.
- Solar #F4C34E para detalles; bugambilia #A74483 y coral #F15A38 en las tarjetas.
La identidad no implica presentar las fotos temporales como material propio.

La portada de inicio y las fotografías municipales de Axapusco son referencias acreditadas. El video de Otumba, sus tres nuevas fotografías aéreas de la estación y la fachada del Restaurante San Francisco son material propio proporcionado por el equipo. Las fotografías anteriores de la estación se sustituyeron en su ficha, galería, tarjetas y créditos activos. La galería conserva las proporciones completas de las fotos propias. El restaurante conserva únicamente los datos confirmados de nombre y ubicación y una descripción de lo visible en la foto.

## Video de Otumba
Primera edición se integra en la portada del municipio, con composición editorial de texto y reproductor vertical. El encuadre conserva toda la imagen útil del original; solo se retiran las franjas negras laterales. Póster real del segundo 8, reproducción voluntaria, pausa y controles nativos. No hay autoplay ni reproducción en bucle. Descripción visual desplegable para accesibilidad; el original contiene una pista de audio completamente vacía.

Versiones H.264 faststart de 36.2 MB y 14.6 MB para móvil; preload none evita descargar el video al entrar. La ruta usa BASE_URL de Vite. El original de 302 MB y el logo permanecen intactos. Las herramientas y los archivos intermedios quedan fuera del repositorio. Datos y comandos: public/videos/otumba/README.md.

La cámara responde al cursor en escritorio y el paisaje acompaña el scroll. El marco y el avance son decorativos, sin datos ficticios de vuelo. Las animaciones se omiten con reduced-motion; GSAP y sus listeners se revierten al desmontar.

## Material gráfico
- Portada temporal: Oscar Garcia Medina / Pexels, https://www.pexels.com/photo/scenic-landscape-of-a-lake-12302974/
- Licencia: https://www.pexels.com/license/
- Fuente local: assets-src/villa-del-carbon-reference.jpg.
- Versiones: aerial-cover-800/1600/2400.webp y aerial-cover-mobile.webp.
- Regeneración: node scripts/prepare-aerial-cover.mjs.
- Villa del Carbón solo identifica la portada de referencia; no crea una ficha ni un municipio adicional.
- Las imágenes documentales de Axapusco conservan sus créditos/licencias. Otumba usa las tres fotos propias de assets-src/otumba-propias; regeneración con scripts/prepare-otumba-photos.mjs. Los originales y el video permanecen intactos.
- Logo original intacto: SHA-256 d07136c77140cafef61721ba78edf78aaf12ec77f168cf506484f9a81ed76047.
- Favicon del lente oficial; script prepare-favicon.mjs no modifica el logo.

## Verificación
- TypeScript y build de GitHub Pages correctos; base raíz revisada en desarrollo.
- Inicio, desplegable, municipios, fichas y enlaces de destacados comprobados.
- Escritorio 1440 × 960 y móviles 390 × 844 / 320 × 740 revisados; sin desbordamiento horizontal en las vistas comprobadas.
- Jerarquía Municipio → Lugar y localidad Xala verificadas; fotografía real del restaurante incorporada y galería de una imagen sin controles de navegación redundantes.
- Menú con teclado, Escape, devolución de foco y ciclo Tab/Shift+Tab comprobados.
- Consolas revisadas sin errores ni advertencias, también en la compilación bajo /exploraEdomex/.
- Historial y anclas conservan el comportamiento de la reparación previa.
- JS principal: 73.83 KB gzip; CSS: 8.74 KB gzip; módulos de movimiento: 46.39 KB gzip bajo demanda.
- Video de Otumba: reproducción y pausa con teclado, versión móvil, póster, navegación a la estación y decodificación completa de ambos MP4 comprobados. Revisión adicional bajo la base de GitHub Pages.
- Portada móvil: unos 110 KB. El PNG original del logo pesa 1.43 MB y se conserva.
No se midieron Lighthouse/Core Web Vitals, no se probaron dispositivos físicos y la auditoría manual no es una certificación WCAG.

Skills aplicadas: frontend-design, responsive-design, web-design-guidelines y prácticas React compatibles con React 18. No se ejecutaron scripts externos desconocidos.

Capturas vigentes: C:/Users/dany/.codex/visualizations/2026/11/17/01a1eaa6-e1cb-7743-ad83-133e0d617d5f/reparacion-edomex/

Entrega con commit y push autorizados expresamente por el usuario al solicitar el video de Otumba. Cualquier push posterior requiere una nueva indicación.
