import { ArrowUpRight, MapPin } from "lucide-react";
import { edition, visitFacts } from "../data/content";

export function Visit() {
  return (
    <section className="x-visit" id="visita">
      <div className="x-shell">
        <div className="x-section-head" data-reveal>
          <span className="x-label">
            <i aria-hidden="true" />
            04 — Visita
          </span>
          <span className="meta">
            {edition.place}, {edition.region}
          </span>
        </div>

        <div className="x-visit__grid">
          <div className="x-visit__copy" data-reveal>
            <h2>
              Ven a <em>Xala.</em>
            </h2>
            <p>
              A hora y media del Valle de México, por la carretera a Otumba. La
              hacienda es el punto de partida para recorrer el altiplano.
            </p>
            <a
              className="x-btn x-btn--ink"
              href={edition.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
              <span>Abrir ubicación</span>
              <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </a>
          </div>

          <dl className="x-visit__facts" data-reveal>
            {visitFacts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="x-visit__note" data-reveal>
          <span className="meta">Nota editorial</span>
          <p>
            Las imágenes de esta edición corresponden a los lugares indicados
            en cada pie. Las fotografías de Xala se incorporarán cuando estén
            disponibles.
          </p>
        </div>
      </div>
    </section>
  );
}
