import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { edition, photographs } from "../data/content";

export function Hero() {
  const photo = photographs.hero;

  return (
    <section className="x-hero" id="top" aria-label="Portada">
      <div className="x-hero__media">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="100vw"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="eager"
          decoding="async"
          {...{ fetchpriority: "high" }}
        />
        <span className="x-hero__veil" aria-hidden="true" />
      </div>

      <div className="x-shell x-hero__inner">
        <div className="x-hero__top">
          <span className="meta">{edition.kicker}</span>
          <span className="meta x-hero__location">
            <MapPin size={12} strokeWidth={1.5} aria-hidden="true" />
            {edition.place}, {edition.region}
          </span>
        </div>

        <div className="x-hero__copy">
          <span className="x-hero__eyebrow meta">
            <i aria-hidden="true" />
            {edition.name}
          </span>

          <h1 className="x-hero__title">
            <span className="x-hero__title-mask">
              <span>Xala</span>
            </span>
            <span className="x-hero__title-place">Axapusco</span>
          </h1>

          <p className="x-hero__lede">
            Una hacienda en el altiplano. Piedra, maguey y cielo abierto para
            llegar sin prisa.
          </p>

          <div className="x-hero__actions">
            <a className="x-btn x-btn--light" href="#xala">
              <span>Descubrir Xala</span>
              <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a className="x-link x-link--light" href="#galeria">
              <span>Ver galería</span>
              <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="x-hero__foot">
          <span className="meta">{edition.coords}</span>
          <span className="meta">{edition.altitude}</span>
          <span className="meta x-hero__credit">
            Imagen ambiental · Altiplano mexicano
          </span>
          <a className="x-hero__scroll meta" href="#xala">
            <span>Desliza</span>
            <ArrowDown size={13} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
