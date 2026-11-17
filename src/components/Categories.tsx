import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Chapter } from "./Chapter";
import { Figure } from "./Figure";
import { universes } from "../data/content";

export function Categories() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section className="universes section--paper" id="universos" data-reveal>
      <div className="shell">
        <Chapter number="03" name="Universos" end="Cuatro formas de mirar" />

        <div className="universes__head">
          <h2 className="universes__title display" data-reveal-item>
            Cuatro maneras
            <br />
            de perderse.
          </h2>

          <p className="universes__note" data-reveal-item>
            No todo se visita igual. Hay quien llega por el paisaje, quien se
            queda por la mesa y quien vuelve por una historia. Elige tu forma de
            mirar.
          </p>
        </div>

        <div className="universes__body">
          <div className="universes__list" role="list">
            {universes.map((universe, index) => {
              const selected = active === index;
              return (
                <div
                  key={universe.id}
                  id={universe.id}
                  role="listitem"
                  className={`u-row ${selected ? "is-active" : ""}`.trim()}
                >
                  <button
                    type="button"
                    className="u-trigger"
                    aria-pressed={selected}
                    aria-controls={`u-preview-${universe.id}`}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => !isMobile && setActive(index)}
                    onFocus={() => !isMobile && setActive(index)}
                  >
                    <span className="u-num meta">{universe.index}</span>
                    <span className="u-name display">{universe.name}</span>
                    <span className="u-meta">{universe.meta}</span>
                    <ArrowUpRight
                      className="u-arrow"
                      size={20}
                      strokeWidth={1.2}
                      aria-hidden="true"
                    />
                  </button>

                  {isMobile && selected && (
                    <div className="u-inline">
                      <Figure
                        photo={universe.image}
                        sizes="(max-width: 900px) 100vw, 1px"
                        showCaption={false}
                      />
                      <p className="u-inline__meta">
                        <span className="meta">{universe.detail}</span>
                        <span>{universe.image.location}</span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="universes__preview">
            {universes.map((universe, index) => (
              <figure
                key={universe.id}
                id={`u-preview-${universe.id}`}
                className={`u-preview ${active === index ? "is-active" : ""}`.trim()}
              >
                <img
                  src={universe.image.src}
                  srcSet={universe.image.srcSet}
                  sizes="(max-width: 900px) 1px, 32vw"
                  width={universe.image.width}
                  height={universe.image.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="u-caption">
                  <span className="meta">
                    {universe.index} — {universe.name}
                  </span>
                  <span className="u-caption__line">{universe.detail}</span>
                  <span className="u-caption__loc">
                    {universe.image.caption} · {universe.image.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
