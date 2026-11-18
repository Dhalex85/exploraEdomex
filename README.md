# EXPLORA EDOMEX

Plataforma editorial de exploración y fotografía del Estado de México. React 18, TypeScript, Vite y HashRouter.

## Alcance
Estado de México → Municipio → Localidad opcional → Lugar.
- Axapusco → Xala → Restaurante San Francisco.
- Otumba → Estación del Ferrocarril.

La barra principal es **Inicio · Municipios ▾ · Lugares destacados**. Los municipios se agrupan dentro del menú y cada municipio contiene sus lugares. La galería pertenece a cada ficha; no existe una galería global que envíe a Otumba.

## Desarrollo
- npm install, solo si faltan dependencias.
- npm run dev: desarrollo local.
- npm run build: tipos estrictos y compilación con base raíz.
- npm run build:pages: compilación para /exploraEdomex/.
- npm run preview -- --base=/exploraEdomex/: revisar esa compilación.
No hay configuración de lint. No se añadieron dependencias durante esta reparación.

## Rutas
- /#/ — inicio, con anclas #municipios y #destacados.
- /#/municipios/axapusco
- /#/municipios/otumba
- /#/municipios/axapusco/lugares/restaurante-san-francisco
- /#/municipios/otumba/lugares/estacion-otumba

Se conservan las redirecciones de /destinos/estacion-otumba, /destinos/restaurante-san-francisco y /destinos/mi-restaurante. Las combinaciones inválidas muestran la recuperación de ruta.

## Contenido y fotografías
- src/data/municipalities.ts: municipios y sus portadas.
- src/data/destinations.ts: lugares; municipalitySlug relaciona cada uno con su municipio y location.locality es opcional.
- src/components/FeaturedPlaces.tsx: selección editorial de fichas existentes.
- src/data/assets.ts: BASE_URL para archivos públicos y srcSet.
- src/data/cover.ts: paisaje temporal de referencia, pendiente de sustituir por fotografía propia.
El restaurante conserva nombre y ubicación proporcionados por el equipo. Su portada, tarjetas y galería usan la fotografía real de la fachada proporcionada por el usuario (`assets-src/san-francisco-portada.jpg`), con versiones WebP de 640, 1000 y 1448 px. Regeneración: `node scripts/prepare-san-francisco-cover.mjs`. La galería y el visor muestran la toma completa. No se añadieron horarios, menú ni otros datos sin confirmar. Las imágenes de San Miguel Ometusco no se presentan como fotos de Xala ni del restaurante.

La portada actual usa una fotografía aérea de Villa del Carbón de Oscar Garcia Medina (Pexels), identificada como referencia y acreditada. No añade una ficha al catálogo. Las fotos municipales de Axapusco siguen siendo referencias documentales acreditadas. La estación de Otumba usa exclusivamente las tres fotografías propias aportadas por el equipo: dos.jpg (andén), tres.jpg (entorno) y UNO.jpg (vista cenital), también en las tarjetas del municipio y de destacados. Sus originales permanecen intactos en assets-src/otumba-propias; versiones WebP de 640, 1200, 1920 y 2560 px. Regeneración: node scripts/prepare-otumba-photos.mjs. Galería y visor conservan las tomas completas; las referencias anteriores de la estación se retiraron de la interfaz y los créditos activos.

Regeneración de la portada: node scripts/prepare-aerial-cover.mjs.
Regeneración de fotografías documentales: node scripts/prepare-editorial-images.mjs.
El script antiguo prepare-destination-images.mjs contiene referencias de otros restaurantes: no usarlas como fotos de San Francisco.

Otumba incorpora **Primera edición**, video aéreo propio del equipo, como portada editorial vertical. Reproducción bajo demanda, controles nativos, descripción visual accesible y póster extraído del video. MP4 optimizados de 36.2 MB (608 × 1080) y 14.6 MB (406 × 720, móvil). El original de 302 MB permanece intacto fuera del repositorio; solo se eliminaron sus franjas negras y su pista de audio vacía. Preparación y datos técnicos en public/videos/otumba/README.md. El video se conserva sin cambios al incorporar las tres fotografías nuevas.

## Marca
Logo original en public/images/logo.png, transparente y sin cambios.
SHA-256: d07136c77140cafef61721ba78edf78aaf12ec77f168cf506484f9a81ed76047.
node scripts/prepare-favicon.mjs genera el favicon desde el lente sin sobrescribir el logo.

Blanco/grafito, azul de acción, solar y acentos bugambilia/coral. Georgia para títulos, Archivo para lectura. El movimiento respeta reduced-motion.

## Verificación y entrega
Auditoría y límites en DESIGN-RESCUE.md. TypeScript/build:pages correctos. Inicio, menú agrupado, fichas y destacados revisados en escritorio y móvil; consola sin errores en las vistas comprobadas.
JS principal: 73.83 KB gzip; CSS: 8.74 KB gzip. Reproducción, pausa y selección de la versión móvil comprobadas; ambos MP4 se decodificaron completos sin errores. La portada del restaurante, sus tarjetas y la galería se comprobaron en escritorio y móvil; original conservado sin cambios. Las tres fotografías nuevas de Otumba se verificaron en el visor y sus originales se cotejaron mediante SHA-256. No se midieron Lighthouse/Core Web Vitals ni dispositivos físicos.

Capturas actuales: C:/Users/dany/.codex/visualizations/2026/11/17/01a1eaa6-e1cb-7743-ad83-133e0d617d5f/reparacion-edomex/

El servidor de desarrollo sigue disponible para revisión local. El usuario autorizó expresamente el commit y push de esta entrega junto con el video de Otumba. Los próximos pushes requieren una nueva indicación.
