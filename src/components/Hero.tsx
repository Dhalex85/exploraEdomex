import { ArrowDown, MapPin } from "lucide-react";
import { photographs } from "../data/content";

export function Hero() {
  const main = photographs.hero;
  const small = photographs.otumbaLetras;

  return (
    <section className="hero" id="top" aria-label="Portada">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__edition meta">
              <i aria-hidden="true" />
              Edición 01
            </span>
            <span className="hero__place meta">
              <MapPin size={12} strokeWidth={1.6} aria-hidden="true" />
              Axapusco · Otumba, México
            </span>
          </div>

          <h1 className="hero__title">
            <span className="hero__line hero__line--sans">
              <span>El Edomex</span>
            </span>
            <span className="hero__line hero__line--serif">
              <span>
                <em>no se cuenta.</em>
              </span>
            </span>
            <span className="hero__line hero__line--sans">
              <span>
                Se recorre<i className="hero__dot">.</i>
              </span>
            </span>
          </h1>

          <div className="hero__foot">
            <p className="hero__lede">
              Dos pueblos, una hacienda azul y un horizonte que no cabe en una
              postal.
            </p>
            <a className="hero__cta" href="#descubrir">
              <span>Abrir la ruta</span>
              <span className="hero__cta-icon" aria-hidden="true">
                <ArrowDown size={15} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </div>

        <div className="hero__collage">
          <figure className="hero__photo hero__photo--main">
            <img
              src={main.src}
              srcSet={main.srcSet}
              sizes="(max-width: 1024px) 92vw, 46vw"
              width={main.width}
              height={main.height}
              alt={main.alt}
              loading="eager"
              decoding="async"
              {...{ fetchpriority: "high" }}
            />
            <figcaption className="hero__photo-cap">
              <span>{main.caption}</span>
            </figcaption>
          </figure>

          <figure className="hero__photo hero__photo--small">
            <img
              src={small.src}
              srcSet={small.srcSet}
              sizes="(max-width: 720px) 52vw, 18vw"
              width={small.width}
              height={small.height}
              alt={small.alt}
              loading="eager"
              decoding="async"
            />
            <figcaption className="hero__photo-cap">
              <span>{small.location}</span>
            </figcaption>
          </figure>

          <div className="hero__stamp" aria-hidden="true">
            <svg viewBox="0 0 120 120" focusable="false">
              <defs>
                <path
                  id="stamp-circle"
                  d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                />
              </defs>
              <text>
                <textPath href="#stamp-circle" startOffset="0">
                  EXPLORA EDOMEX · EDICIÓN 01 · 2026 ·
                </textPath>
              </text>
            </svg>
            <span className="hero__stamp-star">✦</span>
          </div>

          <div className="hero__block">
            <span className="hero__block-num">01</span>
            <span className="hero__block-label">
              Altiplano
              <br />
              mexiquense
            </span>
          </div>

          <p className="hero__coords meta" aria-hidden="true">
            19.70° N<br />
            98.75° O
          </p>
        </div>
      </div>

      <div className="hero__footline shell">
        <span className="meta">Fotografía como punto de partida</span>
        <span className="meta">2 350 m s. n. m.</span>
        <span className="meta">Desliza para descubrir</span>
      </div>
    </section>
  );
}
