export type Credit = {
  author: string;
  source: string;
  url: string;
  license: string;
  licenseUrl: string;
};

export type Photo = {
  id: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  place: string;
  credit: Credit;
};

export type Destination = {
  id: string;
  slug: string;
  municipalitySlug: string;
  name: string;
  category: string;
  location?: { town: string; region: string; locality?: string };
  summary: string;
  description: string[];
  status: "ready" | "pending";
  hero?: Photo;
  gallery: Photo[];
  /** Include only confirmed details, with their supporting source. */
  practical?: Array<{ label: string; value: string; sourceUrl: string }>;
  sources?: Array<{ title: string; url: string }>;
};

export type Municipality = {
  slug: string;
  name: string;
  region: "Estado de México";
  hero: Photo;
  card: Photo;
  coverLabel: string;
  description: string;
};
