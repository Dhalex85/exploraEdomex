import { ArrowUpRight } from "lucide-react";
import { edition, photographs } from "../data/content";

export function Intro() {
  const photo = photographs.axapuscoHaciendaLateral;

  return (
    <section className="x-intro" id="xala">
      <div className="x-shell">
        <div className="x-section-head" data-reveal>
          <span className="x-label">
            <i aria-hidden="true" />
            01 — El lugar
          </span>
          <span className="meta">
            {edition.name} · {edition.place}
          </span>
        </div>

        <div className="x-intro__grid">
          <div className="x-intro__copy">
            <h2 className="x-intro__title" data-reveal>
              <span>El valle,</span>
              <em>sin prisa.</em>
            </h2>

            <div className="x-intro__body" data-reveal>
              <p>
                Xala está en Axapusco, en el noreste del Estado de México. Una
                hacienda de muros anchos, magueyes y caminos de tierra;
                alrededor, los pueblos de la región y el cielo abierto del
                altiplano.
              </p>

              <dl className="x-facts">
                <div>
                  <dt>Ubicación</dt>
                  <dd>Axapusco, Estado de México</dd>
                </div>
                <div>
                  <dt>Altitud</dt>
                  <dd>{edition.altitude}</dd>
                </div>
                <div>
                  <dt>Desde CDMX</dt>
                  <dd>{edition.distance}</dd>
                </div>
              </dl>

              <a className="x-link" href="#axapusco">
                <span>Seguir al territorio</span>
                <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="x-intro__media" data-reveal>
            <div className="x-frame">
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 960px) 100vw, 54vw"
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="x-caption">
              <span className="x-caption__dot" aria-hidden="true" />
              <span>{photo.caption}</span>
              <span>{photo.location}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
