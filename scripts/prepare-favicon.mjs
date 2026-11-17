/** Derivative icons from the official lens pixels. The source logo is never changed. */
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "public/images/logo.png");
const circle = Buffer.from('<svg width="424" height="424"><circle cx="212" cy="212" r="208" fill="white"/></svg>');
const lens = await sharp(source).extract({ left: 1124, top: 92, width: 424, height: 424 })
  .composite([{ input: circle, blend: "dest-in" }]).png().toBuffer();
const icons = [];
for (const size of [16, 32, 48, 180, 192]) {
  const png = await sharp(lens).resize(size, size).png().toBuffer();
  const name = size === 180 ? "apple-touch-icon.png" : `favicon-${size}.png`;
  await writeFile(path.join(root, "public", name), png);
  if (size <= 48) icons.push({ size, png });
}
// ICO directory entries support embedded PNG and retain alpha at every size.
const header = Buffer.alloc(6 + icons.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icons.length, 4);
let offset = header.length;
icons.forEach(({ size, png }, index) => {
  const entry = 6 + index * 16;
  header[entry] = size;
  header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile(path.join(root, "public/favicon.ico"), Buffer.concat([header, ...icons.map(({ png }) => png)]));
console.log("Transparent lens favicons generated. Original logo unchanged.");
