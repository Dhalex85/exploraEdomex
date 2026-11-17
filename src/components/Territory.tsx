import { ArrowUpRight } from "lucide-react";
import { edition, photographs, territoryPoints } from "../data/content";

export function Territory() {
  const band = photographs.axapuscoPanorama;

  return (
    <section className="x-territory" id="axapusco">
      <figure className="x-band">
        <img
          src={band.src}
          srcSet={band.srcSet}
          sizes="100vw"
          width={band.width}
          height={band.height}
          alt={band.alt}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="x-shell x-band__foot">
          <span className="meta">{band.caption} · {band.location}</span>
          <span className="meta">Fotografía documental</span>
        </figcaption>
      </figure>

      <div className="x-shell x-territory__grid">
        <div className="x-territory__head">
          <span className="x-label x-label--light" data-reveal>
            <i aria-hidden="true" />
            03 — Alrededores
          </span>
          <h2 data-reveal>
            Más allá
            <em>de la hacienda.</em>
          </h2>
          <p data-reveal>
            Xala es la base. A menos de una hora, la región suma pueblo, mesa y
            piedra.
          </p>
        </div>

        <ol className="x-territory__list">
          {territoryPoints.map((point) => (
            <li key={point.index} data-reveal>
              <span className="x-territory__num meta">{point.index}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="x-shell x-territory__foot" data-reveal>
        <span className="meta">
          {edition.altitude} · {edition.distance} · menos de 1 h a Teotihuacán
        </span>
        <a className="x-link x-link--light" href="#galeria">
          <span>Volver a la galería</span>
          <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
