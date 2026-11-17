export type Credit = {
  author: string;
  source: string;
  url: string;
  license: string;
  licenseUrl: string;
};

export type Photograph = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  location: string;
  credit: Credit;
  ambient?: boolean;
};

export type Accent = "terracotta" | "marigold" | "verde" | "azul" | "rosa";

const commons = (
  page: string,
  _caption: string,
  _location: string,
): Credit => ({
  author: "Subsecretaría de Turismo del Estado de México",
  source: "Wikimedia Commons",
  url: page,
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
});

const pexels = (
  author: string,
  url: string,
): Credit => ({
  author,
  source: "Pexels",
  url,
  license: "Licencia Pexels",
  licenseUrl: "https://www.pexels.com/license/",
});

export const photographs = {
  hero: {
    src: "/images/hero-2400.webp",
    srcSet: "/images/hero-1600.webp 1600w, /images/hero-2400.webp 2400w",
    width: 2400,
    height: 1350,
    alt: "Sierras mexicanas cubiertas de vegetación con niebla entre los pliegues del terreno.",
    caption: "Sierras del interior de México",
    location: "Imagen ambiental · México",
    ambient: true,
    credit: pexels("Josué Rodríguez", "https://www.pexels.com/photo/27363404/"),
  },
  intro: {
    src: "/images/intro-bosque-1200.webp",
    srcSet: "/images/intro-bosque-800.webp 800w, /images/intro-bosque-1200.webp 1200w",
    width: 1200,
    height: 1500,
    alt: "Bosque de pinos cubierto de niebla en Amecameca de Juárez, Estado de México.",
    caption: "Bosque de niebla al amanecer",
    location: "Amecameca, Estado de México",
    credit: pexels("Alex Wolf MX", "https://www.pexels.com/photo/14541409/"),
  },
  altiplano: {
    src: "/images/axapusco-altura-1600.webp",
    srcSet: "/images/axapusco-altura-1100.webp 1100w, /images/axapusco-altura-1600.webp 1600w",
    width: 1600,
    height: 1000,
    alt: "Laderas y lomas del altiplano mexicano con vegetación baja y luz de tarde.",
    caption: "El altiplano, visto desde arriba",
    location: "Imagen ambiental · México",
    ambient: true,
    credit: pexels("Amar Preciado", "https://www.pexels.com/photo/34854584/"),
  },
  otumba: {
    src: "/images/otumba-plaza-1000.webp",
    srcSet: "/images/otumba-plaza-700.webp 700w, /images/otumba-plaza-1000.webp 1000w",
    width: 1000,
    height: 1250,
    alt: "Quiosco de hierro y cantera en el jardín central de Otumba, Estado de México, bajo un cielo nublado.",
    caption: "Plaza Central y Quiosco",
    location: "Otumba, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Plaza_Central_y_Quiosco_de_Otumba_01.jpg",
      "Plaza Central y Quiosco",
      "Otumba, Estado de México",
    ),
  },
  destinos: {
    src: "/images/cat-destinos-1000.webp",
    srcSet: "/images/cat-destinos-700.webp 700w, /images/cat-destinos-1000.webp 1000w",
    width: 1000,
    height: 1250,
    alt: "Un maguey de gran tamaño en primer plano, con sierras y un valle al fondo.",
    caption: "Maguey del altiplano",
    location: "Imagen ambiental · México",
    ambient: true,
    credit: pexels("Moisés Fonseca", "https://www.pexels.com/photo/35757488/"),
  },
  gastronomia: {
    src: "/images/cat-gastronomia-1000.webp",
    srcSet: "/images/cat-gastronomia-700.webp 700w, /images/cat-gastronomia-1000.webp 1000w",
    width: 1000,
    height: 1250,
    alt: "Cocinera tradicional junto a una olla de barro en un mercado de México.",
    caption: "Cocina de mercado",
    location: "Imagen ambiental · México",
    ambient: true,
    credit: pexels("Ericka Sánchez", "https://www.pexels.com/photo/37869534/"),
  },
  gastronomiaDetalle: {
    src: "/images/cat-gastronomia-detalle-900.webp",
    srcSet: "/images/cat-gastronomia-detalle-600.webp 600w, /images/cat-gastronomia-detalle-900.webp 900w",
    width: 900,
    height: 900,
    alt: "Platillo de mole oscuro con ajonjolí, verduras y hierbas frescas servido en un plato de barro.",
    caption: "Mole de la casa",
    location: "Tizayuca, México",
    credit: pexels("Leonardo Aquino", "https://www.pexels.com/photo/29530030/"),
  },
  experiencias: {
    src: "/images/cat-experiencias-1200.webp",
    srcSet: "/images/cat-experiencias-800.webp 800w, /images/cat-experiencias-1200.webp 1200w",
    width: 1200,
    height: 900,
    alt: "Un hombre con sombrero carga a un burro en brazos en Burrolandia, Otumba, rodeado de otros burros.",
    caption: "Burrolandia",
    location: "Otumba, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Burrolandia,Otumba_01.jpg",
      "Burrolandia",
      "Otumba, Estado de México",
    ),
  },
  cultura: {
    src: "/images/cat-cultura-1400.webp",
    srcSet: "/images/cat-cultura-900.webp 900w, /images/cat-cultura-1400.webp 1400w",
    width: 1400,
    height: 1050,
    alt: "Vista aérea de la Pirámide del Sol y la calzada de Teotihuacán al amanecer.",
    caption: "Pirámide del Sol",
    location: "Teotihuacán, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Pir%C3%A1mide_del_sol,_vista_a%C3%A9rea.jpg",
      "Pirámide del Sol",
      "Teotihuacán, Estado de México",
    ),
  },
  finale: {
    src: "/images/finale-sierra-2400.webp",
    srcSet: "/images/finale-sierra-1600.webp 1600w, /images/finale-sierra-2400.webp 2400w",
    width: 2400,
    height: 1350,
    alt: "Mar de nubes dorado sobre sierras mexicanas, con magueyes en primer plano al atardecer.",
    caption: "Sierra de Querétaro, imagen ambiental",
    location: "Imagen ambiental · México",
    ambient: true,
    credit: pexels("Lehi Lara Leyvas", "https://www.pexels.com/photo/11775147/"),
  },
  axapuscoHaciendaAerea: {
    src: "/images/axapusco-hacienda-aerea-1600.webp",
    srcSet:
      "/images/axapusco-hacienda-aerea-1000.webp 1000w, /images/axapusco-hacienda-aerea-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Vista aérea de la Hacienda Real San Miguel Ometusco, en Axapusco, con sus patios y magueyes.",
    caption: "Hacienda de Ometusco, vista aérea",
    location: "Axapusco, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Vista_aerea_de_Hacienda_Real_San_Miguel_Ometusco,_Axapusco.jpg",
      "Hacienda de Ometusco, vista aérea",
      "Axapusco, Estado de México",
    ),
  },
  axapuscoCapilla: {
    src: "/images/axapusco-capilla-1600.webp",
    srcSet:
      "/images/axapusco-capilla-1000.webp 1000w, /images/axapusco-capilla-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Fachada azul y blanca de la Capilla de la Hacienda Real San Miguel Ometusco, en Axapusco.",
    caption: "Capilla de la hacienda",
    location: "Axapusco, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Fachada_de_la_Capilla_de_Hacienda_Real_San_Miguel_Ometusco,_Axapusco.jpg",
      "Capilla de la hacienda",
      "Axapusco, Estado de México",
    ),
  },
  axapuscoHaciendaLateral: {
    src: "/images/axapusco-hacienda-lateral-1600.webp",
    srcSet:
      "/images/axapusco-hacienda-lateral-1000.webp 1000w, /images/axapusco-hacienda-lateral-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Fachada azul de la Hacienda Real San Miguel Ometusco con carretas de madera en el patio.",
    caption: "Patio de la hacienda",
    location: "Axapusco, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Vista_Lateral,_Hacienda_Real_San_Miguel_Ometusco,_Axapusco.jpg",
      "Patio de la hacienda",
      "Axapusco, Estado de México",
    ),
  },
  axapuscoCapillaInterior: {
    src: "/images/axapusco-capilla-interior-1600.webp",
    srcSet:
      "/images/axapusco-capilla-interior-1000.webp 1000w, /images/axapusco-capilla-interior-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Interior de la capilla de la Hacienda Real San Miguel Ometusco, con muros claros y retablos.",
    caption: "Interior de la capilla",
    location: "Axapusco, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Atrio_de_la_Capilla_de_Hacienda_Real_San_Miguel_Ometusco,_Axapusco.jpg",
      "Interior de la capilla",
      "Axapusco, Estado de México",
    ),
  },
  axapuscoPanorama: {
    src: "/images/axapusco-panorama-1920.webp",
    srcSet:
      "/images/axapusco-panorama-1200.webp 1200w, /images/axapusco-panorama-1920.webp 1920w",
    width: 1920,
    height: 384,
    alt: "Panorámica de la Hacienda Real San Miguel Ometusco con el volcán al fondo.",
    caption: "Hacienda y volcán",
    location: "Axapusco, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:San_Miguel_Ometusco,_Axapusco_banner.jpg",
      "Hacienda y volcán",
      "Axapusco, Estado de México",
    ),
  },
  otumbaLetras: {
    src: "/images/otumba-letras-1600.webp",
    srcSet:
      "/images/otumba-letras-1000.webp 1000w, /images/otumba-letras-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Letras monumentales de Otumba en la plaza central, con el tranvía turístico y edificios históricos.",
    caption: "Letras de Otumba",
    location: "Otumba, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Plaza_Central_y_Quiosco_de_Otumba_02.jpg",
      "Letras de Otumba",
      "Otumba, Estado de México",
    ),
  },
  otumbaMuseo: {
    src: "/images/otumba-museo-1600.webp",
    srcSet:
      "/images/otumba-museo-1000.webp 1000w, /images/otumba-museo-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Sala del Museo del Ferrocarril de Otumba con muros ocres y piezas antiguas.",
    caption: "Museo del Ferrocarril",
    location: "Otumba, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Museo_del_Ferrocarril,_Otumba_01.jpg",
      "Museo del Ferrocarril",
      "Otumba, Estado de México",
    ),
  },
  otumbaEstacion: {
    src: "/images/otumba-estacion-1600.webp",
    srcSet:
      "/images/otumba-estacion-1000.webp 1000w, /images/otumba-estacion-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Antigua estación de ferrocarril de Otumba junto a las vías.",
    caption: "Estación de ferrocarril",
    location: "Otumba, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Museo_del_Ferrocarril,_Otumba_02.jpg",
      "Estación de ferrocarril",
      "Otumba, Estado de México",
    ),
  },
  otumbaChilaquiles: {
    src: "/images/otumba-chilaquiles-1600.webp",
    srcSet:
      "/images/otumba-chilaquiles-1000.webp 1000w, /images/otumba-chilaquiles-1600.webp 1600w",
    width: 1600,
    height: 1067,
    alt: "Chilaquiles con barbacoa servidos en un plato negro, gastronomía de Otumba.",
    caption: "Chilaquiles con barbacoa",
    location: "Otumba, Estado de México",
    credit: commons(
      "https://commons.wikimedia.org/wiki/File:Chilaquiles_con_barbacoa,_gastronom%C3%ADa_de_Otumba_01.jpg",
      "Chilaquiles con barbacoa",
      "Otumba, Estado de México",
    ),
  },
} satisfies Record<string, Photograph>;

