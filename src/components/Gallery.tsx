import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { gallery } from "../data/content";
import { Lightbox } from "./Lightbox";

const categories = [
  "Todo",
  "Paisaje",
  "Pueblo",
  "Mesa",
  "Cultura",
  "Patrimonio",
] as const;

type Filter = (typeof categories)[number];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("Todo");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "Todo"
        ? gallery
        : gallery.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section className="gallery section--paper" id="miradas">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-tag">
            <i aria-hidden="true" />
            03 — Miradas
          </span>
          <span className="meta section-head__side">
            {gallery.length} fotografías documentadas
          </span>
        </div>

        <div className="gallery__head">
          <h2 className="gallery__title" data-reveal>
            <span className="gallery__title-sans">Miradas</span>
            <em>del altiplano.</em>
          </h2>

          <div className="gallery__aside" data-reveal>
            <p>
              Piedra, humo, agua y luz. Un recorrido visual por los lugares que
              esta edición encontró en el camino.
            </p>
            <span className="meta">Toca una imagen para verla completa</span>
          </div>
        </div>

        <div
          className="gallery__filters"
          role="group"
          aria-label="Filtrar la galería por tema"
        >
          {categories.map((category) => {
            const count =
              category === "Todo"
                ? gallery.length
                : gallery.filter((item) => item.category === category).length;
            return (
              <button
                key={category}
                type="button"
                className={`filter ${filter === category ? "is-active" : ""}`.trim()}
                aria-pressed={filter === category}
                onClick={() => {
                  setFilter(category);
                  setActive(null);
                }}
              >
                <span>{category}</span>
                <span className="filter__count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="gallery__grid" key={filter}>
          {visible.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              className={`g-card g-card--${item.size} accent-${item.accent}`}
              style={{ "--i": index } as CSSProperties}
              onClick={() => setActive(index)}
              aria-haspopup="dialog"
              aria-label={`Abrir fotografía: ${item.title}, ${item.photo.location}`}
            >
              <img
                src={item.photo.src}
                srcSet={item.photo.srcSet}
                sizes="(max-width: 720px) 50vw, (max-width: 1180px) 33vw, 26vw"
                width={item.photo.width}
                height={item.photo.height}
                alt={item.photo.alt}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="g-card__shade" aria-hidden="true" />
              <span className="g-card__top">
                <span className="g-card__cat">{item.category}</span>
                <span className="g-card__num meta">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <span className="g-card__info">
                <span className="g-card__title serif">{item.title}</span>
                <span className="g-card__loc meta">{item.photo.location}</span>
              </span>
              <span className="g-card__open" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </button>
          ))}
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
