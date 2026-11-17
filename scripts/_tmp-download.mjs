import { writeFile } from "node:fs/promises";
import path from "node:path";

const wanted = [
  ["axapusco-hacienda-aerea", "File:Vista aerea de Hacienda Real San Miguel Ometusco, Axapusco.jpg"],
  ["axapusco-capilla", "File:Fachada de la Capilla de Hacienda Real San Miguel Ometusco, Axapusco.jpg"],
  ["axapusco-hacienda-lateral", "File:Vista Lateral, Hacienda Real San Miguel Ometusco, Axapusco.jpg"],
  ["axapusco-capilla-interior", "File:Atrio de la Capilla de Hacienda Real San Miguel Ometusco, Axapusco.jpg"],
  ["axapusco-panorama", "File:San Miguel Ometusco, Axapusco banner.jpg"],
  ["otumba-letras", "File:Plaza Central y Quiosco de Otumba 02.jpg"],
  ["otumba-museo", "File:Museo del Ferrocarril, Otumba 01.jpg"],
  ["otumba-estacion", "File:Museo del Ferrocarril, Otumba 02.jpg"],
  ["otumba-chilaquiles", "File:Chilaquiles con barbacoa, gastronomía de Otumba 01.jpg"],
];

const outDir = path.resolve("assets-src");
const meta = [];

for (const [name, title] of wanted) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=2200`;
  const res = await fetch(api, { headers: { "User-Agent": "ExploraEdomex/1.0 (editorial demo)" } });
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  const ii = page?.imageinfo?.[0];
  if (!ii) { console.error("missing", title); continue; }
  const bin = await fetch(ii.url, { headers: { "User-Agent": "ExploraEdomex/1.0" } });
  const buf = Buffer.from(await bin.arrayBuffer());
  await writeFile(path.join(outDir, `${name}.jpg`), buf);
  const m = ii.extmetadata;
  meta.push({
    name,
    title,
    page: ii.descriptionurl,
    width: ii.width,
    height: ii.height,
    license: m?.LicenseShortName?.value ?? "",
    licenseUrl: m?.LicenseUrl?.value ?? "",
    artist: (m?.Artist?.value ?? "").replace(/<[^>]+>/g, "").trim(),
  });
  console.log("saved", name, buf.length);
}

await writeFile(path.join(outDir, "_new-meta.json"), JSON.stringify(meta, null, 2));
console.log(JSON.stringify(meta, null, 2));
