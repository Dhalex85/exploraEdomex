import sharp from "sharp";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const input = path.join(root, "assets-src/san-francisco-portada.jpg");
// Optional original path on first import; subsequent runs use the archived source.
if (process.argv[2]) await copyFile(path.resolve(process.argv[2]), input);
const output = path.join(root, "public/images/destinos/restaurante-san-francisco");
await mkdir(output, { recursive: true });
for (const width of [640, 1000, 1448]) {
  const info = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
    .webp({ quality: 86, effort: 5 }).toFile(path.join(output, `portada-${width}.webp`));
  if (info.width !== width) throw new Error(`Source too small for ${width}w`);
  console.log(`${info.width} × ${info.height}: ${info.size} bytes`);
}
