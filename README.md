# EXPLORA EDOMEX

Plataforma editorial de exploración fotográfica en React 18, TypeScript y Vite. Esta versión contiene exclusivamente:
- Estado de México → Axapusco → Xala → Restaurante San Francisco.
- Estado de México → Otumba → Estación del Ferrocarril.

## Desarrollo
- `npm install` solo si faltan dependencias.
- `npm run dev`: servidor local.
- `npm run build`: TypeScript estricto y compilación con base raíz.
- `npm run build:pages`: compilación para `/exploraEdomex/`.
- `npm run preview -- --base=/exploraEdomex/`: inspeccionar ese resultado.
No hay configuración de lint. No se añadieron paquetes durante el rescate visual.

## Rutas
Se conserva HashRouter, compatible con enlaces directos y recargas en hosting estático:
- `/#/`
- `/#/municipios/axapusco`
- `/#/municipios/otumba`
- `/#/municipios/axapusco/lugares/restaurante-san-francisco`
- `/#/municipios/otumba/lugares/estacion-otumba`

Las rutas anteriores `/destinos/estacion-otumba`, `/destinos/restaurante-san-francisco` y `/destinos/mi-restaurante` redirigen a las fichas correspondientes. Una combinación incorrecta de municipio y lugar muestra la página de recuperación.

## Contenido y fotografías
- `src/data/municipalities.ts`: portadas y datos de Axapusco y Otumba.
- `src/data/destinations.ts`: las dos fichas de lugares.
- `municipalitySlug` vincula cada ficha con su municipio.
- `location.locality` es opcional; en el restaurante es Xala.
- `src/data/assets.ts` respeta `import.meta.env.BASE_URL` para fotos, logo y srcSet.

El Restaurante San Francisco tiene su nombre y ubicación proporcionados por el equipo. Sus fotos y descripción confirmada siguen pendientes. No se presentan imágenes de otros restaurantes como suyas. Las imágenes municipales de Axapusco corresponden a San Miguel Ometusco, con ese nombre visible; no se rotulan como Xala ni como el restaurante.

Para completar la ficha del restaurante:
1. Colocar sus fotografías confirmadas en `public/images/destinos/restaurante-san-francisco/`.
2. Registrar dimensiones reales, versiones responsivas, texto alternativo, pie y crédito/licencia en un objeto Photo.
3. Incorporar `hero`, `gallery`, descripción confirmada y datos prácticos opcionales con `sourceUrl`.
4. Cambiar `status` de `pending` a `ready` al completar la ficha y revisar el navegador.

`node scripts/prepare-editorial-images.mjs` genera versiones WebP de las fotografías documentales ya existentes; no procesa el logo. El script antiguo `prepare-destination-images.mjs` incluye imágenes de referencia de restaurantes: no usarlas como fotografías del Restaurante San Francisco.

## Identidad vigente: México Vivo
La estructura y composición se basan en la referencia visual proporcionada. La última dirección cromática sustituye la paleta petróleo/mineral/cobre:
- Fondo principal: blanco puro #FFFFFF; fondo secundario: gris luminoso #F7F8FA.
- Acciones principales: coral #F15A38 con texto oscuro accesible.
- Títulos y acentos: bugambilia #A74483.
- Apoyo decorativo: amarillo solar #E8A83D.
- Verde #517D39 y azul #3769C8 reservados para usos puntuales, como detalles y foco de teclado.

La tipografía combina Georgia para titulares, Archivo para lectura y navegación e Instrument Serif en detalles. El texto principal es grafito #252525. Hay superposiciones blancas en portada, franjas coral/bugambilia en las tarjetas y movimiento discreto que respeta reduced-motion.

`public/images/logo.png` se conserva intacto, con transparencia y proporción 3:1. Su SHA-256 es `d07136c77140cafef61721ba78edf78aaf12ec77f168cf506484f9a81ed76047`.

## Verificación
Se comprobaron compilación, tipos estrictos, relación entre municipio y lugar, dimensiones reales de imágenes/srcSet, base raíz y GitHub Pages, navegación y redirecciones. Se inspeccionaron escritorio y móvil, galería con teclado/Escape y restitución del foco, y consola de producción.

En México Vivo, los contrastes calculados son: grafito sobre coral 4.57:1, blanco sobre coral de hover 4.71:1, bugambilia sobre blanco 5.53:1 y texto secundario sobre gris luminoso 5.59:1. No constituyen una certificación completa de accesibilidad.

JavaScript de producción: aproximadamente 69 KB gzip; CSS: 5.57 KB gzip. Las imágenes tienen carga diferida fuera de portada y tamaños responsivos. El PNG oficial se conserva sin recomprimir. No se midieron Lighthouse, LCP o CLS ni dispositivos físicos.

Las capturas están en `C:/Users/dany/.codex/visualizations/2026/11/17/01a1eaa6-e1cb-7743-ad83-133e0d617d5f/mexico-vivo-blanco/`.
No se publicó el sitio ni se cambió el remoto.
