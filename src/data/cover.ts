import { asset, set } from "./assets";
import type { Photo } from "./types";

/** Temporary licensed reference. Replace with the team's own aerial photograph. */
export const coverPhoto: Photo = {
  id: "aerial-reference-villa-del-carbon",
  src: asset("images/site/aerial-cover-2400.webp"),
  srcSet: set([800, 1600, 2400].map((w) => ({ file: `images/site/aerial-cover-${w}.webp`, w }))),
  width: 2400, height: 1600,
  alt: "Vista aérea de un lago turquesa y una península boscosa entre niebla en Villa del Carbón. Fotografía de referencia para el diseño.",
  caption: "Villa del Carbón · Estado de México",
  place: "Villa del Carbón, Estado de México",
  credit: {
    author: "Oscar Garcia Medina", source: "Pexels",
    url: "https://www.pexels.com/photo/scenic-landscape-of-a-lake-12302974/",
    license: "Licencia Pexels", licenseUrl: "https://www.pexels.com/license/",
  },
};