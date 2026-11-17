import { destinations } from "../data/content";

export function Destinations() {
  return (
    <section className="destinations section--ink" id="destinos">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-tag">
            <i aria-hidden="true" />
            02 — Destinos
          </span>
          <span className="meta section-head__side">Dos pueblos · una región</span>
        </div>

        <div className="destinations__head">
          <h2 className="destinations__title" data-reveal>
            <span>Dos pueblos.</span>
            <em>Un horizonte.</em>
          </h2>
          <p className="destinations__note" data-reveal>
            Al noreste del Valle de México, donde el llano empieza a levantarse.
            Todo se recorre a escala humana.
          </p>
        </div>

        {destinations.map((destination, index) => {
          const panorama = destination.lead.width / destination.lead.height > 3;
          return (
            <article
              key={destination.id}
              id={destination.id}
              className={`dest dest--${destination.accent} ${
                index % 2 === 1 ? "is-reverse" : ""
              }`.trim()}
            >
              <header className="dest__head">
                <span className="dest__index meta">0{index + 1}</span>
                <h3 className="dest__name">{destination.name}</h3>
                <p className="dest__geo meta">
                  {destination.coords}
                  <br />
                  {destination.altitude}
                </p>
              </header>

              <figure
                className={`dest__lead ${panorama ? "is-panorama" : ""}`.trim()}
                data-plate
              >
                <img
                  src={destination.lead.src}
                  srcSet={destination.lead.srcSet}
                  sizes="100vw"
                  width={destination.lead.width}
                  height={destination.lead.height}
                  alt={destination.lead.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="dest__lead-cap meta">
                  {destination.lead.caption} · {destination.lead.location}
                </figcaption>
              </figure>

              <div className="dest__stage">
                <figure className="dest__tall" data-plate>
                  <img
                    src={destination.tall.src}
                    srcSet={destination.tall.srcSet}
                    sizes="(max-width: 980px) 100vw, 32vw"
                    width={destination.tall.width}
                    height={destination.tall.height}
                    alt={destination.tall.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="dest__figure-cap meta">
                    {destination.tall.caption}
                  </figcaption>
                </figure>

                <div className="dest__content">
                  <p className="dest__tagline serif">{destination.tagline}</p>
                  <p className="dest__copy">{destination.copy}</p>
                  <ul className="dest__tags" aria-label="Temas del destino">
                    {destination.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <figure className="dest__detail" data-plate>
                  <img
                    src={destination.detail.src}
                    srcSet={destination.detail.srcSet}
                    sizes="(max-width: 980px) 100vw, 30vw"
                    width={destination.detail.width}
                    height={destination.detail.height}
                    alt={destination.detail.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </article>
          );
        })}

        <div className="route" aria-hidden="true">
          <span className="route__node">
            <i />
            Axapusco
          </span>
          <span className="route__track" />
          <span className="route__node">
            Otumba
            <i />
          </span>
        </div>

        <p className="destinations__note destinations__note--foot" data-reveal>
          Las fotografías de esta edición están documentadas con su ubicación
          real. Las imágenes ambientales no corresponden a un sitio específico:
          funcionan como atmósfera visual.
        </p>
      </div>
    </section>
  );
}
