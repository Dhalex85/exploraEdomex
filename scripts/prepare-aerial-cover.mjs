/** Temporary licensed design reference. Does not process the logo or place photos. */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const root = path.resolve(import.meta.dirname, "..");
const input = path.join(root, "assets-src/villa-del-carbon-reference.jpg");
const output = path.join(root, "public/images/site");
await mkdir(output, { recursive: true });
for (const width of [800, 1600, 2400]) {
  await sharp(input).resize(width, Math.round(width * 2 / 3), { fit: "cover", position: "centre" })
    .webp({ quality: 83, effort: 5 }).toFile(path.join(output, `aerial-cover-${width}.webp`));
}
await sharp(input).resize(900, 1400, { fit: "cover", position: "centre" })
  .webp({ quality: 83, effort: 5 }).toFile(path.join(output, "aerial-cover-mobile.webp"));
