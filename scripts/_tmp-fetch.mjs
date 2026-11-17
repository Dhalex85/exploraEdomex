import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.env.TEMP, "wm");
await mkdir(OUT, { recursive: true });

const terms = [
  "Hacienda Real San Miguel Ometusco",
  "Otumba Estado de Mexico",
  "Axapusco",
  "Teotihuacan",
];

const items = [];
for (const term of terms) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|extmetadata|size|mime|mime&iiurlwidth=1600`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "ExploraEdomex/1.0 (editorial demo)" } });
    const data = await res.json();
    const pages = Object.values(data?.query?.pages ?? {});
    for (const p of pages) {
      const ii = p.imageinfo?.[0];
      if (!ii || !/jpeg|png/i.test(ii.mime ?? "") || ii.width < 1200) continue;
      items.push({ term, title: p.title, ...ii, meta: ii.extmetadata });
    }
  } catch (e) {
    console.error("ERR", term, e.message);
  }
}

const picked = items.slice(0, 24);
const thumbs = [];
let i = 0;
for (const item of picked) {
  i++;
  const file = path.join(OUT, `${String(i).padStart(2, "0")}.jpg`);
  try {
    const r = await fetch(item.thumburl, { headers: { "User-Agent": "ExploraEdomex/1.0" } });
    if (!r.ok) continue;
    await writeFile(file, Buffer.from(await r.arrayBuffer()));
    item.file = file;
    item.n = i;
    item.license = item.meta?.LicenseShortName?.value ?? "?";
    item.artist = (item.meta?.Artist?.value ?? "?").replace(/<[^>]+>/g, "").trim();
    thumbs.push(item);
  } catch (e) {
    console.error("DL ERR", item.title, e.message);
  }
}

if (!thumbs.length) { console.log("NO ITEMS"); process.exit(0); }
const W = 300, H = 220, cols = 4, rows = Math.ceil(thumbs.length / cols);
const comps = [];
for (let k = 0; k < thumbs.length; k++) {
  const buf = await sharp(thumbs[k].file).resize(W, H, { fit: "cover" }).jpeg({ quality: 78 }).toBuffer();
  const left = (k % cols) * W, top = Math.floor(k / cols) * H;
  const label = Buffer.from(
    `<svg width="${W}" height="${H}"><rect x="6" y="6" width="34" height="26" rx="3" fill="#111" opacity=".85"/><text x="23" y="26" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#fff">${thumbs[k].n}</text></svg>`
  );
  comps.push({ input: buf, left, top });
  comps.push({ input: label, left, top });
}
await sharp({ create: { width: W * cols, height: H * rows, channels: 3, background: "#111" } })
  .composite(comps)
  .jpeg({ quality: 82 })
  .toFile(path.join(OUT, "contact.jpg"));

await writeFile(path.join(OUT, "map.json"), JSON.stringify(thumbs.map(t => ({ n: t.n, term: t.term, title: t.title, license: t.license, artist: t.artist, page: t.descriptionurl, width: t.width, height: t.height })), null, 2));
console.log(JSON.stringify(thumbs.map(t => `${t.n}. ${t.title} | ${t.license} | ${t.artist}`), null, 2));
