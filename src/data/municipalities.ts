import { asset, set } from "./assets";
import { getDestination } from "./destinations";
import type { Municipality, Photo } from "./types";

const municipalPhoto = (id: string, stem: string, caption: string, alt: string, source: string): Photo => ({
  id, src: asset(`images/municipios/axapusco/${stem}-1600.webp`),
  srcSet: set([640, 1000, 1600].map((w) => ({ file: `images/municipios/axapusco/${stem}-${w}.webp`, w }))),
  width: 1600, height: 1067, alt, caption, place: "San Miguel Ometusco, Axapusco",
  credit: { author: "Subsecretaría de Turismo", source: "Wikimedia Commons",
    url: `https://commons.wikimedia.org/wiki/File:${source}`,
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
});
export const homeHero = municipalPhoto("axapusco-capilla", "portada",
  "Capilla de San Miguel Ometusco, Axapusco",
  "La fachada azul y las torres de la capilla de la Hacienda Real San Miguel Ometusco, en Axapusco, bajo un cielo azul.",
  "Fachada_de_la_Capilla_de_Hacienda_Real_San_Miguel_Ometusco,_Axapusco.jpg");
const axapuscoCard = municipalPhoto("axapusco-patio", "patio",
  "Patio de la Hacienda Real San Miguel Ometusco, Axapusco",
  "Patio y fachada azul de la Hacienda Real San Miguel Ometusco, en el municipio de Axapusco.",
  "Vista_Lateral,_Hacienda_Real_San_Miguel_Ometusco,_Axapusco.jpg");
export const municipalities: Municipality[] = [
  { slug: "axapusco", name: "Axapusco", region: "Estado de México", hero: homeHero, card: axapuscoCard,
    coverLabel: "San Miguel Ometusco",
    description: "Nuestra primera parada en Axapusco está en Xala: el Restaurante San Francisco. Conoce su fachada y abre la fotografía para verla completa." },
  { slug: "otumba", name: "Otumba", region: "Estado de México", hero: getDestination("estacion-otumba")!.hero!, card: getDestination("estacion-otumba")!.hero!,
    coverLabel: "Estación del Ferrocarril",
    description: "Una primera mirada a Otumba desde su Estación del Ferrocarril. Explora las vías, el andén y su entorno con nuestras fotografías aéreas." },
];
export const getMunicipality = (slug: string) => municipalities.find((municipality) => municipality.slug === slug);
