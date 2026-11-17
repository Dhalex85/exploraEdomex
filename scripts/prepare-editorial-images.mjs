/** Documentary photographs only. Never processes logo.png or stock restaurant images. */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const jobs = [
  ["axapusco-capilla.jpg", "municipios/axapusco/portada", [640, 1000, 1600]],
  ["axapusco-hacienda-lateral.jpg", "municipios/axapusco/patio", [640, 1000, 1600]],
  ["otumba-estacion.jpg", "municipios/otumba/portada", [640, 1000, 1600]],
  ["otumba-museo.jpg", "municipios/otumba/museo", [640, 1000, 1600]],
  ["axapusco-panorama.jpg", "municipios/axapusco/panorama", [1000, 1920]],
];
for (const [source, output, widths] of jobs) {
  const input = path.join(root, "assets-src", source);
  for (const width of widths) {
    const target = path.join(root, "public/images", `${output}-${width}.webp`);
    await mkdir(path.dirname(target), { recursive: true });
    const info = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 }).toFile(target);
    if (info.width !== width) throw new Error(`Source too small: ${source} for ${width}w`);
    console.log(`${output}-${width}.webp: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
}
