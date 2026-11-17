import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  gallery,
  type GalleryCategory,
  type GalleryItem,
} from "../data/content";
import { Lightbox } from "./Lightbox";

const categories: Array<"Todo" | GalleryCategory> = [
  "Todo",
  "Hacienda",
  "Territorio",
  "Mesa",
  "Alrededores",
];

type Filter = (typeof categories)[number];

const countFor = (category: Filter) =>
  category === "Todo"
    ? gallery.length
    : gallery.filter((item) => item.category === category).length;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("Todo");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo<GalleryItem[]>(
    () =>
      filter === "Todo"
        ? gallery
        : gallery.filter((item) => item.category === filter),
    [filter],
  );

  const feature = filter === "Todo" ? visible[0] : null;
  const masonry = feature ? visible.slice(1) : visible;

  const openItem = (index: number) => setActive(index);

  return (
    <section className="x-gallery" id="galeria">
      <div className="x-shell">
        <div className="x-section-head" data-reveal>
          <span className="x-label">
            <i aria-hidden="true" />
            02 — Galería
          </span>
          <span className="meta" aria-live="polite">
            {countFor(filter)} fotografías
          </span>
        </div>

        <div className="x-gallery__intro">
          <h2 data-reveal>
            Miradas
            <em>del valle.</em>
          </h2>
          <p data-reveal>
            Axapusco, Otumba y el altiplano en doce imágenes. Toca una
            fotografía para verla completa.
          </p>
        </div>

        <div
          className="x-gallery__filters"
          role="group"
          aria-label="Filtrar la galería por tema"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`x-filter ${filter === category ? "is-active" : ""}`.trim()}
              aria-pressed={filter === category}
              onClick={() => {
                setFilter(category);
                setActive(null);
              }}
            >
              <span>{category}</span>
              <span className="x-filter__count">{countFor(category)}</span>
            </button>
          ))}
        </div>
      </div>

      {feature && (
        <button
          type="button"
          className="x-feature"
          onClick={() => openItem(0)}
          aria-haspopup="dialog"
          aria-label={`Abrir fotografía: ${feature.title}, ${feature.photo.location}`}
        >
          <span className="x-feature__media">
            <img
              src={feature.photo.src}
              srcSet={feature.photo.srcSet}
              sizes="100vw"
              width={feature.photo.width}
              height={feature.photo.height}
              alt={feature.photo.alt}
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="x-feature__foot">
            <span className="meta">
              01 / {String(visible.length).padStart(2, "0")} ·{" "}
              {feature.category}
            </span>
            <span className="x-feature__title serif">{feature.title}</span>
            <span className="meta x-feature__place">
              {feature.photo.location}
            </span>
            <span className="x-feature__open" aria-hidden="true">
              <ArrowUpRight size={17} strokeWidth={1.4} />
            </span>
          </span>
        </button>
      )}

      <div className="x-shell">
        <div className="x-gallery__masonry" key={`${filter}-${visible.length}`}>
          {masonry.map((item, index) => {
            const itemIndex = feature ? index + 1 : index;
            return (
              <button
                key={`${item.title}-${index}`}
                type="button"
                className="x-shot"
                onClick={() => openItem(itemIndex)}
                aria-haspopup="dialog"
                aria-label={`Abrir fotografía: ${item.title}, ${item.photo.location}`}
              >
                <span className="x-shot__media">
                  <img
                    src={item.photo.src}
                    srcSet={item.photo.srcSet}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    width={item.photo.width}
                    height={item.photo.height}
                    alt={item.photo.alt}
                    loading={itemIndex < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </span>
                <span className="x-shot__foot">
                  <span className="meta x-shot__index">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="x-shot__title serif">{item.title}</span>
                  <span className="meta x-shot__place">
                    {item.photo.location}
                  </span>
                  <span className="x-shot__arrow" aria-hidden="true">
                    <ArrowUpRight size={15} strokeWidth={1.4} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          items={visible}
          index={active}
          onClose={() => setActive(null)}
          onNavigate={setActive}
        />
      )}
    </section>
  );
}
