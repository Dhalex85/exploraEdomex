import { asset, set } from "./assets";
import type { Destination, Photo } from "./types";

const otumbaPhoto = (stem: string, caption: string, alt: string): Photo => ({
  id: `otumba-${stem}`,
  src: asset(`images/destinos/estacion-otumba/${stem}-2560.webp`),
  srcSet: set([640, 1200, 1920, 2560].map((w) => ({ file: `images/destinos/estacion-otumba/${stem}-${w}.webp`, w }))),
  width: 2560, height: 1919, alt, caption,
  place: "Estación del Ferrocarril, Otumba, Estado de México",
  origin: "team",
  credit: { author: "EXPLORA EDOMEX", source: "Material propio proporcionado por el equipo" },
});
const station = otumbaPhoto("anden-aereo", "La estación y sus vías desde el aire",
  "Vista aérea de la estación de Otumba: techumbre, andén de piedra y vías ferroviarias junto a árboles y construcciones.");
const surroundings = otumbaPhoto("entorno-aereo", "Otra perspectiva del entorno ferroviario",
  "Vista aérea oblicua de las vías, el andén y las construcciones rodeadas de vegetación en el entorno de la estación de Otumba.");
const overhead = otumbaPhoto("vista-cenital", "Una mirada cenital junto a las vías",
  "Fotografía cenital de las vías, una construcción con techo metálico y una estructura circular de piedra entre áreas verdes en Otumba.");

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
      "Tres fotografías aéreas propias recorren las vías, el andén y el entorno de la estación desde distintas perspectivas. Abre cada imagen para explorar la toma completa.",
    ],
    status: "ready",
    hero: station,
    gallery: [station, surroundings, overhead],
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
