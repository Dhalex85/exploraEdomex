import { Aperture, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Brand } from "./brand/Brand";
import { destinations } from "../data/destinations";
import { homeHero, municipalities } from "../data/municipalities";
import { coverPhoto } from "../data/cover";
import { asset, set } from "../data/assets";
import { PhotoCredit } from "./Photo";

const credits = Array.from(new Map([
  coverPhoto, homeHero, ...municipalities.map((municipality) => municipality.card),
  ...destinations.flatMap((place) => [place.hero, ...place.gallery]).filter((photo) => photo !== undefined),
].map((photo) => [photo.credit.url ?? photo.id, photo])).values());

export function Footer() {
  const home = useLocation().pathname === "/";
  return <footer className={`site-footer ${home ? "site-footer--home" : ""}`}>
    {home && <><div className="footer-ornament shell" aria-hidden="true"><span /><Aperture size={27} /><span /></div><figure className="footer-landscape"><img src={asset("images/municipios/axapusco/panorama-1920.webp")} srcSet={set([{ file: "images/municipios/axapusco/panorama-1000.webp", w: 1000 }, { file: "images/municipios/axapusco/panorama-1920.webp", w: 1920 }])} sizes="100vw" width={1920} height={384} loading="lazy" decoding="async" alt="Panorámica de San Miguel Ometusco, en el municipio de Axapusco." /><figcaption>San Miguel Ometusco · Axapusco</figcaption></figure></>}
    <div className="shell footer-content">
      <div className="footer-top"><div><Brand /><p>Descubre cerca. Explora más.</p></div><Link className="text-link" to="/#municipios">Explorar los municipios<ArrowRight size={18} aria-hidden="true" /></Link></div>
      <details className="footer-credits"><summary>Fotografías y créditos</summary><p className="reference-notice">Las fotografías de la estación de Otumba y del Restaurante San Francisco son material propio del equipo. Las fotografías identificadas como referencia se sustituirán por material propio de EXPLORA EDOMEX.</p><ul>{credits.map((photo) => <li key={photo.credit.url ?? photo.id}>{photo.credit.url ? <a href={photo.credit.url} target="_blank" rel="noreferrer">{photo.caption}</a> : <span>{photo.caption}</span>}<span><PhotoCredit photo={photo} /> · {photo.credit.source}</span></li>)}{home && <li><a href="https://commons.wikimedia.org/wiki/File:San_Miguel_Ometusco,_Axapusco_banner.jpg" target="_blank" rel="noreferrer">Panorámica de San Miguel Ometusco, Axapusco</a><span>Subsecretaría de Turismo · Wikimedia Commons · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a></span></li>}</ul></details>
      <div className="footer-bottom"><span translate="no">© {new Date().getFullYear()} EXPLORA EDOMEX</span><span>Axapusco y Otumba · Estado de México</span></div>
    </div>
  </footer>;
}
