import { culturePhotos } from "../data/content";

export function Culture() {
  const { pyramid, chapel, museum } = culturePhotos;

  return (
    <section className="culture section--ink" id="cultura" aria-labelledby="culture-title">
      <span className="culture__ghost" aria-hidden="true">
        06
      </span>

      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-tag">
            <i aria-hidden="true" />
            06 — Cultura
          </span>
          <span className="meta section-head__side">Piedra, oficio y memoria</span>
        </div>

        <div className="culture__head">
          <h2 className="culture__title" id="culture-title" data-reveal>
            <span>El pasado</span>
            <em>sigue aquí.</em>
          </h2>

          <div className="culture__aside" data-reveal>
            <p>
              Pirámides, haciendas y museos que no se quedaron en el pasado.
              Siguen en el paisaje, en los muros y en la conversación.
            </p>
            <ul className="culture__tags" aria-label="Temas de cultura">
              <li>Teotihuacán</li>
              <li>Haciendas</li>
              <li>Museos</li>
              <li>Oficios</li>
            </ul>
          </div>
        </div>

        <div className="culture__grid">
          <figure className="culture__lead" data-plate>
            <img
              src={pyramid.src}
              srcSet={pyramid.srcSet}
              sizes="(max-width: 980px) 100vw, 62vw"
              width={pyramid.width}
              height={pyramid.height}
              alt={pyramid.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="culture__lead-cap">
              <span className="meta">{pyramid.location}</span>
              <span className="serif">{pyramid.caption}</span>
            </figcaption>
          </figure>

          <div className="culture__stack">
            <figure className="culture__small culture__small--chapel" data-plate>
              <img
                src={chapel.src}
                srcSet={chapel.srcSet}
                sizes="(max-width: 980px) 50vw, 22vw"
                width={chapel.width}
                height={chapel.height}
                alt={chapel.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="meta">
                {chapel.caption} · {chapel.location}
              </figcaption>
            </figure>

            <figure className="culture__small culture__small--museum" data-plate>
              <img
                src={museum.src}
                srcSet={museum.srcSet}
                sizes="(max-width: 980px) 50vw, 22vw"
                width={museum.width}
                height={museum.height}
                alt={museum.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="meta">
                {museum.caption} · {museum.location}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="culture__foot" data-reveal>
          <span className="meta">Patrimonio vivo</span>
          <p className="serif">
            La historia no está detrás de una vitrina. Está en la calle.
          </p>
        </div>
      </div>
    </section>
  );
}
