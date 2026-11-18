import sharp from "sharp";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourceDir = path.join(root, "assets-src/otumba-propias");
const outputDir = path.join(root, "public/images/destinos/estacion-otumba");
await mkdir(sourceDir, { recursive: true });
await mkdir(outputDir, { recursive: true });
const jobs = [["dos.jpg", "anden-aereo"], ["tres.jpg", "entorno-aereo"], ["UNO.jpg", "vista-cenital"]];
for (const [original, stem] of jobs) {
  const input = path.join(sourceDir, `${stem}.jpg`);
  if (process.argv[2]) await copyFile(path.resolve(process.argv[2], original), input);
  for (const width of [640, 1200, 1920, 2560]) {
    const info = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 }).toFile(path.join(outputDir, `${stem}-${width}.webp`));
    if (info.width !== width) throw new Error(`Source too small: ${original} for ${width}w`);
    console.log(`${stem}: ${info.width} × ${info.height}, ${info.size} bytes`);
  }
}
