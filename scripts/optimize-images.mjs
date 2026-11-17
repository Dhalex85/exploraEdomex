/**
 * Genera las imágenes optimizadas del sitio a partir de los originales
 * guardados en assets-src/ (no versionados en el build).
 *
 * Uso: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets-src");
const OUT = path.join(ROOT, "public", "images");

const sizes = [
  { name: "hero", file: "hero.jpg", w: 2400, h: 1350, position: "center", alt: 1600 },
  { name: "intro-bosque", file: "intro.jpg", w: 1200, h: 1500, position: "center", alt: 800 },
  { name: "axapusco-altura", file: "axapusco.jpg", w: 1600, h: 1000, position: "center", alt: 1100 },
  { name: "otumba-plaza", file: "otumba.jpg", w: 1000, h: 1250, position: "center", alt: 700 },
  { name: "cat-destinos", file: "agave.jpg", w: 1000, h: 1250, position: "center", alt: 700 },
  { name: "cat-gastronomia", file: "gastro.jpg", w: 1000, h: 1250, position: "centre", alt: 700 },
  { name: "cat-gastronomia-detalle", file: "gastro-detail.jpg", w: 900, h: 900, position: "center", alt: 600 },
  { name: "cat-experiencias", file: "experiencias.jpg", w: 1200, h: 900, position: "center", alt: 800 },
  { name: "cat-cultura", file: "cultura.jpg", w: 1400, h: 1050, position: "center", alt: 900 },
  { name: "finale-sierra", file: "finale.jpg", w: 2400, h: 1350, position: "center", alt: 1600 },
];

await mkdir(OUT, { recursive: true });

function render(input, width, height, position) {
  return sharp(input)
    .rotate()
    .resize(width, height, { fit: "cover", position })
    .modulate({ saturation: 0.9, brightness: 1.005 })
    .linear(1.035, -3)
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 80, effort: 5, smartSubsample: true });
}

for (const item of sizes) {
  const input = path.join(SRC, item.file);
  const suffix = `${item.h > item.w ? "tall" : "wide"}`;
  await render(input, item.w, item.h, item.position).toFile(
    path.join(OUT, `${item.name}-${item.w}.webp`),
  );
  await render(input, item.alt, Math.round((item.alt * item.h) / item.w), item.position).toFile(
    path.join(OUT, `${item.name}-${item.alt}.webp`),
  );
  console.log(`✓ ${item.name} (${suffix})`);
}

await sharp(path.join(SRC, "hero.jpg"))
  .resize(1200, 630, { fit: "cover", position: "center" })
  .modulate({ saturation: 0.9 })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(OUT, "og-explora-edomex.jpg"));

/* --------------------------------------------------------------------------
   Segunda edición visual: patrimonio de Axapusco y Otumba
   (Wikimedia Commons · CC BY-SA 4.0 · Subsecretaría de Turismo del Edomex)
   -------------------------------------------------------------------------- */

const heritage = [
  "axapusco-hacienda-aerea",
  "axapusco-capilla",
  "axapusco-hacienda-lateral",
  "axapusco-capilla-interior",
  "axapusco-panorama",
  "otumba-letras",
  "otumba-museo",
  "otumba-estacion",
  "otumba-chilaquiles",
];

for (const name of heritage) {
  const input = path.join(SRC, `${name}.jpg`);
  const meta = await sharp(input).metadata();
  const ratio = (meta.width ?? 1) / (meta.height ?? 1);
  const widths = ratio > 3 ? [1920, 1200] : [1600, 1000];

  for (const width of widths) {
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .modulate({ saturation: 1.02, brightness: 1.01 })
      .linear(1.02, -2)
      .sharpen({ sigma: 0.55 })
      .webp({ quality: 80, effort: 5, smartSubsample: true })
      .toFile(path.join(OUT, `${name}-${width}.webp`));
  }
  console.log(`✓ ${name} (${widths.join("/")}px)`);
}

const files = await readdir(OUT);
console.log(`\n${files.length} archivos en public/images`);
