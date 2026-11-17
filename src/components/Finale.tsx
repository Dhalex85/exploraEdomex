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
        <p className="meta finale__kicker">04 — El siguiente capítulo</p>
        <h2 className="finale__title display" id="finale-title">
          Tu próxima historia
          <br />
          <em>comienza aquí.</em>
        </h2>
        <p className="finale__sub">
          El Edomex es más grande de lo que crees. Nosotros apenas estamos
          empezando.
        </p>
        <a className="cta" href="#universos">
          <span>Comenzar a explorar</span>
          <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
        </a>
      </div>

      <p className="finale__cap meta">
        {photo.caption} · Fotografía — {photo.credit.author}
      </p>
    </section>
  );
}
