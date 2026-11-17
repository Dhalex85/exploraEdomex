import { gastronomyPhotos } from "../data/content";

export function Gastronomy() {
  const { heat, plate, local } = gastronomyPhotos;

  return (
    <section className="gastro" id="gastronomia" aria-labelledby="gastro-title">
      <div className="shell">
        <div className="section-head section-head--dark" data-reveal>
          <span className="section-tag">
            <i aria-hidden="true" />
            05 — Gastronomía
          </span>
          <span className="meta section-head__side">Fuego bajo · mesa compartida</span>
        </div>

        <div className="gastro__top">
          <h2 className="gastro__title" id="gastro-title" data-reveal>
            <span>Se cocina</span>
            <em>despacio.</em>
          </h2>

          <div className="gastro__aside" data-reveal>
            <p>
              Maguey, maíz y fuego bajo. Lo que se cocina despacio se recuerda
              distinto.
            </p>
            <ul className="gastro__tags" aria-label="Sabores de la región">
              <li>Mole</li>
              <li>Barbacoa</li>
              <li>Maíz</li>
              <li>Maguey</li>
            </ul>
          </div>
        </div>

        <div className="gastro__mosaic">
          <figure className="gastro__photo gastro__photo--main" data-plate>
            <img
              src={heat.src}
              srcSet={heat.srcSet}
              sizes="(max-width: 980px) 100vw, 38vw"
              width={heat.width}
              height={heat.height}
              alt={heat.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="gastro__cap meta">
              {heat.caption} · {heat.location}
            </figcaption>
          </figure>

          <figure className="gastro__photo gastro__photo--detail" data-plate>
            <img
              src={plate.src}
              srcSet={plate.srcSet}
              sizes="(max-width: 980px) 100vw, 28vw"
              width={plate.width}
              height={plate.height}
              alt={plate.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="gastro__cap meta">
              {plate.caption} · {plate.location}
            </figcaption>
          </figure>

          <figure className="gastro__photo gastro__photo--local" data-plate>
            <img
              src={local.src}
              srcSet={local.srcSet}
              sizes="(max-width: 980px) 100vw, 20vw"
              width={local.width}
              height={local.height}
              alt={local.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="gastro__cap meta">{local.caption}</figcaption>
          </figure>

          <div className="gastro__block" data-reveal>
            <span className="meta">Despensa</span>
            <span className="gastro__block-list">
              Maíz
              <br />
              Maguey
              <br />
              Chile
            </span>
            <span className="gastro__block-star" aria-hidden="true">
              ✦
            </span>
          </div>
        </div>

        <div className="gastro__quote" data-reveal>
          <p className="serif">“El humo también es memoria.”</p>
          <span className="meta">Mesa de Otumba · barbacoa y chilaquiles</span>
        </div>
      </div>
    </section>
  );
}