export const navLinks = [
  { label: "Descubrir", href: "#descubrir" },
  { label: "Destinos", href: "#destinos" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Gastronomía", href: "#gastronomia" },
  { label: "Cultura", href: "#cultura" },
];

export const marqueeWords = [
  "Axapusco",
  "Otumba",
  "Teotihuacán",
  "Maguey",
  "Mole",
  "Bosque de niebla",
  "Pueblos con historia",
  "Altiplano",
];

export type Destination = {
  id: string;
  name: string;
  accent: Accent;
  tagline: string;
  copy: string;
  coords: string;
  altitude: string;
  tags: string[];
  lead: Photograph;
  tall: Photograph;
  detail: Photograph;
};

export const destinations: Destination[] = [
  {
    id: "axapusco",
    name: "Axapusco",
    accent: "verde",
    tagline: "El silencio tiene otra textura.",
    copy: "Una hacienda azul, magueyes y un horizonte que se despeina. Aquí la distancia se mide en caminos de tierra.",
    coords: "19.72° N — 98.75° O",
    altitude: "2 350 m s. n. m.",
    tags: ["Hacienda de Ometusco", "Capilla", "Altiplano"],
    lead: photographs.axapuscoPanorama,
    tall: photographs.axapuscoCapilla,
    detail: photographs.axapuscoHaciendaLateral,
  },
  {
    id: "otumba",
    name: "Otumba",
    accent: "terracotta",
    tagline: "La plaza como punto de partida.",
    copy: "Un jardín, un quiosco y el tiempo suficiente para mirar. Después, las vías, los burros y la mesa.",
    coords: "19.70° N — 98.75° O",
    altitude: "2 350 m s. n. m.",
    tags: ["Centro histórico", "Burrolandia", "Ferrocarril"],
    lead: photographs.otumbaLetras,
    tall: photographs.otumba,
    detail: photographs.otumbaEstacion,
  },
];

export type GalleryItem = {
  photo: Photograph;
  title: string;
  category: "Paisaje" | "Pueblo" | "Mesa" | "Cultura" | "Patrimonio";
  size: "wide" | "tall" | "square" | "panorama" | "portrait";
  accent: Accent;
};

export const gallery: GalleryItem[] = [
  {
    photo: photographs.hero,
    title: "Sierras del interior",
    category: "Paisaje",
    size: "wide",
    accent: "verde",
  },
  {
    photo: photographs.otumbaLetras,
    title: "Otumba, en letras",
    category: "Pueblo",
    size: "tall",
    accent: "terracotta",
  },
  {
    photo: photographs.intro,
    title: "Bosque de niebla",
    category: "Paisaje",
    size: "portrait",
    accent: "azul",
  },
  {
    photo: photographs.axapuscoCapilla,
    title: "Capilla de Ometusco",
    category: "Patrimonio",
    size: "tall",
    accent: "azul",
  },
  {
    photo: photographs.gastronomia,
    title: "Fuego lento",
    category: "Mesa",
    size: "square",
    accent: "terracotta",
  },
  {
    photo: photographs.cultura,
    title: "Pirámide del Sol",
    category: "Cultura",
    size: "wide",
    accent: "marigold",
  },
  {
    photo: photographs.gastronomiaDetalle,
    title: "Mole de la casa",
    category: "Mesa",
    size: "square",
    accent: "terracotta",
  },
  {
    photo: photographs.experiencias,
    title: "Burrolandia",
    category: "Pueblo",
    size: "wide",
    accent: "verde",
  },
  {
    photo: photographs.axapuscoHaciendaLateral,
    title: "Patio de la hacienda",
    category: "Patrimonio",
    size: "wide",
    accent: "azul",
  },
  {
    photo: photographs.otumba,
    title: "Plaza de Otumba",
    category: "Pueblo",
    size: "portrait",
    accent: "rosa",
  },
  {
    photo: photographs.otumbaMuseo,
    title: "Museo del Ferrocarril",
    category: "Cultura",
    size: "square",
    accent: "marigold",
  },
  {
    photo: photographs.otumbaEstacion,
    title: "Estación de Otumba",
    category: "Patrimonio",
    size: "wide",
    accent: "verde",
  },
  {
    photo: photographs.finale,
    title: "Mar de nubes",
    category: "Paisaje",
    size: "wide",
    accent: "azul",
  },
  {
    photo: photographs.axapuscoCapillaInterior,
    title: "Interior de la capilla",
    category: "Patrimonio",
    size: "portrait",
    accent: "marigold",
  },
  {
    photo: photographs.otumbaChilaquiles,
    title: "Chilaquiles con barbacoa",
    category: "Mesa",
    size: "square",
    accent: "terracotta",
  },
];


export const universes: {
  id: string;
  index: string;
  name: string;
  meta: string;
  detail: string;
  image: Photograph;
  accent: Accent;
  href: string;
}[] = [
  {
    id: "universo-destinos",
    index: "01",
    name: "Destinos",
    meta: "Sierras, bosques y miradores.",
    detail: "Horizontes que invitan a detenerse.",
    image: photographs.destinos,
    accent: "verde",
    href: "#destinos",
  },
  {
    id: "universo-gastronomia",
    index: "02",
    name: "Gastronomía",
    meta: "Maguey, maíz y fuego bajo.",
    detail: "Sabores que cuentan historias.",
    image: photographs.gastronomiaDetalle,
    accent: "terracotta",
    href: "#gastronomia",
  },
  {
    id: "universo-experiencias",
    index: "03",
    name: "Experiencias",
    meta: "Rutas y encuentros.",
    detail: "Encuentros que se quedan contigo.",
    image: photographs.experiencias,
    accent: "azul",
    href: "#experiencias",
  },
  {
    id: "universo-cultura",
    index: "04",
    name: "Cultura",
    meta: "Piedra, oficio y memoria.",
    detail: "Un legado que sigue vivo.",
    image: photographs.cultura,
    accent: "marigold",
    href: "#cultura",
  },
];


export const gastronomyPhotos = {
  heat: photographs.gastronomia,
  plate: photographs.gastronomiaDetalle,
  local: photographs.otumbaChilaquiles,
};

export const culturePhotos = {
  pyramid: photographs.cultura,
  chapel: photographs.axapuscoCapillaInterior,
  museum: photographs.otumbaMuseo,
  hacienda: photographs.axapuscoHaciendaAerea,
};
