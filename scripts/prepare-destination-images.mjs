/**
 * Genera las imágenes optimizadas de la primera versión de Explora Edomex.
 *
 * Origen: assets-src/ (originales de trabajo, no se publican tal cual).
 * Destino: public/images/site, public/images/destinos/<slug>/
 *
 * Uso: node scripts/prepare-destination-images.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets-src");
const OUT = path.join(ROOT, "public", "images");

const treatment = (image) =>
  image
    .rotate()
    .modulate({ saturation: 0.9, brightness: 1.01 })
    .linear(1.03, -2)
    .sharpen({ sigma: 0.55 })
    .webp({ quality: 80, effort: 5, smartSubsample: true });

async function render({ file, out, width, height, position = "center", quality }) {
  const dest = path.join(OUT, out);
  await mkdir(path.dirname(dest), { recursive: true });
  let image = sharp(path.join(SRC, file)).resize(width, height, {
    fit: "cover",
    position,
  });
  if (quality) image = image.webp({ quality, effort: 5 });
  else image = treatment(image);
  await image.toFile(dest);
  console.log(`  ✓ ${out.replace(/\\/g, "/")} (${width}×${height})`);
}

console.log("Sitio");
await render({ file: "hero.jpg", out: "site/hero-2800.webp", width: 2800, height: 1575 });
await render({ file: "hero.jpg", out: "site/hero-1600.webp", width: 1600, height: 900 });
await render({ file: "hero.jpg", out: "site/og-explora-edomex.jpg", width: 1200, height: 630, quality: 82 });

console.log("Mi Restaurante");
await render({ file: "gastro.jpg", out: "destinos/mi-restaurante/hero-1600.webp", width: 1600, height: 2133 });
await render({ file: "gastro.jpg", out: "destinos/mi-restaurante/hero-1000.webp", width: 1000, height: 1333 });

await render({ file: "gastro-detail.jpg", out: "destinos/mi-restaurante/plato-1200.webp", width: 1200, height: 1200 });
await render({ file: "gastro-detail.jpg", out: "destinos/mi-restaurante/plato-800.webp", width: 800, height: 800 });
await render({ file: "otumba-chilaquiles.jpg", out: "destinos/mi-restaurante/chilaquiles-1600.webp", width: 1600, height: 1067 });
await render({ file: "otumba-chilaquiles.jpg", out: "destinos/mi-restaurante/chilaquiles-1000.webp", width: 1000, height: 667 });
await render({ file: "mole-fiesta.jpg", out: "destinos/mi-restaurante/mole-1200.webp", width: 1200, height: 1600 });
await render({ file: "mole-fiesta.jpg", out: "destinos/mi-restaurante/mole-800.webp", width: 800, height: 1067 });
await render({ file: "tacos-barbacoa.jpg", out: "destinos/mi-restaurante/tacos-1200.webp", width: 1200, height: 1500 });
await render({ file: "tacos-barbacoa.jpg", out: "destinos/mi-restaurante/tacos-800.webp", width: 800, height: 1000 });
await render({ file: "cocina-chiapas.jpg", out: "destinos/mi-restaurante/cocina-1200.webp", width: 1200, height: 1600 });
await render({ file: "cocina-chiapas.jpg", out: "destinos/mi-restaurante/cocina-800.webp", width: 800, height: 1067 });
await render({ file: "restaurante-interior.jpg", out: "destinos/mi-restaurante/comedor-1000.webp", width: 1000, height: 1333 });
await render({ file: "restaurante-interior.jpg", out: "destinos/mi-restaurante/comedor-700.webp", width: 700, height: 933 });
await render({ file: "mole-poblano.jpg", out: "destinos/mi-restaurante/mole-poblano-1600.webp", width: 1600, height: 1200 });
await render({ file: "mole-poblano.jpg", out: "destinos/mi-restaurante/mole-poblano-1000.webp", width: 1000, height: 750 });

console.log("Estación de Otumba");
await render({ file: "otumba-estacion.jpg", out: "destinos/estacion-otumba/hero-1920.webp", width: 1920, height: 1280 });
await render({ file: "otumba-estacion.jpg", out: "destinos/estacion-otumba/hero-1200.webp", width: 1200, height: 800 });
await render({ file: "otumba-estacion.jpg", out: "destinos/estacion-otumba/vias-900.webp", width: 900, height: 1200, position: "left" });
await render({ file: "otumba-museo.jpg", out: "destinos/estacion-otumba/museo-1600.webp", width: 1600, height: 1067 });
await render({ file: "otumba-museo.jpg", out: "destinos/estacion-otumba/museo-1000.webp", width: 1000, height: 667 });
await render({ file: "otumba-letras.jpg", out: "destinos/estacion-otumba/letras-1600.webp", width: 1600, height: 1067 });
await render({ file: "otumba-letras.jpg", out: "destinos/estacion-otumba/letras-1000.webp", width: 1000, height: 667 });
await render({ file: "otumba.jpg", out: "destinos/estacion-otumba/plaza-1200.webp", width: 1200, height: 1500 });
await render({ file: "otumba.jpg", out: "destinos/estacion-otumba/plaza-800.webp", width: 800, height: 1000 });
await render({ file: "experiencias.jpg", out: "destinos/estacion-otumba/burrolandia-1200.webp", width: 1200, height: 800 });
await render({ file: "experiencias.jpg", out: "destinos/estacion-otumba/burrolandia-800.webp", width: 800, height: 533 });

console.log("\nListo: imágenes nuevas en public/images/site y public/images/destinos.");
