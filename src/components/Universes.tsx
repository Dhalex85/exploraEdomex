import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { universes } from "../data/content";

export function Universes() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const update = () => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setProgress(max > 0 ? rail.scrollLeft / max : 1);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".u-card");
    const step = (card?.getBoundingClientRect().width ?? 360) + 18;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section
      className="universes"
      id="experiencias"
      aria-labelledby="universes-title"
    >
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-tag">
            <i aria-hidden="true" />
            04 — Experiencias
          </span>
          <span className="meta section-head__side">Elige tu forma de mirar</span>
        </div>

        <div className="universes__head">
          <h2 className="universes__title" id="universes-title" data-reveal>
            <span>Cuatro formas</span>
            <em>de perderse.</em>
          </h2>
          <p className="universes__note" data-reveal>
            No todo se visita igual. Hay quien llega por el paisaje, quien se
            queda por la mesa y quien vuelve por una historia.
          </p>
        </div>
      </div>

      <div
        className="universes__rail"
        ref={railRef}
        onScroll={update}
        aria-label="Carrusel de universos"
      >
        <div className="universes__track">
          {universes.map((universe) => (
            <a
              key={universe.id}
              id={universe.id}
              href={universe.href}
              className={`u-card u-card--${universe.accent}`}
            >
              <span className="u-card__ghost" aria-hidden="true">
                {universe.index}
              </span>

              <span className="u-card__top">
                <span className="u-card__index meta">
                  {universe.index} / Universo
                </span>
                <span className="u-card__arrow" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.4} />
                </span>
              </span>

              <span className="u-card__name">{universe.name}</span>
              <span className="u-card__meta">{universe.meta}</span>

              <span className="u-card__media">
                <img
                  src={universe.image.src}
                  srcSet={universe.image.srcSet}
                  sizes="(max-width: 720px) 70vw, 24vw"
                  width={universe.image.width}
                  height={universe.image.height}
                  alt={universe.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span className="u-card__hint meta">Explorar</span>
            </a>
          ))}
        </div>
      </div>

      <div className="shell universes__controls">
        <div className="universes__bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} />
        </div>
        <div className="universes__buttons">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Universo anterior"
          >
            <ArrowLeft size={18} strokeWidth={1.4} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Universo siguiente"
          >
            <ArrowRight size={18} strokeWidth={1.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
