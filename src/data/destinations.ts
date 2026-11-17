import { asset, set } from "./assets";
import type { Destination, Photo } from "./types";

const photo = (
  id: string,
  file: string,
  sizes: Array<{ file: string; w: number }>,
  width: number,
  height: number,
  alt: string,
  caption: string,
  sourceFile: string,
): Photo => ({
  id, src: asset(file), srcSet: set(sizes), width, height, alt, caption,
  place: "Otumba, Estado de México",
  credit: {
    author: "Subsecretaría de Turismo del Estado de México",
    source: "Wikimedia Commons",
    url: `https://commons.wikimedia.org/wiki/File:${sourceFile}`,
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
});

const station = photo(
  "estacion",
  "images/municipios/otumba/portada-1600.webp",
  [
    { file: "images/municipios/otumba/portada-640.webp", w: 640 },
    { file: "images/municipios/otumba/portada-1000.webp", w: 1000 },
    { file: "images/municipios/otumba/portada-1600.webp", w: 1600 },
  ],
  1600, 1067,
  "Antigua estación de ferrocarril de Otumba, con su andén y las vías en primer plano.",
  "La estación y su andén",
  "Museo_del_Ferrocarril,_Otumba_02.jpg",
);

const museum = photo(
  "museo",
  "images/municipios/otumba/museo-1600.webp",
  [
    { file: "images/municipios/otumba/museo-640.webp", w: 640 },
    { file: "images/municipios/otumba/museo-1000.webp", w: 1000 },
    { file: "images/municipios/otumba/museo-1600.webp", w: 1600 },
  ],
  1600, 1067,
  "Sala del Museo del Ferrocarril de Otumba, con muros ocres y piezas ferroviarias.",
  "Dentro del Museo del Ferrocarril",
  "Museo_del_Ferrocarril,_Otumba_01.jpg",
);

const tracks = photo(
  "vias",
  "images/destinos/estacion-otumba/vias-900.webp",
  [{ file: "images/destinos/estacion-otumba/vias-900.webp", w: 900 }],
  900, 1200,
  "Encuadre vertical de las vías y el andén de la estación de Otumba.",
  "Vías y andén · recorte de la fotografía de portada",
  "Museo_del_Ferrocarril,_Otumba_02.jpg",
);

const sanFrancisco: Photo = {
  id: "san-francisco-fachada",
  src: asset("images/destinos/restaurante-san-francisco/portada-1448.webp"),
  srcSet: set([640, 1000, 1448].map((w) => ({ file: `images/destinos/restaurante-san-francisco/portada-${w}.webp`, w }))),
  width: 1448, height: 679,
  alt: "Fachada amarilla de dos plantas del Restaurante San Francisco, con arcos, columnas blancas y muros de piedra bajo un cielo azul.",
  caption: "La fachada del Restaurante San Francisco",
  place: "Xala, Axapusco, Estado de México",
  origin: "team",
  credit: { author: "EXPLORA EDOMEX", source: "Material propio proporcionado por el equipo" },
};

/** Exactly two initial entries. Only supplied or documented photographs. */
export const destinations: Destination[] = [
  {
    id: "estacion-otumba",
    slug: "estacion-otumba",
    municipalitySlug: "otumba",
    name: "Estación del Ferrocarril",
    category: "Patrimonio",
    location: { town: "Otumba", region: "Estado de México" },
    summary: "Un andén, las vías y otra forma de mirar el paso del tiempo. Descubre la antigua estación y el Museo del Ferrocarril.",
    description: [
      "En Otumba, la antigua estación del Ferrocarril Mexicano alberga el Museo del Ferrocarril. El edificio forma parte del patrimonio ferroviario del Estado de México.",
      "Esta primera mirada recorre su exterior y una sala del museo. Las fotografías conservan el nombre de su autor y la fuente para que puedas conocer también la historia de cada imagen.",
    ],
    status: "ready",
    hero: station,
    gallery: [station, museum, tracks],
    sources: [{
      title: "Museo del Ferrocarril en Otumba · Secretaría de Cultura",
      url: "https://sic.cultura.gob.mx/ficha.php?estado_id=15&table=museo&table_id=1420",
    }],
  },
  {
    id: "restaurante-san-francisco",
    // Nombre, jerarquía y fotografía proporcionados por el equipo.
    slug: "restaurante-san-francisco",
    municipalitySlug: "axapusco",
    name: "Restaurante San Francisco",
    category: "Gastronomía",
    location: { town: "Axapusco", locality: "Xala", region: "Estado de México" },
    summary: "Una primera mirada al Restaurante San Francisco, en Xala, municipio de Axapusco. Conoce su fachada y abre la fotografía para verla completa.",
    storyTitle: "Una primera mirada a San Francisco.",
    description: [
      "Restaurante San Francisco se encuentra en Xala, municipio de Axapusco, Estado de México.",
      "Su fachada amarilla, los arcos del balcón y los muros de piedra protagonizan esta primera fotografía del lugar.",
    ],
    status: "ready",
    hero: sanFrancisco,
    gallery: [sanFrancisco],
  },
];

export const siteHero = station;
export const getDestination = (slug: string) =>
  destinations.find((destination) => destination.slug === slug);

export const placePath = (destination: Destination) =>
  `/municipios/${destination.municipalitySlug}/lugares/${destination.slug}`;

export const getMunicipalityPlaces = (slug: string) =>
  destinations.filter((destination) => destination.municipalitySlug === slug);
