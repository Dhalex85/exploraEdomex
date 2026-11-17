import { ArrowUpRight } from "lucide-react";
import { photographs } from "../data/content";

export function Finale() {
  const photo = photographs.finale;

  return (
    <section className="finale" id="explorar" aria-labelledby="finale-title">
      <div className="finale__media">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="100vw"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="finale__veil" aria-hidden="true" />

      <div className="shell finale__inner">
        <span className="section-tag section-tag--light">
          <i aria-hidden="true" />
          07 — El siguiente capítulo
        </span>

        <h2 className="finale__title" id="finale-title">
          <span>Nos vemos</span>
          <em>en el camino.</em>
        </h2>

        <p className="finale__sub">
          El Edomex es más grande de lo que crees. Nosotros apenas estamos
          empezando.
        </p>

        <a className="finale__cta" href="#destinos">
          <span>Volver a la ruta</span>
          <ArrowUpRight size={17} strokeWidth={1.4} aria-hidden="true" />
        </a>
      </div>

      <p className="finale__cap meta">
        {photo.caption} · Fotografía — {photo.credit.author}
      </p>
    </section>
  );
}
